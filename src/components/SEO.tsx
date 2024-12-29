import React from 'react';
import { SITE_CONFIG } from '../utils/constants';

const SEO: React.FC = () => {
  return (
    <>
      <title>{SITE_CONFIG.title}</title>
      <meta name="description" content={SITE_CONFIG.description} />
      <meta name="author" content={SITE_CONFIG.author} />
      
      {/* Open Graph */}
      <meta property="og:title" content={SITE_CONFIG.title} />
      <meta property="og:description" content={SITE_CONFIG.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_CONFIG.siteUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={SITE_CONFIG.twitterHandle} />
      <meta name="twitter:title" content={SITE_CONFIG.title} />
      <meta name="twitter:description" content={SITE_CONFIG.description} />
    </>
  );
};

export default SEO;