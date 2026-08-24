"use client"

import { VarietiesSection } from "@/components/varieties-section"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"

export default function KnowYourOilPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-[var(--matte-black)]">
      {/* Hero */}
      <section className="py-20 px-4 border-b border-[var(--antique-gold)]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-[var(--antique-gold)] mb-4 text-balance">
            {language === "ar" ? "تعرّف على زيتك" : language === "fr" ? "Connaître l'huile" : "Know your oil"}
          </h1>
          <p className="text-xl text-[var(--antique-gold)]/80 max-w-2xl mx-auto">
            {language === "ar" ? "الشتوي والشملالي." : language === "fr" ? "Le Chetoui et le Chemlali." : "Chetoui and Chemlali."}
          </p>
        </div>
      </section>

      <VarietiesSection />
      <Footer />
    </div>
  )
}
