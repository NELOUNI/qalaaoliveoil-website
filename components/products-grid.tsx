"use client"

import { useState } from "react"
import { useLanguage } from "./language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart, Eye } from "lucide-react"
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
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  const toggleFavorite = (productId: string) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId)
    } else {
      newFavorites.add(productId)
    }
    setFavorites(newFavorites)
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🫒</div>
        <h3 className="text-xl font-semibold text-stone-900 mb-2">No products found</h3>
        <p className="text-stone-600">Try adjusting your filters or search terms.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <p className="text-stone-600">
          Showing {products.length} product{products.length !== 1 ? "s" : ""}
        </p>
        <select className="border border-stone-300 rounded-lg px-3 py-2 text-sm">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="group hover:shadow-xl transition-all duration-300 border-stone-200 overflow-hidden bg-white"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image_url || "/placeholder.svg?key=prod1"}
                alt={language === "ar" ? product.name_ar : product.name_en}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.is_premium && <Badge className="bg-amber-600 text-white">Premium</Badge>}
                {product.stock_quantity < 10 && product.stock_quantity > 0 && (
                  <Badge variant="destructive">Low Stock</Badge>
                )}
                {product.stock_quantity === 0 && <Badge variant="secondary">Out of Stock</Badge>}
              </div>

              {/* Action Buttons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  size="sm"
                  variant="secondary"
                  className="w-10 h-10 rounded-full p-0 bg-white/90 hover:bg-white"
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Heart
                    className={`w-4 h-4 ${favorites.has(product.id) ? "fill-red-500 text-red-500" : "text-stone-600"}`}
                  />
                </Button>
                <Link href={`/products/${product.id}`}>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="w-10 h-10 rounded-full p-0 bg-white/90 hover:bg-white"
                  >
                    <Eye className="w-4 h-4 text-stone-600" />
                  </Button>
                </Link>
              </div>

              {/* Quick Add to Cart */}
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  disabled={product.stock_quantity === 0}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="mb-3">
                <h3 className="font-serif text-xl font-semibold text-stone-900 mb-1 line-clamp-1">
                  {language === "ar" ? product.name_ar : product.name_en}
                </h3>
                <p className="text-sm text-stone-500">
                  {language === "ar" ? product.region_ar : product.region_en} • {product.volume_ml}ml
                </p>
              </div>

              <p className="text-sm text-stone-600 mb-4 line-clamp-2">
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
                  <span className="text-stone-600">Acidity</span>
                  <span className="font-medium">{product.acidity_level}%</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-1.5 mt-1">
                  <div
                    className="bg-amber-500 h-1.5 rounded-full"
                    style={{ width: `${(product.acidity_level / 0.8) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-stone-900">${product.price}</div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium">4.8</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
