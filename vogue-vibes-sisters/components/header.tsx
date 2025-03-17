"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Search, Instagram, Facebook, PinIcon as Pinterest, Twitter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Vogue Vibes Sisters Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span
              className={cn(
                "font-serif text-xl md:text-2xl font-bold transition-colors",
                isScrolled ? "text-primary" : "text-white",
              )}
            >
              Vogue Vibes Sisters
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#about"
              className={cn(
                "font-medium hover:text-primary transition-colors",
                isScrolled ? "text-gray-800" : "text-white",
              )}
            >
              About
            </Link>
            <Link
              href="#featured"
              className={cn(
                "font-medium hover:text-primary transition-colors",
                isScrolled ? "text-gray-800" : "text-white",
              )}
            >
              Featured
            </Link>
            <Link
              href="#categories"
              className={cn(
                "font-medium hover:text-primary transition-colors",
                isScrolled ? "text-gray-800" : "text-white",
              )}
            >
              Categories
            </Link>
            <Link
              href="#social"
              className={cn(
                "font-medium hover:text-primary transition-colors",
                isScrolled ? "text-gray-800" : "text-white",
              )}
            >
              Social
            </Link>
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className={cn(
                  "w-32 h-8 pl-8 rounded-full transition-all focus:w-48",
                  isScrolled
                    ? "bg-gray-100"
                    : "bg-white/20 placeholder:text-white/70 text-white focus:bg-white focus:text-gray-800 focus:placeholder:text-gray-400",
                )}
              />
              <Search
                className={cn(
                  "absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4",
                  isScrolled ? "text-gray-500" : "text-white",
                )}
              />
            </div>
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram
                className={cn(
                  "w-5 h-5 transition-colors",
                  isScrolled ? "text-gray-700 hover:text-pink-600" : "text-white hover:text-pink-300",
                )}
              />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook
                className={cn(
                  "w-5 h-5 transition-colors",
                  isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-300",
                )}
              />
            </Link>
            <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <Pinterest
                className={cn(
                  "w-5 h-5 transition-colors",
                  isScrolled ? "text-gray-700 hover:text-red-600" : "text-white hover:text-red-300",
                )}
              />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter
                className={cn(
                  "w-5 h-5 transition-colors",
                  isScrolled ? "text-gray-700 hover:text-blue-400" : "text-white hover:text-blue-300",
                )}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-gray-800" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-gray-800" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 px-4">
              <Link
                href="#about"
                className="font-medium text-gray-800 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#featured"
                className="font-medium text-gray-800 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Featured
              </Link>
              <Link
                href="#categories"
                className="font-medium text-gray-800 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="#social"
                className="font-medium text-gray-800 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Social
              </Link>
              <div className="relative">
                <Input type="search" placeholder="Search..." className="w-full h-9 pl-8 rounded-full bg-gray-100" />
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
              <div className="flex items-center space-x-4 pt-2">
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 text-gray-700 hover:text-pink-600" />
                </Link>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5 text-gray-700 hover:text-blue-600" />
                </Link>
                <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                  <Pinterest className="w-5 h-5 text-gray-700 hover:text-red-600" />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5 text-gray-700 hover:text-blue-400" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

