import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { StoryPreview } from "@/components/story-preview"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AwardsSection } from "@/components/awards-section"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Qalaa - Premium Tunisian Olive Oil | Guardians of the Olive",
  description: "Discover Qalaa's fortress of flavor - premium extra virgin olive oils from Tunisia's ancient groves. Guardians of the Olive, Keepers of the Gold. Now available worldwide!",
  keywords: "premium olive oil, Tunisian olive oil, extra virgin, Mediterranean, luxury food, artisanal, organic, ancient groves",
  openGraph: {
    title: "Qalaa - Premium Tunisian Olive Oil | Guardians of the Olive",
    description: "Discover Qalaa's fortress of flavor - premium extra virgin olive oils from Tunisia's ancient groves.",
    images: [
      {
        url: "/tunisian-olive-grove-hero.webp",
        width: 1200,
        height: 630,
        alt: "Ancient Tunisian olive groves at golden hour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qalaa - Premium Tunisian Olive Oil",
    description: "Guardians of the Olive, Keepers of the Gold",
    images: ["/tunisian-olive-grove-hero.webp"],
  },
}

export default function HomePage() {
  return (
    <>
      <StructuredData 
        type="organization" 
        data={{}} 
      />
      <div className="min-h-screen">
        <HeroSection />
        <FeaturedProducts />
        <StoryPreview />
        <TestimonialsSection />
        <AwardsSection />
        <Footer />
      </div>
    </>
  )
}
