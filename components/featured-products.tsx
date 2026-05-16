"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  AlignedCardTitleSlot,
  alignedCardShellClass,
  alignedProductMediaClass,
} from "@/components/aligned-card-primitives"

const featuredProducts = [
  {
    id: 1,
    name: "Gold Reserve of Qalaa",
    nameAr: "احتياطي قلعة الذهبي",
    nameFr: "Réserve d'or de Qalaa",
    price: 89.99,
    volume: "500ml",
    rating: 4.9,
    reviews: 127,
    image: "/QALAA%20LINFA.jpeg",
    isPremium: true,
    region: "Domaine Al Nagr",
    regionFr: "Domaine Al Nagr",
  },
  {
    id: 2,
    name: "Sacred Grove of Al Nagr",
    nameAr: "غابة النغر المباركة",
    nameFr: "Bosquet sacré d'Al Nagr",
    price: 125.99,
    volume: "500ml",
    rating: 5.0,
    reviews: 45,
    image: "/QALAA%20Natura%20Quadra.jpeg",
    isPremium: true,
    region: "Domaine Al Nagr",
    regionFr: "Domaine Al Nagr",
  },
]

export function FeaturedProducts() {
  const { language, t } = useLanguage()

  return (
    <section className="py-16 bg-[var(--matte-black)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--antique-gold)] mb-4 text-balance">
            {t("home.featured.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {t("home.featured.description")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {featuredProducts.map((product) => {
            const title =
              language === "ar" ? product.nameAr : language === "fr" ? product.nameFr : product.name
            const knowMore = t("product.know-more")
            return (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="block w-full max-w-sm md:max-w-[360px] rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--antique-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--matte-black)]"
                aria-label={`${title} — ${knowMore}`}
              >
                <Card className={`group ${alignedCardShellClass} hover:shadow-xl transition-all duration-300 border border-[var(--sage-olive)]/40 cursor-pointer`}>
                  <div className={alignedProductMediaClass}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>

                  <CardContent className="flex flex-1 flex-col p-6">
                    <AlignedCardTitleSlot className="mb-3">
                      <h3 className="font-sans text-xl font-semibold text-[var(--antique-gold)] mb-1 line-clamp-2 leading-snug">
                        {title}
                      </h3>
                      <p className="min-h-[1.25rem] text-sm text-muted-foreground">
                        <span>
                          {language === "ar" && product.id === 1
                            ? "دومين النقر"
                            : language === "ar" && product.id === 2
                              ? "دومين النغر"
                              : language === "fr"
                                ? product.regionFr
                                : product.region}
                        </span>{" "}
                        •{" "}
                        <span className="latin-numerals" lang="en" dir="ltr">
                          {product.volume}
                        </span>
                      </p>
                    </AlignedCardTitleSlot>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="text-2xl font-bold text-[var(--antique-gold)] font-numeric latin-numerals" lang="en" dir="ltr">
                        ${product.price}
                      </div>
                      <span className="inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-[var(--antique-gold)] px-3 text-sm font-medium text-[var(--matte-black)]">
                        {knowMore}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button
              size="lg"
              variant="outline"
              className="border-[var(--antique-gold)] text-[var(--antique-gold)] hover:bg-[var(--antique-gold)]/10 bg-transparent"
            >
              {t("home.featured.cta-all")}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
