import Image from "next/image"
import Link from "next/link"
import { Star, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: string
  name_en: string
  description_en: string
  price: number
  image_url: string
  category: string
  origin_region: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <CardContent className="p-0">
          <div className="relative aspect-square bg-gradient-to-br from-amber-100 to-amber-200 overflow-hidden">
            <Image
              src={product.image_url || "/placeholder.svg?height=300&width=300&query=premium olive oil bottle"}
              alt={product.name_en}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <Badge className="absolute top-3 left-3 bg-amber-600 text-white">{product.category}</Badge>
          </div>

          <div className="p-4 space-y-3">
            <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
              {product.name_en}
            </h3>

            <p className="text-sm text-gray-600 line-clamp-2">{product.description_en}</p>

            <div className="flex items-center gap-1 text-sm text-gray-500">
              <MapPin className="w-3 h-3" />
              {product.origin_region || "Tunisia"}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-lg text-gray-900">${product.price}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
