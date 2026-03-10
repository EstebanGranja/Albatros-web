"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import WhatsAppIcon from "next/image"
import Image from "next/image"
import Link from "next/link"

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Contacto", href: "/contacto" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)]" 
          : "bg-white/95 backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Bigger to fill header height */}
          <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo_albatros_header.png"
              alt="Pinturería Albatros"
              width={180}
              height={65}
              className="h-14 md:h-[4.5rem] w-auto"
              style={{ height: 'auto', maxHeight: '72px' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-bold transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-[var(--navy)]"
                    : "text-gray-600 hover:text-[var(--navy)]"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--golden)] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* WhatsApp Button (Desktop) */}
          <a
            href="https://wa.me/543516570436?text=Hola!%20tengo%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[var(--green)] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:brightness-110 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Image src="/images/whatsapp.png" alt="WhatsApp" width={18} height={18} className="w-4 h-4" />
            WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[var(--navy)]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white border-t border-gray-100 px-4 py-4 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-bold transition-colors ${
                pathname === item.href
                  ? "bg-[var(--navy)] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/543516570436?text=Hola!%20tengo%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[var(--green)] text-white px-4 py-3 rounded-xl font-bold mt-4"
          >
            <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} className="w-5 h-5" />
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
