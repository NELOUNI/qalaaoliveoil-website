"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: string
  name_en: string
  name_ar: string
  description_en: string
  description_ar: string
  price: number
  image_url: string
  region_en: string
  is_organic: boolean
  is_premium: boolean
}

interface ProductCardModularProps {
  product: Product
  language: "en" | "ar"
  showAddToCart?: boolean
  className?: string
}

export function ProductCardModular({
  product,
  language,
  showAddToCart = false,
  className = "",
}: ProductCardModularProps) {
  const name = language === "ar" ? product.name_ar : product.name_en
  const description = language === "ar" ? product.description_ar : product.description_en

  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow duration-300 ${className}`}
    >
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={product.image_url || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {product.is_organic && <Badge className="absolute top-3 right-3 bg-green-600 text-white">Organic</Badge>}
        </div>
      </Link>

      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-serif font-semibold text-lg text-foreground line-clamp-1">{name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{product.region_en}</p>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{description}</p>

        <div className="flex items-center justify-between pt-2">
          <span className="font-semibold text-lg text-foreground font-numeric">${product.price}</span>

          {showAddToCart && (
            <div className="w-24 h-9 bg-stone-100 rounded border-2 border-dashed border-stone-300 flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Cart Soon</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
