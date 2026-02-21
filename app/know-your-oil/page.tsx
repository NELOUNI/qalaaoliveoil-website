import { VarietiesSection } from "@/components/varieties-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Know Your Oil | Qalaa - Tunisian Varieties",
  description:
    "Discover Chetoui and Chemlali — Tunisia's two most celebrated olive varieties. Bold & intense or elegant & refined.",
}

export default function KnowYourOilPage() {
  return (
    <div className="min-h-screen bg-[var(--matte-black)]">
      {/* Hero */}
      <section className="py-20 px-4 border-b border-[var(--antique-gold)]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-[var(--antique-gold)] mb-4 text-balance">
            Know Your Oil
          </h1>
          <p className="text-xl text-[var(--antique-gold)]/80 max-w-2xl mx-auto">
            Two indigenous varieties — two souls of Tunisia. Explore the
            character behind every bottle.
          </p>
        </div>
      </section>

      <VarietiesSection />
      <Footer />
    </div>
  )
}
