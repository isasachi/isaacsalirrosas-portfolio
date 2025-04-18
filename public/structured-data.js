// This script adds structured data to your website for better SEO
document.addEventListener('DOMContentLoaded', function() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Isaac Salirrosas",
    "url": "https://isaacsalirrosas-portfolio.vercel.app/",
    "image": "https://isaacsalirrosas-portfolio.vercel.app/og-image.jpg",
    "jobTitle": "Frontend Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "sameAs": [
      "https://github.com/isasachi",
      "https://linkedin.com/in/isaacsalirrosas",
      "https://twitter.com/isaacsalirrosas"
    ],
    "description": "Frontend Developer specializing in React, TypeScript, and Tailwind CSS."
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
});
