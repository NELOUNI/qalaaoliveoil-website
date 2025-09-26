"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight } from "lucide-react"
import Link from "next/link"

const featuredProducts = [
  {
    id: 1,
    name: "Sfax Gold Reserve",
    nameAr: "احتياطي صفاقس الذهبي",
    price: 89.99,
    volume: "500ml",
    rating: 4.9,
    reviews: 127,
    image: "/premium-olive-oil-bottle-gold-label.jpg",
    isPremium: true,
    region: "Sfax",
  },
  {
    id: 2,
    name: "Monastir Heritage",
    nameAr: "تراث المنستير",
    price: 65.99,
    volume: "750ml",
    rating: 4.8,
    reviews: 89,
    image: "/elegant-olive-oil-bottle-coastal-design.jpg",
    isPremium: false,
    region: "Monastir",
  },
  {
    id: 3,
    name: "Kairouan Sacred Grove",
    nameAr: "بستان القيروان المقدس",
    price: 125.99,
    volume: "250ml",
    rating: 5.0,
    reviews: 45,
    image: "/luxury-olive-oil-bottle-sacred-design.jpg",
    isPremium: true,
    region: "Kairouan",
  },
]

export function FeaturedProducts() {
  const { language, t } = useLanguage()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4 text-balance">
            Our Finest Selection
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto text-pretty">
            Discover our most celebrated olive oils, each telling a unique story of Tunisian heritage and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 border-stone-200 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={language === "ar" ? product.nameAr : product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.isPremium && <Badge className="absolute top-3 left-3 bg-amber-600 text-white">Premium</Badge>}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-medium">{product.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="font-serif text-xl font-semibold text-stone-900 mb-1">
                    {language === "ar" ? product.nameAr : product.name}
                  </h3>
                  <p className="text-sm text-stone-500">
                    {product.region} • {product.volume}
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-stone-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-stone-500">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-stone-900">${product.price}</div>
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                    Add to Cart
                  </Button>
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
              className="border-amber-200 text-amber-700 hover:bg-amber-50 bg-transparent"
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
