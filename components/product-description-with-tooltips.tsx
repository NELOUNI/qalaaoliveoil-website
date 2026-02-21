"use client"

import { VarietyTooltip } from "./variety-tooltip"

/**
 * Renders product description with Chetoui and Chemlali wrapped in VarietyTooltip.
 * Handles both "Chemlali" and "Chemleli" spellings.
 */
export function ProductDescriptionWithTooltips({ text }: { text: string }) {
  const parts = text.split(/(\bChetoui\b|\bChemlali\b|\bChemleli\b)/gi)
  const result: React.ReactNode[] = []

  for (let i = 0; i < parts.length; i++) {
    const p = parts[i]
    const lower = p.toLowerCase()
    if (lower === "chetoui") {
      result.push(
        <VarietyTooltip key={`chetoui-${i}`} variety="chetoui">
          Chetoui
        </VarietyTooltip>
      )
    } else if (lower === "chemlali" || lower === "chemleli") {
      result.push(
        <VarietyTooltip key={`chemlali-${i}`} variety="chemlali">
          Chemlali
        </VarietyTooltip>
      )
    } else {
      result.push(p)
    }
  }

  return <>{result}</>
}
