'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { ProductCard } from '@/components/product-card'

const allProducts = [
  {
    id: '1',
    name: 'Fresh Farm Eggs (Dozen)',
    description: 'Premium free-range eggs from our happy hens. Rich in nutrients, perfect for breakfast.',
    price: 'Rs. 250',
    category: 'Eggs',
  },
  {
    id: '2',
    name: 'Organic Brown Eggs (2 Dozen)',
    description: 'Extra large organic brown eggs with rich yolks. No hormones or antibiotics.',
    price: 'Rs. 450',
    category: 'Eggs',
  },
  {
    id: '3',
    name: 'Whole Chicken',
    description: 'Fresh, locally raised whole chicken. Perfect for roasting or traditional cooking.',
    price: 'Contact for price',
    category: 'Chicken',
  },
  {
    id: '4',
    name: 'Chicken Pieces',
    description: 'Convenient pre-cut chicken pieces. Great for stews, curries, and daily meals.',
    price: 'Contact for price',
    category: 'Chicken',
  },
  {
    id: '5',
    name: 'Free-Range Chicken Breast',
    description: 'Lean, tender chicken breast from our free-range birds. Healthy and delicious.',
    price: 'Contact for price',
    category: 'Chicken',
  },
  {
    id: '6',
    name: 'Young Dairy Goats',
    description: 'Healthy young goats perfect for milk production. Well-bred and healthy stock.',
    price: 'Contact for price',
    category: 'Goats',
  },
  {
    id: '7',
    name: 'Breeding Goats',
    description: 'Premium breeding stock with excellent genetics. Certified healthy.',
    price: 'Contact for price',
    category: 'Goats',
  },
  {
    id: '8',
    name: 'Kid Goats',
    description: 'Young kid goats suitable for raising and breeding. Healthy and energetic.',
    price: 'Contact for price',
    category: 'Goats',
  },
]

const categories = ['All', 'Eggs', 'Chicken', 'Goats']

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter((p) => p.category === selectedCategory)

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <HeroSection
        title="Our Products"
        subtitle="Browse Our Collection"
        description="Explore our full range of fresh farm products. All items are carefully selected and maintained to the highest quality standards."
      />

      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}
