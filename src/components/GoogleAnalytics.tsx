import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId: string;
}

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GoogleAnalytics = ({ measurementId }: GoogleAnalyticsProps) => {
  useEffect(() => {
    // Skip analytics during development
    if (import.meta.env.DEV) {
      return;
    }

    // Add Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `;
    
    document.head.appendChild(script1);
    document.head.appendChild(script2);

    return () => {
      // Clean up scripts when component unmounts
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [measurementId]);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
