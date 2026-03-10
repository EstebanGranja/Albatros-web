import type { Metadata } from "next"
import Header from "@/components/Header"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Contacto | Pinturería Albatros",
  description: "Contactanos por WhatsApp, teléfono o visitanos en nuestra tienda. Pinturería Albatros, Av. Libertador 1032, Alta Gracia, Córdoba.",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen pt-24">
      <Header />
      <Contact />
      <Footer />
    </main>
  )
}
