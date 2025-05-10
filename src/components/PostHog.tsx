import { useEffect } from 'react';

interface PostHogProps {
  apiKey: string;
  apiHost: string;
}

declare global {
  interface Window {
    posthog: any;
  }
}

const PostHog = ({ apiKey, apiHost }: PostHogProps) => {
  useEffect(() => {
    // Skip analytics during development
    if (import.meta.env.DEV) {
      return;
    }

    // Add PostHog script
    const script = document.createElement('script');
    script.innerHTML = `
      !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e.__SV=[],e.__SV.push(["init",arguments]),e.__SV.push(["identify",arguments]),e.__SV.push(["capture",arguments]),e.__SV.push(["register",arguments]),e.__SV.push(["registerOnce",arguments]),p=t.createElement("script"),p.type="text/javascript",p.async=!0,p.src="${apiHost}/static/array.js",r=t.getElementsByTagName("script")[0],r.parentNode.insertBefore(p,r))}(document,window.posthog||[]);
      posthog.init('${apiKey}', {api_host: '${apiHost}'});
    `;
    
    document.head.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.head.removeChild(script);
    };
  }, [apiKey, apiHost]);

  return null; // This component doesn't render anything
};

export default PostHog;
