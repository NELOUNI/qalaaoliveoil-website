"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function DevelopmentBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-primary/20 border-b border-primary/40 text-foreground px-4 py-2 text-center relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <span className="text-sm font-medium">
          🚧 Website is currently under development. Some features may be in testing phase.
        </span>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-2 p-1 hover:bg-primary/30 rounded"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
