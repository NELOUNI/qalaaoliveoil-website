import { ProductCard } from "@/components/product-card"

interface RelatedProductsProps {
  currentProductId: string
  category: string
}

export async function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  // Mock related products data - replace with your data fetching logic
  const products = [
    {
      id: "2",
      name_en: "Organic Olive Oil",
      name_ar: "زيت زيتون عضوي",
      price: 32.99,
      image_url: "/images/olive-oil-2.jpg",
      region_en: "Spain",
      region_ar: "إسبانيا",
      origin_region: "Andalusia",
      description_en: "Certified organic extra virgin olive oil",
      description_ar: "زيت زيتون بكر ممتاز عضوي معتمد",
      rating: 4.6,
      review_count: 89,
      in_stock: true,
      category: category
    },
    {
      id: "3",
      name_en: "Premium Olive Oil",
      name_ar: "زيت زيتون ممتاز",
      price: 28.99,
      image_url: "/images/olive-oil-3.jpg",
      region_en: "Italy",
      region_ar: "إيطاليا",
      origin_region: "Tuscany",
      description_en: "Premium quality extra virgin olive oil",
      description_ar: "زيت زيتون بكر ممتاز عالي الجودة",
      rating: 4.7,
      review_count: 156,
      in_stock: true,
      category: category
    }
  ]

  if (!products || products.length === 0) {
    return null
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
