import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">About Vogue Vibes Sisters</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know the passionate sisters behind the fashion and lifestyle blog that's capturing hearts worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Vogue Vibes Sisters"
                width={500}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-lg -z-10"></div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold">Our Story</h3>
            <p className="text-gray-700">
              Welcome to Vogue Vibes Sisters, a fashion and lifestyle blog created by sisters who share a passion for
              style, beauty, and living life to the fullest. Our journey began in 2020 when we decided to transform our
              love for fashion into a platform where we could share our experiences, discoveries, and inspirations with
              a community of like-minded individuals.
            </p>
            <p className="text-gray-700">
              What sets us apart is our unique perspective as sisters with different yet complementary styles. We
              believe that fashion is not just about following trends, but about expressing your personality and feeling
              confident in your own skin. Through our blog, we aim to inspire our readers to embrace their individuality
              and experiment with their style.
            </p>

            <div className="pt-4">
              <h4 className="text-xl font-serif font-medium mb-3">What We Offer</h4>
              <ul className="grid grid-cols-2 gap-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Fashion Inspiration</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Beauty Tips</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Lifestyle Guides</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Travel Adventures</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Product Reviews</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Personal Stories</span>
                </li>
              </ul>
            </div>

            <Button className="mt-4">Read Our Full Story</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

