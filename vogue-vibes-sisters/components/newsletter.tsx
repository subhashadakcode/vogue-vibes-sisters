"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Check, AlertCircle } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setStatus("error")
      setMessage("Please enter your email address")
      return
    }

    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      setStatus("success")
      setMessage("Thank you for subscribing to our newsletter!")
      setEmail("")
    }, 1500)
  }

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="h-12 w-12 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Join our community and be the first to receive exclusive content, style tips, and special offers directly in
            your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 pr-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
              />
            </div>
            <Button
              type="submit"
              className="h-12 px-6 bg-white text-primary hover:bg-white/90 transition-colors"
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          {status === "success" && (
            <div className="mt-4 flex items-center justify-center text-sm">
              <Check className="h-4 w-4 mr-2" />
              <span>{message}</span>
            </div>
          )}

          {status === "error" && (
            <div className="mt-4 flex items-center justify-center text-sm text-red-300">
              <AlertCircle className="h-4 w-4 mr-2" />
              <span>{message}</span>
            </div>
          )}

          <p className="text-xs text-white/60 mt-6">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  )
}

