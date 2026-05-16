"use client"

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

interface ContentBlockProps {
  title: string
  subtitle?: string
  content: string
  className?: string
  titleLevel?: "h1" | "h2" | "h3" | "h4"
  /** Only true for trusted CMS/admin HTML; default escapes to prevent XSS */
  trustedHtml?: boolean
}

export function ContentBlock({
  title,
  subtitle,
  content,
  className = "",
  titleLevel = "h2",
  trustedHtml = false,
}: ContentBlockProps) {
  const TitleTag = titleLevel
  const html = trustedHtml ? content : escapeHtml(content).replace(/\n/g, "<br />")

  return (
    <div className={`space-y-4 ${className}`}>
      <div>
        <TitleTag className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">{title}</TitleTag>
        {subtitle && <p className="text-lg text-muted-foreground font-medium">{subtitle}</p>}
      </div>
      <div
        className="prose prose-neutral max-w-none text-muted-foreground leading-relaxed"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
