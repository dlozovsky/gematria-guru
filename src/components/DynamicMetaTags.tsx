import { useEffect } from 'react';

interface DynamicMetaTagsProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

const DynamicMetaTags = ({ title, description, imageUrl }: DynamicMetaTagsProps) => {
  useEffect(() => {
    // Store original values to restore when component unmounts
    const originalTitle = document.title;
    const originalDesc = document.querySelector('meta[name="description"]')?.getAttribute('content');
    const originalOgTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');
    const originalOgDesc = document.querySelector('meta[property="og:description"]')?.getAttribute('content');
    const originalOgImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content');
    const originalTwitterTitle = document.querySelector('meta[name="twitter:title"]')?.getAttribute('content');
    const originalTwitterDesc = document.querySelector('meta[name="twitter:description"]')?.getAttribute('content');
    const originalTwitterImage = document.querySelector('meta[name="twitter:image"]')?.getAttribute('content');

    // Update meta tags if values are provided
    if (title) {
      document.title = title;
      updateMetaTag('property', 'og:title', title);
      updateMetaTag('name', 'twitter:title', title);
    }
    if (description) {
      updateMetaTag('name', 'description', description);
      updateMetaTag('property', 'og:description', description);
      updateMetaTag('name', 'twitter:description', description);
    }
    if (imageUrl) {
      updateMetaTag('property', 'og:image', imageUrl);
      updateMetaTag('name', 'twitter:image', imageUrl);
    }

    // Helper function to update meta tags
    function updateMetaTag(attrName: string, attrValue: string, content: string) {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    }

    // Cleanup function to restore original values
    return () => {
      document.title = originalTitle;
      if (originalDesc) updateMetaTag('name', 'description', originalDesc);
      if (originalOgTitle) updateMetaTag('property', 'og:title', originalOgTitle);
      if (originalOgDesc) updateMetaTag('property', 'og:description', originalOgDesc);
      if (originalOgImage) updateMetaTag('property', 'og:image', originalOgImage);
      if (originalTwitterTitle) updateMetaTag('name', 'twitter:title', originalTwitterTitle);
      if (originalTwitterDesc) updateMetaTag('name', 'twitter:description', originalTwitterDesc);
      if (originalTwitterImage) updateMetaTag('name', 'twitter:image', originalTwitterImage);
    };
  }, [title, description, imageUrl]);

  // This component doesn't render anything
  return null;
};

export default DynamicMetaTags; 