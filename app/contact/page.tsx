'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  product: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  product?: string
  message?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    product: 'eggs',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.product) {
      newErrors.product = 'Please select a product'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError(null)

    if (validateForm()) {
      setIsLoading(true)
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to send message')
        }

        setSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            product: 'eggs',
            message: '',
          })
          setSubmitted(false)
        }, 3000)
      } catch (error) {
        setSubmitError(
          error instanceof Error ? error.message : 'Failed to send message. Please try again.'
        )
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <HeroSection
        title="Get In Touch"
        subtitle="Contact Us"
        description="Have questions about our products? We&apos;d love to hear from you. Reach out today!"
      />

      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-bold text-primary mb-8">Contact Information</h2>

            <Card>
              <CardHeader>
                <Phone className="text-secondary mb-2" size={28} />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">9825308280</p>
                <p className="text-xs text-muted-foreground mt-2">Contact us anytime</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Mail className="text-secondary mb-2" size={28} />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">tanka.mdl1@gmail.com</p>
                <p className="text-xs text-muted-foreground mt-2">We&apos;ll respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="text-secondary mb-2" size={28} />
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Madhumala-8</p>
                <p className="text-muted-foreground">Nepal</p>
                <p className="text-xs text-muted-foreground mt-2">Visit us to see the farm!</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-primary mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      Your message has been received. We&apos;ll contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                          errors.name ? 'border-red-500 focus:ring-red-500' : 'border-border'
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-border'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                          errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-border'
                        }`}
                        placeholder="+1 (555) 123-4567"
                      />
                      {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-foreground mb-1">
                        Interested Product
                      </label>
                      <select
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                          errors.product ? 'border-red-500 focus:ring-red-500' : 'border-border'
                        }`}
                      >
                        <option value="eggs">Fresh Eggs</option>
                        <option value="chicken">Local Chicken</option>
                        <option value="goats">Goats</option>
                        <option value="general">General Inquiry</option>
                      </select>
                      {errors.product && <p className="text-sm text-red-500 mt-1">{errors.product}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none ${
                          errors.message ? 'border-red-500 focus:ring-red-500' : 'border-border'
                        }`}
                        placeholder="Tell us more about your inquiry..."
                      ></textarea>
                      {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    {submitError && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-sm text-red-700">{submitError}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-secondary text-secondary-foreground py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
