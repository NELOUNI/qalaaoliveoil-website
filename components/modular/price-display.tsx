"use client"

interface PriceDisplayProps {
  price: number
  originalPrice?: number
  currency?: string
  size?: "sm" | "md" | "lg"
  className?: string
}

export function PriceDisplay({
  price,
  originalPrice,
  currency = "USD",
  size = "md",
  className = "",
}: PriceDisplayProps) {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span className={`font-semibold text-foreground font-numeric ${sizeClasses[size]}`}>${price.toFixed(2)}</span>
      {originalPrice && originalPrice > price && (
        <span className={`text-muted-foreground line-through font-numeric ${sizeClasses.sm}`}>${originalPrice.toFixed(2)}</span>
      )}
      <span className="text-xs text-muted-foreground uppercase tracking-wide">{currency}</span>
    </div>
  )
}
