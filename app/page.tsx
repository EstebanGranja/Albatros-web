import Header from "@/components/Header"
import Hero from "@/components/Hero"
import WhyChooseUs from "@/components/WhyChooseUs"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}
