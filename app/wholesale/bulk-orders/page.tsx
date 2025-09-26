import { BulkOrderForm } from "@/components/bulk-order-form"
import { BulkPricingTiers } from "@/components/bulk-pricing-tiers"
import { CorporateFeatures } from "@/components/corporate-features"

export default async function BulkOrdersPage() {
  // Replace with your authentication logic
  // For now, we'll show the page without auth checks
  // You can add authentication checks here if needed

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Corporate Bulk Orders</h1>
          <p className="text-gray-600">Place large volume orders with special corporate pricing</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BulkOrderForm />
          </div>
          <div>
            <BulkPricingTiers />
          </div>
        </div>

        <CorporateFeatures />
      </div>
    </div>
  )
}
