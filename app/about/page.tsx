import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <HeroSection
        title="About TankaSir Farm"
        subtitle="Our Story"
        description="Learn about our commitment to providing the freshest farm products to our community."
      />

      <section className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            At TankaSir Farm, we are dedicated to providing our community with the highest quality farm products. 
            With years of experience in sustainable farming practices, we ensure that every product is raised with care, 
            love, and the utmost attention to quality.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 mt-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Quality First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every product that leaves our farm meets the highest standards. We never compromise on quality.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We practice sustainable farming methods to ensure a healthy environment for future generations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Community Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We are committed to serving our local community with fresh, locally sourced products.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Natural Farming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No harmful chemicals or synthetic additives. Just pure, natural farm goodness.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 mt-12">Our Products</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-bold text-secondary mb-2">Fresh Farm Eggs</h3>
              <p className="text-muted-foreground">
                Our free-range hens produce the finest eggs. Fed with organic grain and allowed to roam freely, 
                they produce eggs rich in nutrients and with beautiful golden yolks.
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h3 className="text-2xl font-bold text-secondary mb-2">Local Chicken</h3>
              <p className="text-muted-foreground">
                Our chickens are raised in healthy environments with access to natural feed and fresh water. 
                We ensure they grow naturally without any artificial growth hormones or antibiotics.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-bold text-secondary mb-2">Premium Goats</h3>
              <p className="text-muted-foreground">
                Our goats are carefully bred for health, productivity, and excellent genetics. 
                Whether for dairy or breeding purposes, our goats are premium quality.
              </p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 mt-12">Why Choose Us?</h2>
          <ul className="space-y-3 text-lg text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold mt-1">✓</span>
              <span>100% natural and organically raised products</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold mt-1">✓</span>
              <span>Direct from farm to your table - super fresh</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold mt-1">✓</span>
              <span>No artificial hormones, antibiotics, or chemicals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold mt-1">✓</span>
              <span>Supporting local sustainable farming practices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold mt-1">✓</span>
              <span>Competitive pricing for premium quality</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold mt-1">✓</span>
              <span>Friendly customer service and expert advice</span>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  )
}
