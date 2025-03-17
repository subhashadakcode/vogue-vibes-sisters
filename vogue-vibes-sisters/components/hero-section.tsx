"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/placeholder.svg?height=800&width=1600",
    title: "Welcome to Vogue Vibes Sisters",
    subtitle: "Where Fashion Meets Sisterhood",
    cta: "Explore Latest Trends",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=800&width=1600",
    title: "Discover Our Style Journey",
    subtitle: "Fashion, Beauty & Lifestyle Inspiration",
    cta: "Read Our Stories",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=800&width=1600",
    title: "Join Our Fashion Community",
    subtitle: "Get Inspired by Our Curated Collections",
    cta: "Discover Our World",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden" id="hero">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill priority className="object-cover" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 max-w-4xl mx-auto animate-fade-in-up">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              {slide.subtitle}
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white animate-fade-in-up animation-delay-400"
            >
              {slide.cta}
            </Button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

