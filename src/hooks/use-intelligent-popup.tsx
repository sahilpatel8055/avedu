import { useEffect, useRef } from "react";

interface IntelligentPopupConfig {
  timeDelay?: number; // Time in seconds before showing popup
  scrollThreshold?: number; // Percentage of page to scroll before showing popup
  submissionCooldown?: number; // Minutes to wait after form submission
  closureCooldown?: number; // Minutes to wait after closing form
}

const defaultConfig: IntelligentPopupConfig = {
  timeDelay: 25,
  scrollThreshold: 50,
  submissionCooldown: 10,
  closureCooldown: 5
};

export const useIntelligentPopup = (
  onTrigger: () => void,
  config: IntelligentPopupConfig = {}
) => {
  const finalConfig = { ...defaultConfig, ...config };
  const hasTriggered = useRef(false);
  const timeTriggered = useRef(false);
  const scrollTriggered = useRef(false);
  const exitIntentTriggered = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check if user is in cooldown period
  const isInCooldown = (): boolean => {
    const lastSubmission = localStorage.getItem('counseling_last_submission');
    const lastClosure = localStorage.getItem('counseling_last_closure');
    const now = Date.now();

    if (lastSubmission) {
      const submissionTime = parseInt(lastSubmission);
      const cooldownEnd = submissionTime + (finalConfig.submissionCooldown! * 60 * 1000);
      if (now < cooldownEnd) return true;
    }

    if (lastClosure) {
      const closureTime = parseInt(lastClosure);
      const cooldownEnd = closureTime + (finalConfig.closureCooldown! * 60 * 1000);
      if (now < cooldownEnd) return true;
    }

    return false;
  };

  // Trigger the popup if conditions are met
  const triggerPopup = () => {
    if (!hasTriggered.current && !isInCooldown()) {
      hasTriggered.current = true;
      onTrigger();
    }
  };

  // Reset triggers when component unmounts or route changes
  const resetTriggers = () => {
    hasTriggered.current = false;
    timeTriggered.current = false;
    scrollTriggered.current = false;
    exitIntentTriggered.current = false;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Time-based trigger (Enhanced for mobile)
  useEffect(() => {
    // Clear any existing timer
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Skip if in cooldown
    if (isInCooldown()) return;

    // Schedule timer for both mobile and desktop
    timeoutRef.current = setTimeout(() => {
      if (!timeTriggered.current && !hasTriggered.current) {
        timeTriggered.current = true;
        triggerPopup();
      }
    }, finalConfig.timeDelay! * 1000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [finalConfig.timeDelay]);

  // Scroll-based trigger
  useEffect(() => {
    if (isInCooldown()) return;

    const handleScroll = () => {
      if (scrollTriggered.current || hasTriggered.current) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Avoid division by zero
      if (documentHeight <= windowHeight) return;
      
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      
      if (scrollPercentage >= finalConfig.scrollThreshold!) {
        scrollTriggered.current = true;
        triggerPopup();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exit-intent trigger
  useEffect(() => {
    if (isInCooldown()) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (exitIntentTriggered.current || hasTriggered.current) return;
      
      // Check if mouse is moving towards the top of the page
      if (e.clientY <= 50) {
        exitIntentTriggered.current = true;
        triggerPopup();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  // Reset triggers on route change
  useEffect(() => {
    resetTriggers();
  }, [window.location.pathname]);

  return {
    isInCooldown: isInCooldown(),
    resetTriggers
  };
};