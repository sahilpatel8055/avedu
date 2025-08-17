// Performance optimization utilities

// Lazy loading for images
export const lazyLoadImage = (img: HTMLImageElement, src: string) => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          image.src = src;
          image.classList.remove('lazy-image');
          image.classList.add('loaded');
          imageObserver.unobserve(image);
        }
      });
    });
    imageObserver.observe(img);
  } else {
    // Fallback for browsers without IntersectionObserver
    img.src = src;
    img.classList.add('loaded');
  }
};

// Preload critical resources
export const preloadCriticalImages = () => {
  const criticalImages = [
    '/assets/hero-education.jpg',
    '/assets/course/mba.jpg',
    '/assets/course/bca.jpg',
    '/assets/course/bba.jpg',
    '/lovable-uploads/d1a868cd-cbeb-4c57-9a43-86bb3e758613.png'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Defer non-critical scripts
export const deferNonCriticalScripts = () => {
  const scripts = document.querySelectorAll('script[defer]');
  scripts.forEach(script => {
    if (script instanceof HTMLScriptElement && !script.hasAttribute('data-deferred')) {
      script.setAttribute('data-deferred', 'true');
      setTimeout(() => {
        const newScript = document.createElement('script');
        newScript.src = script.src;
        newScript.async = true;
        document.head.appendChild(newScript);
      }, 1000);
    }
  });
};

// Font optimization
export const optimizeFontLoading = () => {
  // Add font-display: swap to critical fonts
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'font';
  link.type = 'font/woff2';
  link.href = 'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2';
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};

// Critical CSS inlining (for above-the-fold content)
export const inlineCriticalCSS = () => {
  const criticalCSS = `
    .hero-section { 
      min-height: 60vh; 
      background: linear-gradient(135deg, hsl(210 100% 50%) 0%, hsl(260 100% 35%) 100%); 
    }
    .btn-3d { 
      background: linear-gradient(145deg, hsl(280 100% 60%), hsl(320 100% 65%)); 
      transform: perspective(1000px) rotateX(10deg); 
    }
  `;
  
  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.appendChild(style);
};

// Web Vitals optimization
export const optimizeWebVitals = () => {
  // Reduce layout shifts
  const images = document.querySelectorAll('img:not([width]):not([height])');
  images.forEach(img => {
    if (img instanceof HTMLImageElement) {
      img.style.aspectRatio = '16/9'; // Default aspect ratio
    }
  });

  // Optimize largest contentful paint
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    heroImage.setAttribute('fetchpriority', 'high');
  }
};

// Initialize all performance optimizations
export const initPerformanceOptimizations = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      preloadCriticalImages();
      optimizeFontLoading();
      optimizeWebVitals();
      setTimeout(deferNonCriticalScripts, 2000);
    });
  } else {
    preloadCriticalImages();
    optimizeFontLoading(); 
    optimizeWebVitals();
    setTimeout(deferNonCriticalScripts, 2000);
  }
};