import type { ReactNode } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

/** Use on equal-height card grids (recipes, locations, products). */
export const alignedCardGridClass = "items-stretch"

/** Shell for cards that should stretch to row height. */
export const alignedCardShellClass =
  "flex h-full flex-col overflow-hidden hover:shadow-lg transition-shadow"

type AlignedCardMediaProps = {
  src?: string | null
  alt: string
  className?: string
  imageClassName?: string
  /** Recipe-style hover: cover default, contain on hover */
  recipeHover?: boolean
}

export function AlignedCardMedia({
  src,
  alt,
  className,
  imageClassName,
  recipeHover = false,
}: AlignedCardMediaProps) {
  return (
    <div
      className={cn(
        "relative aspect-video shrink-0 overflow-hidden bg-gradient-to-br from-[var(--matte-black)] to-[var(--blush-clay)]",
        recipeHover && "group/image",
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className={cn(
            recipeHover
              ? "object-cover object-center transition-[object-fit] duration-500 ease-out group-hover/image:object-contain"
              : "object-cover object-center",
            imageClassName
          )}
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-[var(--matte-black)] via-[var(--sage-olive)]/25 to-[var(--blush-clay)]"
          aria-hidden
        />
      )}
    </div>
  )
}

/** Fixed-height product image area (white pad, contain). */
export const alignedProductMediaClass = "relative h-64 shrink-0 overflow-hidden bg-white p-5"

export function AlignedCardTitleSlot({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("min-h-[3.75rem]", className)}>{children}</div>
}

export function AlignedCardDescriptionSlot({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn("mt-2 min-h-[5.5rem]", className)}>{children}</div>
}
