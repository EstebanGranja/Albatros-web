import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          {/* Logo */}
          <Image
            src="/logo_albatros.png"
            alt="Pinturería Albatros"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
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
