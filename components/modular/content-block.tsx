"use client"

interface ContentBlockProps {
  title: string
  subtitle?: string
  content: string
  className?: string
  titleLevel?: "h1" | "h2" | "h3" | "h4"
}

export function ContentBlock({ title, subtitle, content, className = "", titleLevel = "h2" }: ContentBlockProps) {
  const TitleTag = titleLevel

  return (
    <div className={`space-y-4 ${className}`}>
      <div>
        <TitleTag className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-2">{title}</TitleTag>
        {subtitle && <p className="text-lg text-stone-600 font-medium">{subtitle}</p>}
      </div>
      <div
        className="prose prose-stone max-w-none text-stone-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
