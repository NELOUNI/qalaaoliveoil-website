import { GiftingConfigurator } from "@/components/gifting-configurator"
import { GiftingHero } from "@/components/gifting-hero"
import { GiftingFeatures } from "@/components/gifting-features"

export default function GiftingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <GiftingHero />
      <GiftingConfigurator />
      <GiftingFeatures />
    </div>
  )
}
