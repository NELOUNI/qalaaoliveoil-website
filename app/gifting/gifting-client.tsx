"use client"

import { useLanguage } from "@/components/language-provider"
import { GiftingConfigurator } from "@/components/gifting-configurator"
import { GiftingHero } from "@/components/gifting-hero"
import { GiftingFeatures } from "@/components/gifting-features"
import { Footer } from "@/components/footer"

export function GiftingPageClient() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <GiftingHero language={language} />
      <GiftingConfigurator language={language} />
      <GiftingFeatures language={language} />
      <Footer />
    </div>
  )
}
