import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Calendar, Award } from "lucide-react"
import { ProductImageGallery } from "@/components/product-image-gallery"
import { LabCertification } from "@/components/lab-certification"
import { ProductDescriptionWithTooltips } from "@/components/product-description-with-tooltips"
import { getProductById, products } from "@/lib/products"

interface ProductPageProps {
  params: { id: string }
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[var(--matte-black)]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <ProductImageGallery images={[product.image_url]} />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-[var(--antique-gold)] mb-2">{product.name_en}</h1>
              <p className="text-xl text-[var(--antique-gold)]/80 mb-4">
                <ProductDescriptionWithTooltips text={product.description_en} />
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--antique-gold)] text-[var(--antique-gold)]" />
                  ))}
                </div>
              </div>

              <div className="text-3xl font-bold text-[var(--antique-gold)] mb-6">
                ${product.price}
                <span className="text-lg font-normal text-[var(--antique-gold)]/80 ml-2">per bottle</span>
              </div>
            </div>

            {/* Origin Story */}
            <div className="bg-[var(--matte-black)]/80 p-6 rounded-lg border border-[var(--antique-gold)]/30">
              <h3 className="text-xl font-semibold mb-3 flex items-center text-[var(--antique-gold)]">
                <MapPin className="w-5 h-5 mr-2 text-[var(--antique-gold)]" />
                Origin Story
              </h3>
              <p className="text-[var(--antique-gold)]/90 leading-relaxed">
                {product.origin_story_en}
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-[var(--antique-gold)]/80">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Harvest: November 2025
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  Gold Medal Winner
                </div>
              </div>
            </div>

            {/* Know More — scrolls to lab certification sections */}
            <Button size="lg" className="w-full bg-[var(--antique-gold)] hover:bg-[var(--antique-gold)]/90 text-[var(--matte-black)]" asChild>
              <a href="#certified">
                Know More
              </a>
            </Button>

            {/* Product Details */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              <div>
                <h4 className="font-semibold text-[var(--antique-gold)]">Acidity Level</h4>
                <p className="text-[var(--antique-gold)]/80">{product.acidity_level}% - Extra Virgin</p>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--antique-gold)]">Volume</h4>
                <p className="text-[var(--antique-gold)]/80">{product.volume_ml}ml</p>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--antique-gold)]">Harvest Method</h4>
                <p className="text-[var(--antique-gold)]/80">Cold Pressed</p>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--antique-gold)]">Region</h4>
                <p className="text-[var(--antique-gold)]/80">{product.region_en}, Tunisia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lab Certification Sections — from Know More */}
        <LabCertification />
      </div>
    </div>
  )
}
