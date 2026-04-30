import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface ProductCardProps {
  id: string
  name: string
  description: string
  price: string
  image: string
  category: string
}

export function ProductCard({ id, name, description, price, image, category }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="relative w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-6xl">
          {category === 'Eggs' && '🥚'}
          {category === 'Chicken' && '🐔'}
          {category === 'Goats' && '🐐'}
        </div>
      </div>
      <CardHeader className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-primary">{name}</CardTitle>
            <CardDescription className="text-xs mt-1 bg-muted px-2 py-1 rounded w-fit">
              {category}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-2xl font-bold text-secondary">{price}</span>
          <Link
            href="/contact"
            className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Inquire Now
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
