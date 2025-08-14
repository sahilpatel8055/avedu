import { useState, useEffect, useRef } from "react";

interface BellPopupConfig {
  showDelay?: number; // Time in seconds before showing popup
  autoHideDelay?: number; // Time in seconds before auto-hiding popup
}

const defaultConfig: BellPopupConfig = {
  showDelay: 10,
  autoHideDelay: 35
};

export const useBellPopup = (
  onApplyNow: () => void,
  config: BellPopupConfig = {}
) => {
  const finalConfig = { ...defaultConfig, ...config };
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const showTimerRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Reset on page navigation
  const resetForNewPage = () => {
    setIsPopupVisible(false);
    if (showTimerRef.current) {
      clearTimeout(showTimerRef.current);
    }
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }
  };

  // Auto-show popup after delay
  useEffect(() => {
    // Clear existing timer
    if (showTimerRef.current) {
      clearTimeout(showTimerRef.current);
    }

    console.log(`Bell popup: Setting up timer for ${finalConfig.showDelay} seconds`);

    showTimerRef.current = setTimeout(() => {
      console.log('Bell popup: Timer triggered, showing popup');
      setIsPopupVisible(true);
    }, finalConfig.showDelay! * 1000);

    return () => {
      if (showTimerRef.current) {
        clearTimeout(showTimerRef.current);
      }
    };
  }, [finalConfig.showDelay]);

  // Auto-hide popup after delay
  useEffect(() => {
    if (isPopupVisible) {
      hideTimerRef.current = setTimeout(() => {
        console.log('Bell popup: Auto-hiding after timeout');
        setIsPopupVisible(false);
      }, finalConfig.autoHideDelay! * 1000);

      return () => {
        if (hideTimerRef.current) {
          clearTimeout(hideTimerRef.current);
        }
      };
    }
  }, [isPopupVisible, finalConfig.autoHideDelay]);

  // Reset on route change
  useEffect(() => {
    resetForNewPage();
  }, [window.location.pathname]);

  const handleBellClick = () => {
    if (isPopupVisible) {
      setIsPopupVisible(false);
    } else {
      setIsPopupVisible(true);
    }
  };

  const handleApplyNow = () => {
    console.log('Bell popup: Apply Now clicked');
    setIsPopupVisible(false);
    onApplyNow();
  };

  const handleClose = () => {
    setIsPopupVisible(false);
  };

  const hideBellPopup = () => {
    setIsPopupVisible(false);
  };

  return {
    isPopupVisible,
    handleBellClick,
    handleApplyNow,
    handleClose,
    hideBellPopup
  };
};