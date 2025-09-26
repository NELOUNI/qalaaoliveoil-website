import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Calendar, Award, ShoppingCart, Heart } from "lucide-react"
import { ProductImageGallery } from "@/components/product-image-gallery"
import { ProductReviews } from "@/components/product-reviews"
import { RelatedProducts } from "@/components/related-products"

interface ProductPageProps {
  params: { id: string }
}

export default async function ProductPage({ params }: ProductPageProps) {
  // Mock product data - replace with your data fetching logic
  const product = {
    id: params.id,
    name_en: "Extra Virgin Olive Oil",
    name_ar: "زيت زيتون بكر ممتاز",
    price: 25.99,
    image_url: "/images/olive-oil-1.jpg",
    region_en: "Tunisia",
    region_ar: "تونس",
    description_en: "Premium extra virgin olive oil from Tunisia",
    description_ar: "زيت زيتون بكر ممتاز من تونس",
    origin_story_en: "Harvested from ancient olive groves in the hills of Sfax, this premium oil represents generations of Tunisian craftsmanship. Our family has tended these sacred trees for over 200 years, using traditional methods passed down through generations.",
    origin_story_ar: "محصود من بساتين الزيتون القديمة في تلال صفاقس، يمثل هذا الزيت الممتاز أجيال من الحرفية التونسية. عائلتنا تعتني بهذه الأشجار المقدسة لأكثر من 200 عام، مستخدمة الطرق التقليدية المنقولة عبر الأجيال.",
    rating: 4.8,
    review_count: 127,
    in_stock: true,
    category: "olive-oil"
  }

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <ProductImageGallery images={[product.image_url]} />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2 bg-amber-100 text-amber-800">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name_en}</h1>
              <p className="text-xl text-gray-600 mb-4">{product.description_en}</p>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-gray-600">(127 reviews)</span>
                </div>
              </div>

              <div className="text-3xl font-bold text-gray-900 mb-6">
                ${product.price}
                <span className="text-lg font-normal text-gray-600 ml-2">per bottle</span>
              </div>
            </div>

            {/* Origin Story */}
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-amber-600" />
                Origin Story
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product.origin_story_en ||
                  "Harvested from ancient olive groves in the hills of Sfax, this premium oil represents generations of Tunisian craftsmanship. Our family has tended these sacred trees for over 200 years, using traditional methods passed down through generations."}
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Harvest: October 2024
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  Gold Medal Winner
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <Button size="lg" className="flex-1 bg-amber-600 hover:bg-amber-700">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              <div>
                <h4 className="font-semibold text-gray-900">Acidity Level</h4>
                <p className="text-gray-600">0.2% - Extra Virgin</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Volume</h4>
                <p className="text-gray-600">500ml</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Harvest Method</h4>
                <p className="text-gray-600">Cold Pressed</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Region</h4>
                <p className="text-gray-600">Sfax, Tunisia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <ProductReviews productId={product.id} />

        {/* Related Products */}
        <RelatedProducts currentProductId={product.id} category={product.category} />
      </div>
    </div>
  )
}
