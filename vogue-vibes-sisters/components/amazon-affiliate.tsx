import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, ShoppingCart } from "lucide-react"

const affiliateProducts = [
  {
    id: 1,
    name: "Summer Floral Maxi Dress",
    description: "Elegant floral print maxi dress perfect for summer occasions",
    image: "/placeholder.svg?height=300&width=300",
    price: 49.99,
    rating: 4.5,
    link: "https://amazon.com",
  },
  {
    id: 2,
    name: "Luxury Skincare Set",
    description: "Complete skincare routine with cleanser, toner, and moisturizer",
    image: "/placeholder.svg?height=300&width=300",
    price: 89.99,
    rating: 4.8,
    link: "https://amazon.com",
  },
  {
    id: 3,
    name: "Designer Sunglasses",
    description: "UV protection sunglasses with trendy oversized frames",
    image: "/placeholder.svg?height=300&width=300",
    price: 129.99,
    rating: 4.7,
    link: "https://amazon.com",
  },
  {
    id: 4,
    name: "Straw Beach Bag",
    description: "Handwoven straw beach bag with leather handles",
    image: "/placeholder.svg?height=300&width=300",
    price: 39.99,
    rating: 4.3,
    link: "https://amazon.com",
  },
]

export function AmazonAffiliate() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Shop Our Favorites</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully selected products that we love and use in our daily lives. Perfect for elevating your
            style and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {affiliateProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-medium">{product.name}</CardTitle>
                <CardDescription className="line-clamp-2">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-lg">${product.price}</div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={product.link} target="_blank" rel="noopener noreferrer sponsored" className="w-full">
                  <Button className="w-full flex items-center justify-center gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Shop on Amazon</span>
                  </Button>
                </Link>
              </CardFooter>
              <div className="text-xs text-gray-500 text-center pb-3">
                *As an Amazon Associate we earn from qualifying purchases
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="#" className="text-primary font-medium hover:underline">
            View All Recommended Products →
          </Link>
        </div>
      </div>
    </section>
  )
}

