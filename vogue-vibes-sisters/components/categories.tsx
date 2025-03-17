import Image from "next/image"
import Link from "next/link"
import { Sparkles, ShoppingBag, Palette, Plane, Utensils, Heart } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Fashion",
    description: "Discover the latest trends, style tips, and fashion inspiration",
    icon: ShoppingBag,
    image: "/placeholder.svg?height=300&width=400",
    count: 42,
  },
  {
    id: 2,
    name: "Beauty",
    description: "Skincare routines, makeup tutorials, and product reviews",
    icon: Sparkles,
    image: "/placeholder.svg?height=300&width=400",
    count: 38,
  },
  {
    id: 3,
    name: "Lifestyle",
    description: "Wellness tips, home decor ideas, and daily inspiration",
    icon: Heart,
    image: "/placeholder.svg?height=300&width=400",
    count: 29,
  },
  {
    id: 4,
    name: "Travel",
    description: "Travel guides, destination reviews, and packing tips",
    icon: Plane,
    image: "/placeholder.svg?height=300&width=400",
    count: 24,
  },
  {
    id: 5,
    name: "Food",
    description: "Recipes, restaurant reviews, and culinary adventures",
    icon: Utensils,
    image: "/placeholder.svg?height=300&width=400",
    count: 18,
  },
  {
    id: 6,
    name: "Art & Culture",
    description: "Art exhibitions, cultural events, and creative inspiration",
    icon: Palette,
    image: "/placeholder.svg?height=300&width=400",
    count: 15,
  },
]

export function Categories() {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Explore Categories</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dive into our diverse range of topics and find content that resonates with your interests and passions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              href="#"
              key={category.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10" />
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-serif font-bold">{category.name}</h3>
                  <category.icon className="h-6 w-6" />
                </div>
                <p className="text-sm text-white/80 mb-3">{category.description}</p>
                <div className="flex items-center text-xs font-medium">
                  <span className="bg-white/20 px-2 py-1 rounded-full">{category.count} Articles</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

