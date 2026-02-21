import { ProductsGrid } from "@/components/products-grid"
import { Footer } from "@/components/footer"
import { products } from "@/lib/products"

export default async function ProductsPage() {
  const productsForGrid = products.map((p) => ({
    ...p,
    product_categories: [{ categories: { name_en: "Olive Oil", slug: "olive-oil" } }],
  }))

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--blush-clay)]/40 via-[var(--matte-black)] to-[var(--sage-olive)]/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-[var(--antique-gold)] mb-4 text-balance">
            Premium Olive Oil Collection
          </h1>
          <p className="text-lg md:text-xl text-[var(--antique-gold)]/80 max-w-3xl mx-auto text-pretty">
            Discover our carefully curated selection of extra virgin olive oils, each with its own unique story from
            Tunisia&apos;s ancient groves.
          </p>
        </div>
      </section>

      {/* Products Section - no filters */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductsGrid products={productsForGrid} />
        </div>
      </section>
      <Footer />
    </div>
  )
}
