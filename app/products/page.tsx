import { ProductsGrid } from "@/components/products-grid"
import { ProductFilters } from "@/components/product-filters"
import { Suspense } from "react"

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; region?: string; search?: string }>
}) {
  const params = await searchParams

  // Mock products data - replace with your data fetching logic
  const products = [
    {
      id: "1",
      name_en: "Extra Virgin Olive Oil",
      name_ar: "زيت زيتون بكر ممتاز",
      price: 25.99,
      image_url: "/images/olive-oil-1.jpg",
      region_en: "Tunisia",
      region_ar: "تونس",
      description_en: "Premium extra virgin olive oil from Tunisia",
      description_ar: "زيت زيتون بكر ممتاز من تونس",
      volume_ml: 500,
      acidity_level: 0.3,
      tasting_notes_en: ["Fruity", "Green apple", "Fresh grass"],
      tasting_notes_ar: ["فواكي", "تفاح أخضر", "عشب طازج"],
      harvest_year: 2023,
      in_stock: true,
      is_premium: true,
      stock_quantity: 50,
      created_at: "2024-01-01T00:00:00Z",
      product_categories: [{ categories: { name_en: "Olive Oil", slug: "olive-oil" } }]
    },
    {
      id: "2",
      name_en: "Organic Olive Oil",
      name_ar: "زيت زيتون عضوي",
      price: 32.99,
      image_url: "/images/olive-oil-2.jpg",
      region_en: "Spain",
      region_ar: "إسبانيا",
      description_en: "Certified organic extra virgin olive oil",
      description_ar: "زيت زيتون بكر ممتاز عضوي معتمد",
      volume_ml: 750,
      acidity_level: 0.2,
      tasting_notes_en: ["Smooth", "Buttery", "Peppery finish"],
      tasting_notes_ar: ["ناعم", "زبدي", "نهاية فلفلية"],
      harvest_year: 2023,
      in_stock: true,
      is_premium: false,
      stock_quantity: 30,
      created_at: "2024-01-02T00:00:00Z",
      product_categories: [{ categories: { name_en: "Olive Oil", slug: "olive-oil" } }]
    }
  ]

  // Mock categories data - replace with your data fetching logic
  const categories = [
    { id: "1", name_en: "Olive Oil", name_ar: "زيت الزيتون", slug: "olive-oil" },
    { id: "2", name_en: "Accessories", name_ar: "الاكسسوارات", slug: "accessories" }
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-stone-900 mb-4 text-balance">
            Premium Olive Oil Collection
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto text-pretty">
            Discover our carefully curated selection of extra virgin olive oils, each with its own unique story from
            Tunisia's ancient groves.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <Suspense fallback={<div>Loading filters...</div>}>
                <ProductFilters categories={categories || []} />
              </Suspense>
            </aside>

            {/* Products Grid */}
            <main className="flex-1">
              <Suspense fallback={<div>Loading products...</div>}>
                <ProductsGrid products={products || []} />
              </Suspense>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}
