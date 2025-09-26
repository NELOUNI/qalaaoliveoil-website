"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { StructuredData } from "./structured-data"

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [
    { name: "Home", url: "/" },
    ...items
  ]

  return (
    <>
      <StructuredData type="breadcrumb" data={allItems} />
      <nav className="flex items-center space-x-2 text-sm text-stone-600 mb-6" aria-label="Breadcrumb">
        <Link 
          href="/" 
          className="flex items-center hover:text-yellow-600 transition-colors"
          aria-label="Go to homepage"
        >
          <Home className="w-4 h-4" />
        </Link>
        
        {items.map((item, index) => (
          <div key={item.url} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-stone-400" />
            {index === items.length - 1 ? (
              <span className="text-stone-900 font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link 
                href={item.url} 
                className="hover:text-yellow-600 transition-colors"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  )
}

