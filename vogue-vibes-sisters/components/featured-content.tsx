"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Clock, MessageSquare, Heart } from "lucide-react"

const featuredPosts = [
  {
    id: 1,
    title: "Summer Fashion Trends You Need to Try in 2023",
    excerpt: "Discover the hottest summer fashion trends that are taking the fashion world by storm this season.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Fashion",
    date: "June 15, 2023",
    comments: 24,
    likes: 156,
  },
  {
    id: 2,
    title: "Our Favorite Skincare Products for Glowing Skin",
    excerpt:
      "We share our top skincare products and routines that have transformed our skin and given us that perfect glow.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Beauty",
    date: "May 28, 2023",
    comments: 42,
    likes: 203,
  },
  {
    id: 3,
    title: "How to Style a Capsule Wardrobe for Every Season",
    excerpt: "Learn how to create a versatile capsule wardrobe that works for every season without breaking the bank.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Fashion",
    date: "April 10, 2023",
    comments: 18,
    likes: 134,
  },
  {
    id: 4,
    title: "Our Weekend Getaway to the Amalfi Coast",
    excerpt:
      "Join us as we explore the stunning Amalfi Coast and discover hidden gems along this beautiful Italian coastline.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Travel",
    date: "March 22, 2023",
    comments: 31,
    likes: 187,
  },
  {
    id: 5,
    title: "Easy and Healthy Breakfast Recipes for Busy Mornings",
    excerpt:
      "Start your day right with these quick, nutritious, and delicious breakfast recipes perfect for busy mornings.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Lifestyle",
    date: "February 14, 2023",
    comments: 27,
    likes: 142,
  },
]

export function FeaturedContent() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      setScrollPosition(Math.max(0, scrollPosition - scrollAmount))
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      setScrollPosition(scrollPosition + scrollAmount)
    }
  }

  return (
    <section id="featured" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Content</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular articles and stay up-to-date with the latest trends in fashion, beauty, and
            lifestyle.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Navigation */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={scrollLeft}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={scrollRight}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 py-4 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="min-w-[300px] md:min-w-[350px] flex-shrink-0 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span>{post.comments}</span>
                      </div>
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>
                  <Link href="#" className="text-primary font-medium hover:underline">
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="mx-auto">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  )
}

