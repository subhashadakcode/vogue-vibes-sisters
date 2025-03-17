import { HeroSection } from "@/components/hero-section"
import { AboutUs } from "@/components/about-us"
import { FeaturedContent } from "@/components/featured-content"
import { Categories } from "@/components/categories"
import { SocialMedia } from "@/components/social-media"
import { Newsletter } from "@/components/newsletter"
import { AmazonAffiliate } from "@/components/amazon-affiliate"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutUs />
        <FeaturedContent />
        <Categories />
        <SocialMedia />
        <Newsletter />
        <AmazonAffiliate />
      </main>
      <Footer />
    </div>
  )
}

