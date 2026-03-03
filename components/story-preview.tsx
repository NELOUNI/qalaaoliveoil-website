"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, MapPin, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function StoryPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-gradient-to-r from-[var(--sage-olive)]/30 via-[var(--matte-black)] to-[var(--blush-clay)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--antique-gold)] text-balance">
                {t("story.preview.heading")}
                <span className="text-primary"> {t("story.preview.liquid-gold")}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {t("story.preview.intro")}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground font-numeric latin-numerals" lang="en" dir="ltr">50+</div>
                <div className="text-sm text-muted-foreground">{t("story.preview.stats.years")}</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground font-numeric latin-numerals" lang="en" dir="ltr">3</div>
                <div className="text-sm text-muted-foreground">{t("story.preview.stats.regions")}</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground font-numeric latin-numerals" lang="en" dir="ltr">10+</div>
                <div className="text-sm text-muted-foreground">{t("story.preview.stats.families")}</div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {t("story.preview.body")}
              </p>

              <Link href="/story">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  {t("story.preview.cta")}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[600px]">
              <Image
                src="/liquid-gold.jpg"
                alt="Hands holding freshly harvested olives - liquid gold"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
