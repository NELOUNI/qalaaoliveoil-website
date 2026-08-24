import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { StoryPreview } from "@/components/story-preview"
import { AwardsSection } from "@/components/awards-section"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"
import type { Metadata } from "next"
import { canonicalForPath } from "@/lib/canonical-metadata"

export const metadata: Metadata = {
  ...canonicalForPath("/"),
  title: "Qalaa | Chetoui from Sousse",
  description: "Single-variety Chetoui. Three bottles. From the hills of Sousse, Tunisia.",
  keywords: "premium olive oil, Tunisian olive oil, extra virgin, Mediterranean, luxury food, artisanal, organic, ancient groves",
  openGraph: {
    title: "Qalaa | Chetoui from Sousse",
    description: "Single-variety Chetoui. Three bottles. From the hills of Sousse, Tunisia.",
    images: [
      {
        url: "/images/hero/hero-poster.webp",
        width: 1200,
        height: 630,
        alt: "Ancient Tunisian olive groves at golden hour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qalaa | Chetoui from Sousse",
    description: "Single-variety Chetoui from the hills of Sousse.",
    images: ["/images/hero/hero-poster.webp"],
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
        <AwardsSection />
        <Footer />
      </div>
    </>
  )
}
