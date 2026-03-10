"use client"

import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Av. Libertador 1032, Alta Gracia, Córdoba",
    color: "bg-red-100 text-[var(--red)]",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+54 3547 XXXXXX",
    link: "tel:+543547XXXXXX",
    color: "bg-blue-100 text-[var(--navy)]",
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: "@albatrospintureria",
    link: "https://www.instagram.com/albatrospintureria/",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Mail,
    title: "Email",
    content: "albatros@pintureria.com.ar",
    link: "mailto:albatros@pintureria.com.ar",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lun a Vie: 8:00–13:00 / 16:30–20:15",
    subContent: "Sáb: 8:30–13:00",
    color: "bg-green-100 text-green-700",
  },
]

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--navy)] mb-4">
            Contacto
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tenés alguna consulta? Estamos para ayudarte.
          </p>
        </div>

        {/* WhatsApp CTA */}
        <div className="flex justify-center mb-12">
          <a
            href="https://wa.me/543547XXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[var(--green)] text-white px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6" />
            Escribinos por WhatsApp
          </a>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            const CardContent = (
              <>
                <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[var(--navy)] text-lg mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600">
                  {info.content}
                </p>
                {info.subContent && (
                  <p className="text-gray-600 mt-1">
                    {info.subContent}
                  </p>
                )}
              </>
            )

            if (info.link) {
              return (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
                >
                  {CardContent}
                </a>
              )
            }

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md"
              >
                {CardContent}
              </div>
            )
          })}
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.9744754193337!2d-64.4364!3d-31.6666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDQwJzAwLjAiUyA2NMKwMjYnMTEuMCJX!5e0!3m2!1ses!2sar!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Pinturería Albatros"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
