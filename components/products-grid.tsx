"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Eye } from "lucide-react"
import Link from "next/link"

interface Product {
  id: string
  name_en: string
  name_ar: string
  description_en: string
  description_ar: string
  price: number
  volume_ml: number
  region_en: string
  region_ar: string
  acidity_level: number
  tasting_notes_en: string[]
  tasting_notes_ar: string[]
  image_url?: string
  is_premium: boolean
  stock_quantity: number
}

interface ProductsGridProps {
  products: Product[]
}

export function ProductsGrid({ products }: ProductsGridProps) {
  const { language } = useLanguage()
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🫒</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
        <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Products Grid - centered */}
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="group hover:shadow-xl transition-all duration-300 border-border overflow-hidden bg-card w-full max-w-sm md:max-w-[400px] xl:max-w-[380px]"
          >
            <div className="relative overflow-hidden flex items-center justify-center bg-[var(--matte-black)]/50">
              <img
                src={product.image_url || "/placeholder.svg?key=prod1"}
                alt={language === "ar" ? product.name_ar : product.name_en}
                className="w-full h-64 object-contain object-center group-hover:scale-105 transition-transform duration-300"
              />

              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.stock_quantity < 10 && product.stock_quantity > 0 && (
                  <Badge variant="destructive">Low Stock</Badge>
                )}
                {product.stock_quantity === 0 && <Badge variant="secondary">Out of Stock</Badge>}
              </div>

              {/* Action Buttons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link href={`/products/${product.id}`}>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="w-10 h-10 rounded-full p-0 bg-white/90 hover:bg-white"
                  >
                    <Eye className="w-4 h-4 text-muted-foreground" />
                  </Button>
                </Link>
              </div>

              {/* Know More */}
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link href={`/products/${product.id}`} className="block">
                  <Button
                    className="w-full bg-[var(--antique-gold)] hover:bg-[var(--antique-gold)]/90 text-[var(--matte-black)]"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Know More
                  </Button>
                </Link>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="mb-3">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1 line-clamp-1">
                  {language === "ar" ? product.name_ar : product.name_en}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "ar" ? product.region_ar : product.region_en} • {product.volume_ml}ml
                </p>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {language === "ar" ? product.description_ar : product.description_en}
              </p>

              {/* Tasting Notes */}
              {product.tasting_notes_en && product.tasting_notes_en.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {(language === "ar" ? product.tasting_notes_ar : product.tasting_notes_en)
                      ?.slice(0, 3)
                      .map((note, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {note}
                        </Badge>
                      ))}
                  </div>
                </div>
              )}

              {/* Acidity Level */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Acidity</span>
                  <span className="font-medium">{product.acidity_level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-1.5 mt-1">
                  <div
                    className="bg-primary h-1.5 rounded-full"
                    style={{ width: `${(product.acidity_level / 0.8) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
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
    </div>
  )
}
