import type { Language } from "@/components/language-provider"

export function pickLocalizedString(lang: Language, en: string, ar?: string, fr?: string): string {
  if (lang === "ar" && ar) return ar
  if (lang === "fr" && fr) return fr
  return en
}

export function pickLocalizedNotes(
  lang: Language,
  notes: { en: string[]; ar?: string[]; fr?: string[] },
): string[] {
  if (lang === "ar" && notes.ar?.length) return notes.ar
  if (lang === "fr" && notes.fr?.length) return notes.fr
  return notes.en
}
