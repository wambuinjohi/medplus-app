/**
 * SEO Helpers for structured data and meta information
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
}

export const SITE_CONFIG = {
  siteName: 'Medplus Africa',
  url: 'https://medplusafrica.com',
  logo: 'https://medplusafrica.com/assets/medplus-logo.webp',
  description: 'Trusted distributor of critical care supplies, hospital consumables, and furniture across Africa.',
  email: 'info@medplusafrica.com',
  phone: '+254 741 207 690',
  address: 'P.O. Box 85988-00200, Nairobi, Eastern Bypass, Membley',
};

/**
 * Generate structured data for Organization
 */
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_CONFIG.siteName,
  url: SITE_CONFIG.url,
  logo: SITE_CONFIG.logo,
  description: SITE_CONFIG.description,
  email: SITE_CONFIG.email,
  telephone: SITE_CONFIG.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE_CONFIG.address,
    addressCountry: 'KE',
  },
  sameAs: [
    'https://www.facebook.com/medplusafrica',
    'https://www.instagram.com/medplusafrica',
  ],
});

/**
 * Generate structured data for WebPage
 */
export const generateWebPageSchema = (metadata: SEOMetadata) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: metadata.title,
  description: metadata.description,
  url: metadata.url || SITE_CONFIG.url,
  image: metadata.image || SITE_CONFIG.logo,
  publisher: {
    '@type': 'Organization',
    name: SITE_CONFIG.siteName,
    logo: {
      '@type': 'ImageObject',
      url: SITE_CONFIG.logo,
    },
  },
});

/**
 * Generate structured data for Product
 */
export const generateProductSchema = (product: {
  name: string;
  description: string;
  image?: string;
  url?: string;
  category?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: product.image || SITE_CONFIG.logo,
  url: product.url,
  category: product.category,
  brand: {
    '@type': 'Brand',
    name: SITE_CONFIG.siteName,
  },
  offers: {
    '@type': 'AggregateOffer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'KES',
  },
});

/**
 * Generate structured data for LocalBusiness
 */
export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_CONFIG.siteName,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  logo: SITE_CONFIG.logo,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE_CONFIG.address,
    addressCountry: 'KE',
  },
  areaServed: {
    '@type': 'Region',
    name: 'East Africa',
  },
});

/**
 * Generate breadcrumb schema
 */
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

/**
 * Update document meta tags
 */
export const updateMetaTags = (metadata: SEOMetadata) => {
  // Title
  document.title = `${metadata.title} | ${SITE_CONFIG.siteName}`;

  // Meta tags
  updateOrCreateMetaTag('name', 'description', metadata.description);
  updateOrCreateMetaTag('name', 'keywords', metadata.keywords || '');

  // Open Graph
  updateOrCreateMetaTag('property', 'og:title', `${metadata.title}`);
  updateOrCreateMetaTag('property', 'og:description', metadata.description);
  updateOrCreateMetaTag('property', 'og:url', metadata.url || SITE_CONFIG.url);
  updateOrCreateMetaTag('property', 'og:image', metadata.image || SITE_CONFIG.logo);
  updateOrCreateMetaTag('property', 'og:type', metadata.type || 'website');

  // Twitter
  updateOrCreateMetaTag('name', 'twitter:title', metadata.title);
  updateOrCreateMetaTag('name', 'twitter:description', metadata.description);
  updateOrCreateMetaTag('name', 'twitter:image', metadata.image || SITE_CONFIG.logo);

  // Canonical
  updateOrCreateCanonical(metadata.url || SITE_CONFIG.url);
};

/**
 * Helper to update or create meta tags
 */
const updateOrCreateMetaTag = (type: 'name' | 'property', attribute: string, content: string) => {
  let tag = document.querySelector(`meta[${type}="${attribute}"]`) as HTMLMetaElement;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(type, attribute);
    document.head.appendChild(tag);
  }
  tag.content = content;
};

/**
 * Helper to update or create canonical link
 */
const updateOrCreateCanonical = (url: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
};

/**
 * Add structured data script to head
 */
export const addStructuredData = (schema: any) => {
  let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schema);
};
