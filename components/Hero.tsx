"use client"

import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background with paint effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)] via-[#1e4478] to-[var(--navy)]">
        {/* Abstract paint strokes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--golden)]/20 to-transparent transform skew-x-12" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-[var(--golden)]/10 to-transparent transform -skew-x-6" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--golden)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Circular Logo */}
        <div className="mb-10 flex justify-center">
          <div className="relative">
            {/* Glow effect behind */}
            <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl transform scale-125" />
            {/* Circular container */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-white shadow-2xl flex items-center justify-center p-6 border-4 border-[var(--golden)]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_albatros-qKK1LZOCWwUKMQHJ4q9yGLeE66j1vx.png"
                alt="Pinturería Albatros"
                width={200}
                height={72}
                className="w-full h-auto object-contain"
                style={{ width: '100%', height: 'auto' }}
                loading="eager"
                priority
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 text-balance">
          Pinturería Albatros
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
          Tu pinturería de confianza en Alta Gracia. Calidad, color y asesoramiento para cada proyecto.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/productos"
            className="px-8 py-4 bg-[var(--golden)] text-[var(--navy)] font-bold rounded-full hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Ver Productos
          </Link>
          <Link
            href="/contacto"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[var(--navy)] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Contactanos
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
