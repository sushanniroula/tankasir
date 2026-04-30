import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">TankaSir Farm</h3>
            <p className="text-sm opacity-90">
              Providing fresh, quality farm products to our local community since years of dedicated farming.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>9825308280</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>tanka.mdl1@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Madhumala-8, Nepal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm">
          <p>&copy; 2024 TankaSir Farm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
