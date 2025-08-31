import { useEffect } from 'react';

interface BreadcrumbStructuredDataProps {
  items: { name: string; url: string }[];
}

export const BreadcrumbStructuredData: React.FC<BreadcrumbStructuredDataProps> = ({ items }) => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    script.setAttribute('data-breadcrumb-structured-data', 'true');
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('[data-breadcrumb-structured-data]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [items]);

  return null;
};

interface CourseStructuredDataProps {
  course: {
    name: string;
    description: string;
    provider: string;
    duration: string;
    mode: string;
    fee: string;
    url: string;
  };
}

export const CourseStructuredData: React.FC<CourseStructuredDataProps> = ({ course }) => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": course.name,
      "description": course.description,
      "provider": {
        "@type": "Organization",
        "name": course.provider
      },
      "educationalCredentialAwarded": course.name,
      "timeRequired": course.duration,
      "courseMode": course.mode,
      "offers": {
        "@type": "Offer",
        "price": course.fee,
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      },
      "url": course.url
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    script.setAttribute('data-course-structured-data', 'true');
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('[data-course-structured-data]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [course]);

  return null;
};

interface FAQStructuredDataProps {
  faqs: { question: string; answer: string }[];
}

export const FAQStructuredData: React.FC<FAQStructuredDataProps> = ({ faqs }) => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    script.setAttribute('data-faq-structured-data', 'true');
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('[data-faq-structured-data]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [faqs]);

  return null;
};