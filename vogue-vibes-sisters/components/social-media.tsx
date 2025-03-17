"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, PinIcon as Pinterest, Twitter } from "lucide-react"

// Mock Instagram posts
const instagramPosts = [
  { id: 1, image: "/placeholder.svg?height=300&width=300", likes: 245 },
  { id: 2, image: "/placeholder.svg?height=300&width=300", likes: 189 },
  { id: 3, image: "/placeholder.svg?height=300&width=300", likes: 321 },
  { id: 4, image: "/placeholder.svg?height=300&width=300", likes: 176 },
  { id: 5, image: "/placeholder.svg?height=300&width=300", likes: 298 },
  { id: 6, image: "/placeholder.svg?height=300&width=300", likes: 210 },
  { id: 7, image: "/placeholder.svg?height=300&width=300", likes: 267 },
  { id: 8, image: "/placeholder.svg?height=300&width=300", likes: 154 },
]

export function SocialMedia() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  return (
    <section id="social" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Follow Our Journey</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay connected with us on social media for daily inspiration, behind-the-scenes content, and exclusive
            updates.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            <Instagram className="h-5 w-5" />
            <span className="font-medium">@voguevibessisters</span>
          </Link>

          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            <Facebook className="h-5 w-5" />
            <span className="font-medium">Vogue Vibes Sisters</span>
          </Link>

          <Link
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            <Pinterest className="h-5 w-5" />
            <span className="font-medium">VogueVibesSisters</span>
          </Link>

          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-400 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            <Twitter className="h-5 w-5" />
            <span className="font-medium">@VogueVibesSis</span>
          </Link>
        </div>

        <h3 className="text-2xl font-serif font-medium text-center mb-8">Instagram Feed</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              key={post.id}
              className="relative overflow-hidden rounded-lg aspect-square"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              {hoveredPost === post.id && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{post.likes}</span>
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="mx-auto">
            View More on Instagram
          </Button>
        </div>
      </div>
    </section>
  )
}

