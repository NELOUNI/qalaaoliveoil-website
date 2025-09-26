"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Plus, Minus, Building, Send } from "lucide-react"

interface BulkOrderItem {
  productId: string
  productName: string
  unitPrice: number
  quantity: number
  totalPrice: number
}

interface BulkOrderRequest {
  companyName: string
  contactPerson: string
  email: string
  phone: string
  deliveryAddress: string
  requestedDeliveryDate: string
  specialRequirements: string
  items: BulkOrderItem[]
  totalValue: number
}

const availableProducts = [
  { id: "1", name: "Heritage Gold Extra Virgin", unitPrice: 45, bulkPrice: 38 },
  { id: "2", name: "Coastal Breeze Blend", unitPrice: 38, bulkPrice: 32 },
  { id: "3", name: "Sacred Grove Reserve", unitPrice: 52, bulkPrice: 44 },
  { id: "4", name: "Traditional Blend", unitPrice: 28, bulkPrice: 24 },
  { id: "5", name: "Premium Selection", unitPrice: 35, bulkPrice: 30 },
]

export function BulkOrderForm() {
  const [orderRequest, setOrderRequest] = useState<BulkOrderRequest>({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    deliveryAddress: "",
    requestedDeliveryDate: "",
    specialRequirements: "",
    items: [],
    totalValue: 0,
  })

  const [selectedProduct, setSelectedProduct] = useState("")
  const [quantity, setQuantity] = useState(50)

  const addProduct = () => {
    if (!selectedProduct) return

    const product = availableProducts.find((p) => p.id === selectedProduct)
    if (!product) return

    const existingItem = orderRequest.items.find((item) => item.productId === selectedProduct)

    if (existingItem) {
      const updatedItems = orderRequest.items.map((item) =>
        item.productId === selectedProduct
          ? {
              ...item,
              quantity: item.quantity + quantity,
              totalPrice: (item.quantity + quantity) * product.bulkPrice,
            }
          : item,
      )
      setOrderRequest({
        ...orderRequest,
        items: updatedItems,
        totalValue: updatedItems.reduce((sum, item) => sum + item.totalPrice, 0),
      })
    } else {
      const newItem: BulkOrderItem = {
        productId: selectedProduct,
        productName: product.name,
        unitPrice: product.bulkPrice,
        quantity,
        totalPrice: quantity * product.bulkPrice,
      }
      const updatedItems = [...orderRequest.items, newItem]
      setOrderRequest({
        ...orderRequest,
        items: updatedItems,
        totalValue: updatedItems.reduce((sum, item) => sum + item.totalPrice, 0),
      })
    }

    setSelectedProduct("")
    setQuantity(50)
  }

  const removeItem = (productId: string) => {
    const updatedItems = orderRequest.items.filter((item) => item.productId !== productId)
    setOrderRequest({
      ...orderRequest,
      items: updatedItems,
      totalValue: updatedItems.reduce((sum, item) => sum + item.totalPrice, 0),
    })
  }

  const updateItemQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(productId)
      return
    }

    const updatedItems = orderRequest.items.map((item) =>
      item.productId === productId
        ? {
            ...item,
            quantity: newQuantity,
            totalPrice: newQuantity * item.unitPrice,
          }
        : item,
    )
    setOrderRequest({
      ...orderRequest,
      items: updatedItems,
      totalValue: updatedItems.reduce((sum, item) => sum + item.totalPrice, 0),
    })
  }

  const getVolumeDiscount = () => {
    const totalQuantity = orderRequest.items.reduce((sum, item) => sum + item.quantity, 0)
    if (totalQuantity >= 1000) return 15
    if (totalQuantity >= 500) return 10
    if (totalQuantity >= 200) return 5
    return 0
  }

  const getFinalTotal = () => {
    const discount = getVolumeDiscount()
    return orderRequest.totalValue * (1 - discount / 100)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle bulk order submission
    console.log("Bulk order request:", orderRequest)
    alert("Bulk order request submitted! We'll contact you within 24 hours with a detailed quote.")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building className="w-5 h-5 text-amber-600" />
          Bulk Order Request
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Company Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  value={orderRequest.companyName}
                  onChange={(e) => setOrderRequest({ ...orderRequest, companyName: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="contact">Contact Person *</Label>
                <Input
                  id="contact"
                  value={orderRequest.contactPerson}
                  onChange={(e) => setOrderRequest({ ...orderRequest, contactPerson: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={orderRequest.email}
                  onChange={(e) => setOrderRequest({ ...orderRequest, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={orderRequest.phone}
                  onChange={(e) => setOrderRequest({ ...orderRequest, phone: e.target.value })}
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Product Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Add Products</h3>
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <Label>Select Product</Label>
                <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a product" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableProducts.map((product) => (
                      <SelectItem key={product.id} value={product.id}>
                        {product.name} - ${product.bulkPrice}/bottle (bulk price)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-32">
                <Label>Quantity</Label>
                <Input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                />
              </div>
              <Button type="button" onClick={addProduct} disabled={!selectedProduct}>
                <Plus className="w-4 h-4 mr-2" />
                Add
              </Button>
            </div>
          </div>

          {/* Order Items */}
          {orderRequest.items.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Order Items</h3>
              <div className="space-y-3">
                {orderRequest.items.map((item) => (
                  <div key={item.productId} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.productName}</h4>
                      <p className="text-sm text-gray-600">${item.unitPrice} per bottle</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={() => updateItemQuantity(item.productId, item.quantity - 10)}
                        className="w-8 h-8 p-0"
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-16 text-center font-medium">{item.quantity}</span>
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={() => updateItemQuantity(item.productId, item.quantity + 10)}
                        className="w-8 h-8 p-0"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                    <div className="text-right min-w-24">
                      <p className="font-semibold">${item.totalPrice.toLocaleString()}</p>
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        onClick={() => removeItem(item.productId)}
                        className="text-red-600 hover:text-red-700"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${orderRequest.totalValue.toLocaleString()}</span>
                  </div>
                  {getVolumeDiscount() > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Volume Discount ({getVolumeDiscount()}%):</span>
                      <span>-${((orderRequest.totalValue * getVolumeDiscount()) / 100).toLocaleString()}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Estimated Total:</span>
                    <span className="text-amber-600">${getFinalTotal().toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Total bottles: {orderRequest.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </p>
                </div>
              </div>
            </div>
          )}

          <Separator />

          {/* Delivery Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Delivery Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <Label htmlFor="address">Delivery Address *</Label>
                <Textarea
                  id="address"
                  value={orderRequest.deliveryAddress}
                  onChange={(e) => setOrderRequest({ ...orderRequest, deliveryAddress: e.target.value })}
                  placeholder="Enter complete delivery address..."
                  required
                />
              </div>
              <div>
                <Label htmlFor="delivery-date">Requested Delivery Date</Label>
                <Input
                  id="delivery-date"
                  type="date"
                  value={orderRequest.requestedDeliveryDate}
                  onChange={(e) => setOrderRequest({ ...orderRequest, requestedDeliveryDate: e.target.value })}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="requirements">Special Requirements</Label>
              <Textarea
                id="requirements"
                value={orderRequest.specialRequirements}
                onChange={(e) => setOrderRequest({ ...orderRequest, specialRequirements: e.target.value })}
                placeholder="Any special packaging, labeling, or delivery requirements..."
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700"
            disabled={orderRequest.items.length === 0}
          >
            <Send className="w-4 h-4 mr-2" />
            Submit Bulk Order Request
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
