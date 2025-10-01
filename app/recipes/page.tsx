"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, ChefHat } from "lucide-react"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function RecipesPage() {
  const { t } = useLanguage()

  const recipes = [
    {
      id: 1,
      title: "Mediterranean Bruschetta",
      description: "Classic Italian appetizer with our Heritage Gold olive oil",
      image: "/mediterranean-bruschetta-with-olive-oil.jpg",
      prepTime: "15 min",
      cookTime: "5 min",
      servings: 4,
      difficulty: "Easy",
      ingredients: [
        "4 slices of rustic bread",
        "2 ripe tomatoes, diced",
        "3 tbsp Zaytouna Heritage Gold olive oil",
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
      image: "/tunisian-mechouia-salad-with-vegetables.jpg",
      prepTime: "20 min",
      cookTime: "30 min",
      servings: 6,
      difficulty: "Medium",
      ingredients: [
        "2 red bell peppers",
        "2 green bell peppers",
        "4 tomatoes",
        "1 onion",
        "4 tbsp Zaytouna Sacred Grove olive oil",
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
      description: "Moist Mediterranean cake made with our Coastal Breeze blend",
      image: "/lemon-olive-oil-cake-mediterranean-style.jpg",
      prepTime: "15 min",
      cookTime: "45 min",
      servings: 8,
      difficulty: "Easy",
      ingredients: [
        "1 cup Zaytouna Coastal Breeze olive oil",
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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6 text-balance">{t("recipes.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">{t("recipes.subtitle")}</p>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-video bg-gradient-to-br from-amber-100 to-amber-200">
                  <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
                  <Badge className="absolute top-4 left-4 bg-amber-600 text-white">{recipe.difficulty}</Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{recipe.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{recipe.description}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 pt-2">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{recipe.prepTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ChefHat className="w-4 h-4" />
                      <span>{recipe.cookTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{recipe.servings}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t("recipes.ingredients")}</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {recipe.ingredients.slice(0, 4).map((ingredient, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                            {ingredient}
                          </li>
                        ))}
                        {recipe.ingredients.length > 4 && (
                          <li className="text-amber-600 text-sm">+{recipe.ingredients.length - 4} more ingredients</li>
                        )}
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
