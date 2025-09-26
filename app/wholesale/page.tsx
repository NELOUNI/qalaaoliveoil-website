import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Package, TrendingUp, Users, ShoppingCart, Download, FileText, Building } from "lucide-react"
import Link from "next/link"

export default async function WholesalePage() {
  // Replace with your authentication logic
  // For now, we'll show the page without auth checks
  // You can add authentication checks here if needed

  // Mock wholesale data - in real app, fetch from Supabase
  const wholesaleStats = {
    totalOrders: 47,
    totalSpent: 12450,
    averageOrderValue: 264,
    loyaltyTier: "Gold",
  }

  const recentOrders = [
    { id: "WO-001", date: "2024-01-15", items: 24, total: 580, status: "Delivered" },
    { id: "WO-002", date: "2024-01-10", items: 36, total: 840, status: "Processing" },
    { id: "WO-003", date: "2024-01-05", items: 18, total: 420, status: "Delivered" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Wholesale Portal</h1>
          <p className="text-gray-600">Welcome back, Wholesale Customer</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Orders</p>
                  <p className="text-2xl font-bold text-gray-900">{wholesaleStats.totalOrders}</p>
                </div>
                <Package className="w-8 h-8 text-amber-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Spent</p>
                  <p className="text-2xl font-bold text-gray-900">${wholesaleStats.totalSpent.toLocaleString()}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Average Order</p>
                  <p className="text-2xl font-bold text-gray-900">${wholesaleStats.averageOrderValue}</p>
                </div>
                <ShoppingCart className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Loyalty Tier</p>
                  <Badge className="bg-amber-100 text-amber-800">{wholesaleStats.loyaltyTier}</Badge>
                </div>
                <Users className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-semibold text-gray-900">{order.id}</p>
                        <p className="text-sm text-gray-600">
                          {order.date} • {order.items} items
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">${order.total}</p>
                        <Badge variant={order.status === "Delivered" ? "default" : "secondary"}>{order.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  View All Orders
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  New Bulk Order
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline" asChild>
                  <Link href="/wholesale/bulk-orders">
                    <Building className="w-4 h-4 mr-2" />
                    Corporate Bulk Orders
                  </Link>
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Catalog
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Request Quote
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Account Manager
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
