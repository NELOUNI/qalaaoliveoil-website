"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, ChefHat } from "lucide-react"
import { Footer } from "@/components/footer"
import {
  AlignedCardDescriptionSlot,
  AlignedCardMedia,
  AlignedCardTitleSlot,
  alignedCardGridClass,
  alignedCardShellClass,
} from "@/components/aligned-card-primitives"

const RECIPE_IMAGES = {
  tuna: "/images/recipes/Wild%20Thyme%20Bluefin%20Tuna%20Carpaccio.jpg",
  scallops: "/images/recipes/Pan-Seared%20Scallops%20with%20Olive%20Mousseline.jpg",
  fig: "/images/recipes/Fig%20%26%20Honey%20Olive%20Oil%20Parfait.jpg",
} as const

export default function RecipesPage() {
  const { t, language } = useLanguage()

  const recipesAr = [
    {
      id: 1,
      title: "كارباتشيو التونة الأحمر بالزعتر البري",
      description: "طبق راقٍ من التونة النيئة الفاخرة مع زيت احتياطي قلعة الذهبي",
      image: RECIPE_IMAGES.tuna,
      prepTime: "25 دقيقة",
      cookTime: "0 دقيقة",
      servings: 4,
      difficulty: "متقدم",
      ingredients: [
        "400 غرام تونة حمراء فاخرة (درجة الساشيمي)",
        "3 ملاعق كبيرة زيت احتياطي قلعة الذهبي",
        "ملعقة كبيرة زعتر بري تونسي",
        "حبات رمان طازجة",
        "جرجير صغير للتزيين",
        "ملح البحر الخشن",
        "فلفل أسود مطحون طازجاً",
        "قشر ليمون أخضر مبشور",
      ],
      instructions: [],
    },
    {
      id: 2,
      title: "أسقلوب محار مع موسلين الزيتون",
      description: "طبق استثنائي من المحار المقرمش مع كريمة الزيتون الخضراء",
      image: RECIPE_IMAGES.scallops,
      prepTime: "35 دقيقة",
      cookTime: "15 دقيقة",
      servings: 4,
      difficulty: "متقدم",
      ingredients: [
        "12 حبة أسقلوب (محار كبير)",
        "100 مل زيت غابة النغر المباركة",
        "50 غرام زيتون أخضر منزوع النوى",
        "200 مل كريمة طبخ فاخرة",
        "ملعقة صغيرة عسل أبيض نقي",
        "نبات الخرشوف الصغير",
        "ميكروجرين للتزيين",
        "ملح زهرة البحر",
      ],
      instructions: [],
    },
    {
      id: 3,
      title: "حلى التين والعسل بزيت الزيتون الفاخر",
      description: "حلوى راقية مستوحاة من التراث المتوسطي مع لمسة عصرية",
      image: RECIPE_IMAGES.fig,
      prepTime: "45 دقيقة",
      cookTime: "30 دقيقة",
      servings: 6,
      difficulty: "متوسط إلى متقدم",
      ingredients: [
        "8 حبات تين طازج فاخر",
        "75 مل زيت احتياطي قلعة الذهبي",
        "100 غرام عسل نحل طبيعي",
        "150 غرام جبن ماسكاربوني",
        "50 غرام لوز محمص مقشر",
        "أوراق النعناع الطازجة",
        "رقائق الذهب للتزيين (اختياري)",
        "بودرة الفستق الحلبي",
      ],
      instructions: [],
    },
  ]

  const recipesEn = [
    {
      id: 1,
      title: "Wild Thyme Bluefin Tuna Carpaccio",
      description: "Exquisite raw tuna with Qalaa Gold Reserve and wild Tunisian thyme",
      image: RECIPE_IMAGES.tuna,
      prepTime: "25 min",
      cookTime: "0 min",
      servings: 4,
      difficulty: "Advanced",
      ingredients: [
        "400g sashimi-grade bluefin tuna",
        "3 tbsp Qalaa Gold Reserve olive oil",
        "1 tbsp wild Tunisian thyme",
        "Fresh pomegranate seeds",
        "Baby arugula for garnish",
        "Coarse sea salt",
        "Freshly ground black pepper",
        "Lime zest, finely grated",
      ],
      instructions: [
        "Slice tuna paper-thin with a sharp knife",
        "Arrange on chilled plates in overlapping pattern",
        "Drizzle with premium olive oil",
        "Season with wild thyme, salt, and pepper",
        "Garnish with pomegranate and lime zest",
        "Serve immediately with baby arugula",
      ],
    },
    {
      id: 2,
      title: "Pan-Seared Scallops with Olive Mousseline",
      description: "Restaurant-quality scallops with green olive cream sauce",
      image: RECIPE_IMAGES.scallops,
      prepTime: "35 min",
      cookTime: "15 min",
      servings: 4,
      difficulty: "Advanced",
      ingredients: [
        "12 large sea scallops (U-10)",
        "100ml Qalaa Sacred Grove olive oil",
        "50g pitted green olives",
        "200ml heavy cream",
        "1 tsp white honey",
        "Baby artichokes",
        "Microgreens for garnish",
        "Fleur de sel",
      ],
      instructions: [
        "Blend olives with olive oil until smooth",
        "Reduce cream by half, whisk in olive paste",
        "Season scallops with fleur de sel",
        "Sear scallops 2 minutes each side",
        "Plate with warm mousseline",
        "Garnish with artichokes and microgreens",
      ],
    },
    {
      id: 3,
      title: "Fig & Honey Olive Oil Parfait",
      description: "Elegant Mediterranean-inspired dessert with gold leaf",
      image: RECIPE_IMAGES.fig,
      prepTime: "45 min",
      cookTime: "30 min",
      servings: 6,
      difficulty: "Medium to Advanced",
      ingredients: [
        "8 premium fresh figs",
        "75ml Qalaa Gold Reserve olive oil",
        "100g pure wildflower honey",
        "150g mascarpone cheese",
        "50g toasted blanched almonds",
        "Fresh mint leaves",
        "Edible gold leaf (optional)",
        "Pistachio powder",
      ],
      instructions: [
        "Roast figs with honey and olive oil",
        "Whip mascarpone until light and airy",
        "Layer figs and mascarpone in glasses",
        "Drizzle with olive oil honey reduction",
        "Top with crushed almonds and mint",
        "Finish with gold leaf and pistachio dust",
      ],
    },
  ]

  const recipesFr = [
    {
      id: 1,
      title: "Carpaccio de thon rouge au thym sauvage",
      description: "Thon cru d'exception avec la Réserve d'or de Qalaa et thym sauvage tunisien",
      image: RECIPE_IMAGES.tuna,
      prepTime: "25 min",
      cookTime: "0 min",
      servings: 4,
      difficulty: "Avancé",
      ingredients: [
        "400 g de thon rouge (qualité sashimi)",
        "3 c. à soupe d'huile Réserve d'or de Qalaa",
        "1 c. à soupe de thym sauvage tunisien",
        "Graines de grenade fraîches",
        "Roquette pour la garniture",
        "Gros sel de mer",
        "Poivre noir fraîchement moulu",
        "Zeste de citron vert",
      ],
      instructions: [
        "Trancher le thon très finement au couteau",
        "Disposer sur assiettes froides en rosace",
        "Arroser d'huile d'olive premium",
        "Assaisonner de thym, sel et poivre",
        "Garnir de grenade et zeste de citron vert",
        "Servir aussitôt avec la roquette",
      ],
    },
    {
      id: 2,
      title: "Saint-Jacques poêlées, mousseline d'olive",
      description: "Noix de Saint-Jacques dorées et crème d'olive verte",
      image: RECIPE_IMAGES.scallops,
      prepTime: "35 min",
      cookTime: "15 min",
      servings: 4,
      difficulty: "Avancé",
      ingredients: [
        "12 grosses noix de Saint-Jacques",
        "100 ml d'huile Bosquet sacré d'Al Nagr",
        "50 g d'olives vertes dénoyautées",
        "200 ml de crème liquide",
        "1 c. à café de miel blanc",
        "Artichauts baby",
        "Micropousses pour la garniture",
        "Fleur de sel",
      ],
      instructions: [
        "Mixer olives et huile jusqu'à consistance lisse",
        "Réduire la crème de moitié, incorporer la purée d'olive",
        "Saler les Saint-Jacques avec la fleur de sel",
        "Poêler 2 minutes de chaque côté",
        "Dresser sur mousseline tiède",
        "Garnir d'artichauts et micropousses",
      ],
    },
    {
      id: 3,
      title: "Parfait figue, miel et huile d'olive",
      description: "Dessert méditerranéen raffiné, feuille d'or en option",
      image: RECIPE_IMAGES.fig,
      prepTime: "45 min",
      cookTime: "30 min",
      servings: 6,
      difficulty: "Moyen à avancé",
      ingredients: [
        "8 figues fraîches de qualité",
        "75 ml d'huile Réserve d'or de Qalaa",
        "100 g de miel de fleurs sauvages",
        "150 g de mascarpone",
        "50 g d'amandes effilées toastées",
        "Feuilles de menthe fraîche",
        "Feuille d'or comestible (facultatif)",
        "Poudre de pistache",
      ],
      instructions: [
        "Rôtir les figues au miel et à l'huile d'olive",
        "Fouetter le mascarpone jusqu'à texture aérienne",
        "Alterner figues et mascarpone dans les verrines",
        "Napper du sirop miel-huile",
        "Parsemer d'amandes et de menthe",
        "Terminer par feuille d'or et pistache",
      ],
    },
  ]

  const recipes = language === "ar" ? recipesAr : language === "fr" ? recipesFr : recipesEn

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--blush-clay)]/25 via-[var(--matte-black)] to-[var(--sage-olive)]/25">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-serif font-bold text-[var(--antique-gold)] mb-6 text-balance">{t("recipes.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t("recipes.subtitle")}</p>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 ${alignedCardGridClass}`}>
            {recipes.map((recipe) => (
              <Card key={recipe.id} className={alignedCardShellClass}>
                <AlignedCardMedia
                  src={recipe.image || "/placeholder.svg"}
                  alt={recipe.title}
                  recipeHover
                />

                <CardHeader className="flex flex-col">
                  <AlignedCardTitleSlot>
                    <CardTitle className="text-xl leading-snug line-clamp-2">{recipe.title}</CardTitle>
                  </AlignedCardTitleSlot>
                  <AlignedCardDescriptionSlot className="min-h-[2.75rem]">
                    <p className="text-muted-foreground text-sm leading-snug line-clamp-2">{recipe.description}</p>
                  </AlignedCardDescriptionSlot>

                  <div className="flex min-h-[1.75rem] items-center gap-4 pt-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="latin-numerals" lang="en" dir="ltr">{recipe.prepTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ChefHat className="w-4 h-4" />
                      <span className="latin-numerals" lang="en" dir="ltr">{recipe.cookTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span className="latin-numerals" lang="en" dir="ltr">{recipe.servings}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("recipes.ingredients")}</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {recipe.ingredients.map((ingredient, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
