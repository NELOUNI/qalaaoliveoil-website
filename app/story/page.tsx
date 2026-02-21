"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Award, Users, Clock } from "lucide-react"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function StoryPage() {
  const { t } = useLanguage()

  const milestones = [
    {
      year: "1972",
      title: "Family Legacy Begins",
      description:
        "Our ancestors planted the first olive trees in the hills of Sfax, establishing what would become a generational tradition.",
    },
    {
      year: "1985",
      title: "Traditional Methods Perfected",
      description:
        "The family perfected cold-pressing techniques, ensuring the purest extraction of olive oil while preserving nutritional value.",
    },
    {
      year: "2000",
      title: "International Recognition",
      description:
        "Our olive oils began winning international competitions, bringing Tunisian excellence to the global stage.",
    },
    {
      year: "2026",
      title: "Modern Innovation",
      description:
        "We embrace sustainable farming practices and modern quality control while maintaining our traditional craftsmanship.",
    },
  ]

  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We practice organic farming methods that protect our land for future generations.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Every bottle meets the highest international standards for extra virgin olive oil.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We support local farmers and preserve traditional Tunisian olive cultivation methods.",
    },
    {
      icon: Clock,
      title: "Tradition",
      description: "Over 50 years of family knowledge guides every aspect of our production.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--sage-olive)]/20 via-[var(--matte-black)] to-[var(--blush-clay)]/30">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-[var(--antique-gold)] mb-6 text-balance">{t("story.title")}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t("story.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">{t("story.heritage.title")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{t("story.heritage.text")}</p>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("story.tradition.text")}</p>
            </div>
            <div className="relative aspect-square bg-gradient-to-br from-[var(--matte-black)] to-[var(--blush-clay)] rounded-lg overflow-hidden">
              <Image
                src="/olive-grove-story.png"
                alt="Ancient olive grove"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-[var(--sage-olive)]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">Our Journey Through Time</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-8">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-primary font-numeric">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
