"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
        {/* Title with birds decoration */}
        <div className="relative inline-block mb-6">
          <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold text-white tracking-normal" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
            Pinturería Albatros
          </h1>
          {/* Birds image - top right of title */}
          <div className="absolute -top-10 right-2 sm:-top-20 sm:-right-14">
            <Image
              src="/aves.png"
              alt="Aves decorativas"
              width={80}
              height={60}
              className="w-12 h-auto sm:w-20 opacity-90"
              priority
            />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
          Calidad, color y asesoramiento para cada proyecto. 
          Envíos a domicilio sin cargo
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/productos"
            className="px-8 py-4 bg-[var(--golden)] text-[var(--navy)] font-bold rounded-xl hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 justify-center"
          >
            Ver Productos
            <ArrowRight className="w-5 h-5 text-black" />
          </Link>
          <Link
            href="/contacto"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[var(--navy)] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Contactanos
          </Link>
        </div>

      </div>
    </section>
  )
}
