"use client"

import Image from "next/image"

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
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
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-white/10 rounded-full blur-xl transform scale-110" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_albatros-qKK1LZOCWwUKMQHJ4q9yGLeE66j1vx.png"
              alt="Pinturería Albatros"
              width={280}
              height={100}
              className="relative w-48 sm:w-64 md:w-72 h-auto drop-shadow-2xl"
              priority
            />
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
          <button
            onClick={() => scrollTo("productos")}
            className="px-8 py-4 bg-[var(--navy)] text-white font-bold rounded-full hover:bg-[#0f2544] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-2 border-white/30"
          >
            Ver Productos
          </button>
          <button
            onClick={() => scrollTo("contacto")}
            className="px-8 py-4 bg-transparent border-2 border-[var(--golden)] text-[var(--golden)] font-bold rounded-full hover:bg-[var(--golden)] hover:text-[var(--navy)] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Contactanos
          </button>
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
