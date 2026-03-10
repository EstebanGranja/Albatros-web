import { MessageCircle } from "lucide-react"
import Link from "next/link"

const features = [
  {
    title: "Pinturas de Calidad",
    description: "Las mejores marcas del mercado para resultados profesionales",
    image: "/images/pinturas.jpeg",
  },
  {
    title: "Impermeabilizantes",
    description: "Protección duradera para techos, terrazas y muros",
    image: "/images/impermeabilizantes.jpeg",
  },
  {
    title: "Herramientas y Accesorios",
    description: "Todo lo que necesitás para tu proyecto de pintura",
    image: "/images/herramientas.jpeg",
  },
  {
    title: "Asesoramiento Personalizado",
    description: "Te ayudamos a elegir los productos ideales para tu obra",
    image: "/images/asesoramiento.jpeg",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--navy)] mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Años de experiencia coloreando hogares y obras en Alta Gracia
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${feature.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-[var(--dark-bg)] rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Tenés un proyecto en mente?
          </h3>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Contactanos y te ayudamos a encontrar los productos perfectos para tu obra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/543547XXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[var(--green)] text-white px-6 py-3 rounded-xl font-semibold hover:brightness-110 transition-all duration-200 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Escribinos por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-[var(--dark-bg)] transition-all duration-200"
            >
              Ver información de contacto
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
