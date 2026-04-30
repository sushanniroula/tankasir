import Link from 'next/link'

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  ctaText?: string
  ctaLink?: string
}

export function HeroSection({ title, subtitle, description, ctaText = 'Shop Now', ctaLink = '/products' }: HeroSectionProps) {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-accent font-semibold mb-2 text-sm uppercase tracking-wider">{subtitle}</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-primary mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Link
          href={ctaLink}
          className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  )
}
