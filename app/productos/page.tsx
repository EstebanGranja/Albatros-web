import type { Metadata } from "next"
import Header from "@/components/Header"
import Products from "@/components/Products"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Productos | Pinturería Albatros",
  description: "Explorá nuestro catálogo de pinturas, revestimientos, impermeabilizantes y accesorios. Pinturería Albatros, Alta Gracia, Córdoba.",
}

export default function ProductosPage() {
  return (
    <main className="min-h-screen pt-24">
      <Header />
      <Products />
      <Footer />
    </main>
  )
}
