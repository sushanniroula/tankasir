import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { ProductCard } from '@/components/product-card'

const featuredProducts = [
  {
    id: '1',
    name: 'Fresh Farm Eggs',
    description: 'Free-range eggs from our happy hens. Rich in nutrients and delicious taste.',
    price: 'Rs. 250/dozen',
    category: 'Eggs',
  },
  {
    id: '2',
    name: 'Local Chicken',
    description: 'Fresh, premium quality chicken raised on our farm with natural feed.',
    price: 'Contact for price',
    category: 'Chicken',
  },
  {
    id: '3',
    name: 'Healthy Goats',
    description: 'Young, healthy goats perfect for breeding or dairy purposes.',
    price: 'Contact for price',
    category: 'Goats',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <HeroSection
        title="Farm Fresh Goodness"
        subtitle="Welcome to TankaSir Farm"
        description="Quality eggs, local chicken, and healthy goats delivered fresh from our farm to your table."
        ctaText="Explore Our Products"
        ctaLink="/products"
      />

      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our premium selection of fresh farm products. All products are carefully raised and maintained with highest quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.category}
              category={product.category}
            />
          ))}
        </div>
      </section>

      <section className="bg-primary/5 py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">100%</div>
              <p className="text-muted-foreground">Natural & Fresh</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">Certified</div>
              <p className="text-muted-foreground">Quality Standards</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">Local</div>
              <p className="text-muted-foreground">Farm Raised</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
