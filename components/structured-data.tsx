"use client"

interface StructuredDataProps {
  type: 'organization' | 'product' | 'breadcrumb' | 'faq' | 'localBusiness'
  data: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Qalaa",
          "description": "Premium Tunisian olive oil company specializing in extra virgin olive oils from ancient groves",
          "url": "https://qalaa.com",
          "logo": "https://qalaa.com/qalaa-logo.png",
          "foundingDate": "1800",
          "founder": {
            "@type": "Person",
            "name": "Qalaa Family"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "TN",
            "addressRegion": "Tunisia"
          },
          "sameAs": [
            "https://www.facebook.com/qalaa",
            "https://www.instagram.com/qalaa",
            "https://www.twitter.com/qalaa"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+216-XX-XXX-XXX",
            "contactType": "customer service",
            "availableLanguage": ["English", "Arabic"]
          }
        }

      case 'product':
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": data.name_en,
          "description": data.description_en,
          "image": data.image_url,
          "brand": {
            "@type": "Brand",
            "name": "Qalaa"
          },
          "offers": {
            "@type": "Offer",
            "price": data.price,
            "priceCurrency": "USD",
            "availability": data.in_stock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            "seller": {
              "@type": "Organization",
              "name": "Qalaa"
            }
          },
          "aggregateRating": data.rating ? {
            "@type": "AggregateRating",
            "ratingValue": data.rating,
            "reviewCount": data.review_count
          } : undefined
        }

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        }

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }

      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "FoodEstablishment",
          "name": "Qalaa Olive Oil",
          "description": "Premium Tunisian olive oil producer and retailer",
          "url": "https://qalaa.com",
          "telephone": "+216-XX-XXX-XXX",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Olive Grove Street",
            "addressLocality": "Sfax",
            "addressRegion": "Tunisia",
            "postalCode": "3000",
            "addressCountry": "TN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "34.7406",
            "longitude": "10.7603"
          },
          "openingHours": "Mo-Fr 09:00-17:00",
          "priceRange": "$$$"
        }

      default:
        return {}
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2)
      }}
    />
  )
}

