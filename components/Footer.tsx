import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          {/* Logo */}
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_albatros-qKK1LZOCWwUKMQHJ4q9yGLeE66j1vx.png"
            alt="Pinturería Albatros"
            width={120}
            height={40}
            className="h-10 w-auto brightness-0 invert opacity-80"
          />
          
          {/* Copyright */}
          <p className="text-white/70 text-sm text-center">
            © {new Date().getFullYear()} Pinturería Albatros — Av. del Libertador 1032, Alta Gracia, Córdoba
          </p>
        </div>
      </div>
    </footer>
  )
}
