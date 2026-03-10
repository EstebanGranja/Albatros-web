"use client"

import { useState, useEffect } from "react"
import { Menu, X, MessageCircle } from "lucide-react"
import Image from "next/image"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ["inicio", "productos", "contacto"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" onClick={() => handleNavClick("#inicio")} className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_albatros-qKK1LZOCWwUKMQHJ4q9yGLeE66j1vx.png"
              alt="Pinturería Albatros"
              width={140}
              height={50}
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative text-sm font-semibold transition-colors duration-200 ${
                  activeSection === item.href.slice(1)
                    ? "text-[var(--navy)]"
                    : "text-gray-600 hover:text-[var(--navy)]"
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--golden)] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* WhatsApp Button (Desktop) */}
          <a
            href="https://wa.me/543547XXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[var(--green)] text-white px-4 py-2 rounded-full font-semibold text-sm hover:brightness-110 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
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
        <nav className="bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-semibold transition-colors ${
                activeSection === item.href.slice(1)
                  ? "bg-[var(--navy)] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/543547XXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[var(--green)] text-white px-4 py-3 rounded-lg font-semibold mt-4"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
