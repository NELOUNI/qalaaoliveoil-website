"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, ChefHat } from "lucide-react"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function RecipesPage() {
  const { t, language } = useLanguage()
  const isArabic = language === "ar"

  const recipes = isArabic ? [
    {
      id: 1,
      title: "بروشيتا متوسطية",
      description: "مقبلات إيطالية كلاسيكية بزيت احتياطي قلعة الذهبي",
      image: "/bruschetta.png",
      prepTime: "15 دقيقة",
      cookTime: "5 دقائق",
      servings: 4,
      difficulty: "سهل",
      ingredients: [
        "4 شرائح خبز ريفي",
        "2 طماطم ناضجة مقطعة",
        "3 ملاعق كبيرة من زيت احتياطي قلعة الذهبي",
        "2 فص ثوم مفروم",
        "أوراق ريحان طازجة",
        "ملح بحري وفلفل أسود",
      ],
      instructions: [],
    },
    {
      id: 2,
      title: "سلطة مشوية تونسية",
      description: "سلطة خضار مشوية تقليدية بزيت فاخر",
      image: "/salata-mechouia.png",
      prepTime: "20 دقيقة",
      cookTime: "30 دقيقة",
      servings: 6,
      difficulty: "متوسط",
      ingredients: [
        "2 فلفل أحمر",
        "2 فلفل أخضر",
        "4 طماطم",
        "1 بصلة",
        "4 ملاعق كبيرة من زيت غابة باجة المباركة",
        "2 ملعقة كبيرة كبر",
        "زيتون أسود",
        "ملح وكمون",
      ],
      instructions: [],
    },
    {
      id: 3,
      title: "كيكة الليمون بزيت الزيتون",
      description: "كيكة متوسطية طرية بزيت احتياطي قلعة الذهبي",
      image: "/lemon-cake.png",
      prepTime: "15 دقيقة",
      cookTime: "45 دقيقة",
      servings: 8,
      difficulty: "سهل",
      ingredients: [
        "1 كوب زيت احتياطي قلعة الذهبي",
        "1 كوب سكر",
        "3 بيضات",
        "1.5 كوب دقيق",
        "برش 2 ليمونة",
        "0.5 كوب عصير ليمون",
        "1 ملعقة صغيرة بيكنج باودر",
        "رشة ملح",
      ],
      instructions: [],
    },
  ] : [
    {
      id: 1,
      title: "Mediterranean Bruschetta",
      description: "Classic Italian appetizer with our Gold Reserve of Qalaa olive oil",
      image: "/bruschetta.png",
      prepTime: "15 min",
      cookTime: "5 min",
      servings: 4,
      difficulty: "Easy",
      ingredients: [
        "4 slices of rustic bread",
        "2 ripe tomatoes, diced",
        "3 tbsp Qalaa Gold Reserve olive oil",
        "2 cloves garlic, minced",
        "Fresh basil leaves",
        "Sea salt and black pepper",
      ],
      instructions: [
        "Toast bread slices until golden brown",
        "Rub garlic on warm toast",
        "Mix diced tomatoes with olive oil, salt, and pepper",
        "Top toast with tomato mixture",
        "Garnish with fresh basil and drizzle more olive oil",
      ],
    },
    {
      id: 2,
      title: "Tunisian Mechouia Salad",
      description: "Traditional grilled vegetable salad with premium olive oil",
      image: "/salata-mechouia.png",
      prepTime: "20 min",
      cookTime: "30 min",
      servings: 6,
      difficulty: "Medium",
      ingredients: [
        "2 red bell peppers",
        "2 green bell peppers",
        "4 tomatoes",
        "1 onion",
        "4 tbsp Qalaa Sacred Grove of Beja olive oil",
        "2 tbsp capers",
        "Black olives",
        "Salt and cumin",
      ],
      instructions: [
        "Grill vegetables until charred and tender",
        "Peel and chop grilled vegetables",
        "Mix with olive oil, capers, and seasonings",
        "Let marinate for 30 minutes",
        "Serve with crusty bread",
      ],
    },
    {
      id: 3,
      title: "Olive Oil Lemon Cake",
      description: "Moist Mediterranean cake made with our Gold Reserve of Qalaa blend",
      image: "/lemon-cake.png",
      prepTime: "15 min",
      cookTime: "45 min",
      servings: 8,
      difficulty: "Easy",
      ingredients: [
        "1 cup Qalaa Gold Reserve olive oil",
        "1 cup sugar",
        "3 eggs",
        "1½ cups flour",
        "Zest of 2 lemons",
        "½ cup lemon juice",
        "1 tsp baking powder",
        "Pinch of salt",
      ],
      instructions: [
        "Preheat oven to 350°F (175°C)",
        "Mix olive oil, sugar, and eggs",
        "Add dry ingredients and lemon zest",
        "Pour into greased pan",
        "Bake for 45 minutes until golden",
        "Drizzle with lemon juice while warm",
      ],
    },
  ]

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
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-video bg-gradient-to-br from-[var(--matte-black)] to-[var(--blush-clay)]">
                  <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{recipe.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{recipe.description}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
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
