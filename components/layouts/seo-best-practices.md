# SEO Best Practices Implementation Guide

## 1. Metadata Configuration
```typescript
// app/layout.tsx or app/page.tsx
export const metadata = {
  title: 'Site Title',
  description: 'Default description for SEO'
};
```

## 2. Image Optimization
```typescript
// Use Next.js <Image> for all images (auto-optimized, lazy-loaded)
import Image from 'next/image'

// Example:
<Image 
  src="/hero.jpg" 
  alt="Hero image" 
  width={1200} 
  height={600}
  priority // for above-the-fold images
  placeholder="blur" // for better UX
  blurDataURL="data:image/jpeg;base64,..." // base64 encoded placeholder
/>
```

## 3. Social Media Optimization
```
// Place opengraph-image.png or .jpg in each route folder
// to auto-generate social preview images
app/
├── opengraph-image.png
├── opengraph-image.alt.txt
├── page.tsx
└── products/
    ├── opengraph-image.png
    ├── opengraph-image.alt.txt
    └── page.tsx
```

## 4. Code Splitting & Performance
```typescript
// Use dynamic imports for large components to reduce initial load
import dynamic from 'next/dynamic'

const Heavy = dynamic(() => import('@/components/Heavy'), { 
  loading: () => <Spinner/>,
  ssr: false // if component doesn't need SSR
});
```

## 5. Tailwind CSS Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // ... rest of config
}
```

## 6. Structured Data (JSON-LD)
```typescript
// Add structured data in <Head> for blog posts or products
export default function ProductPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Product Name",
    "description": "Product Description",
    "image": "https://example.com/image.jpg",
    "offers": {
      "@type": "Offer",
      "price": "29.99",
      "priceCurrency": "USD"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Your component content */}
    </>
  )
}
```

## 7. Analytics & Monitoring
```typescript
// Insert Google Analytics/Search Console scripts into <Head>
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## 8. HTTPS & Security
- Deploy on HTTPS (use platforms like Vercel with auto SSL)
- Ensure all external links use HTTPS
- Use secure headers in next.config.js

## 9. Performance Optimization
- Use Next.js Image component for all images
- Implement proper caching strategies
- Use dynamic imports for code splitting
- Optimize fonts with next/font
- Use proper loading states

## 10. Accessibility
- Add proper alt text for all images
- Use semantic HTML elements
- Ensure proper color contrast
- Implement keyboard navigation
- Add ARIA labels where needed

