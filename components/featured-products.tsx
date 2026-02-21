"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const featuredProducts = [
  {
    id: 1,
    name: "Gold Reserve of Qalaa",
    nameAr: "احتياطي قلعة الذهبي",
    price: 89.99,
    volume: "500ml",
    rating: 4.9,
    reviews: 127,
    image: "/QALAA%20500ml%20no%20background.png",
    isPremium: true,
    region: "Domaine Al Nagr",
  },
  {
    id: 2,
    name: "Sacred Grove of Beja",
    nameAr: "غابة باجة المباركة",
    price: 125.99,
    volume: "500ml",
    rating: 5.0,
    reviews: 45,
    image: "/organic-bottle.png",
    isPremium: true,
    region: "Beja",
  },
]

export function FeaturedProducts() {
  const { language, t } = useLanguage()

  return (
    <section className="py-16 bg-[var(--matte-black)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--antique-gold)] mb-4 text-balance">
            Our Finest Selection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our most celebrated olive oils, each telling a unique story of Tunisian heritage and craftsmanship.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 border border-[var(--sage-olive)]/40 overflow-hidden w-full max-w-sm md:max-w-[360px]"
            >
              <div className="relative overflow-hidden flex items-center justify-center bg-[var(--matte-black)]/50">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={language === "ar" ? product.nameAr : product.name}
                  className="w-full h-64 object-contain object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="font-serif text-xl font-semibold text-[var(--antique-gold)] mb-1">
                    {language === "ar" ? product.nameAr : product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.region} • {product.volume}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-[var(--antique-gold)] font-numeric">${product.price}</div>
                  <Link href={`/products/${product.id}`}>
                    <Button size="sm" className="bg-[var(--antique-gold)] hover:bg-[var(--antique-gold)]/90 text-[var(--matte-black)]">
                      Know More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button
              size="lg"
              variant="outline"
              className="border-[var(--antique-gold)] text-[var(--antique-gold)] hover:bg-[var(--antique-gold)]/10 bg-transparent"
            >
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
