import Image from "next/image"
import Link from "next/link"
import { Star, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
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
          <div className="relative aspect-square bg-gradient-to-br from-[var(--matte-black)] to-[var(--blush-clay)] overflow-hidden">
            <Image
              src={product.image_url || "/placeholder.svg?height=300&width=300&query=premium olive oil bottle"}
              alt={product.name_en}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="p-4 space-y-3">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {product.name_en}
            </h3>

            <p className="text-sm text-muted-foreground line-clamp-2">{product.description_en}</p>

            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="w-3 h-3" />
              {product.origin_region || "Tunisia"}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="font-bold text-lg text-foreground font-numeric">${product.price}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
