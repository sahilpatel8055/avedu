import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// CSS for hiding scrollbar
const hiddenScrollbarStyle = `
  .section-nav-scroll::-webkit-scrollbar {
    display: none;
  }
`;

interface SectionNavigationProps {
  sections: Array<{
    id: string;
    label: string;
  }>;
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      // Find the entry with highest intersection ratio or the one that's most visible
      let activeEntry = null;
      let maxRatio = 0;
      
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          activeEntry = entry;
        }
      });
      
      if (activeEntry) {
        setActiveSection(activeEntry.target.id);
        
        // Auto-scroll navigation on mobile/tablet to show active section
        setTimeout(() => {
          const activeButton = document.querySelector(`[data-section="${activeEntry.target.id}"]`);
          if (activeButton && window.innerWidth <= 1024) {
            activeButton.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center'
            });
          }
        }, 100);
      }
    }, observerOptions);

    // Observe all sections
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Check if we should show the navigation (after first section)
    const handleScroll = () => {
      const firstSection = document.getElementById(sections[0]?.id);
      if (firstSection) {
        const rect = firstSection.getBoundingClientRect();
        setIsVisible(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <style>{hiddenScrollbarStyle}</style>
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
        <div 
          className="flex items-center gap-2 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border"
          style={{ 
            backgroundColor: 'rgba(255, 241, 241, 0.9)',
            borderColor: 'rgba(255, 140, 0, 0.2)'
          }}
        >
          <div className="flex gap-1 overflow-x-auto max-w-[80vw] section-nav-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {sections.map(({ id, label }) => (
            <button
              key={id}
              data-section={id}
              onClick={() => scrollToSection(id)}
              className={cn(
                "px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap",
                "hover:scale-105 hover:shadow-md",
                activeSection === id
                  ? "text-white shadow-lg transform scale-105"
                  : "text-gray-700 hover:text-gray-900"
              )}
              style={{
                backgroundColor: activeSection === id ? '#ff8c00' : 'transparent',
                animation: activeSection === id ? 'pulse 0.3s ease-out' : 'none'
              }}
            >
              {label}
            </button>
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionNavigation;