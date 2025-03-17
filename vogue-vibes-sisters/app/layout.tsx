import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Vogue Vibes Sisters - Fashion & Lifestyle Blog",
  description:
    "A fashion and lifestyle blog dedicated to inspiring women to embrace their unique style and live their best lives.",
  keywords: "fashion, lifestyle, beauty, blog, style, sisters, trends, vogue, vibes",
  authors: [{ name: "Vogue Vibes Sisters" }],
  openGraph: {
    title: "Vogue Vibes Sisters - Fashion & Lifestyle Blog",
    description:
      "A fashion and lifestyle blog dedicated to inspiring women to embrace their unique style and live their best lives.",
    url: "https://voguevibessisters.com",
    siteName: "Vogue Vibes Sisters",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vogue Vibes Sisters",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vogue Vibes Sisters - Fashion & Lifestyle Blog",
    description:
      "A fashion and lifestyle blog dedicated to inspiring women to embrace their unique style and live their best lives.",
    images: ["/twitter-image.jpg"],
    creator: "@VogueVibesSis",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'