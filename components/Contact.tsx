"use client"

import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"
import Image from "next/image"

const contactCards = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Av. Libertador 1032",
    subContent: "Alta Gracia, Córdoba, Argentina",
    color: "bg-green-50 text-[var(--green)]",
  },
  {
    icon: Phone,
    title: "Teléfono / WhatsApp",
    content: "351 657-0436",
    subContent: "Llamanos o escribinos por WhatsApp",
    link: "tel:+543516570436",
    color: "bg-cyan-50 text-cyan-500",
  },
  {
    icon: Mail,
    title: "Email",
    content: "pinturerialbatros@hotmail.com.ar",
    subContent: "Respondemos en menos de 24 horas",
    link: "mailto:pinturerialbatros@hotmail.com.ar",
    color: "bg-teal-50 text-teal-500",
  },
  {
    icon: Clock,
    title: "Horario de Atención",
    content: "Lunes a Viernes: 8:00–13:00 / 16:30–20:15",
    subContent: "Sábados: 8:30–13:00",
    color: "bg-green-50 text-[var(--green)]",
  },
]

const socialLinks = [
  {
    icon: Instagram,
    title: "Instagram",
    content: "@albatrospintureria",
    link: "https://www.instagram.com/albatrospintureria/",
    color: "bg-pink-50 text-pink-500",
  },
  {
    icon: Facebook,
    title: "Facebook",
    content: "Albatros Pinturería",
    link: "https://www.facebook.com/profile.php?id=100079032480022&locale=es_LA",
    color: "bg-blue-50 text-blue-600",
  },
]

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--navy)] mb-4">
            Contacto
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tenés alguna consulta? Estamos para ayudarte. Contactanos por el medio que prefieras.
          </p>
        </div>

        {/* WhatsApp CTA */}
        <div className="flex justify-center mb-14">
          <a
            href="https://wa.me/543516570436?text=Hola!%20tengo%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[var(--green)] text-white px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Image src="/images/whatsapp.png" alt="WhatsApp" width={24} height={24} className="w-6 h-6" />
            Escribinos por WhatsApp
          </a>
        </div>

        {/* Contact Cards - 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {contactCards.map((info, index) => {
            const Icon = info.icon
            const cardContent = (
              <>
                <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[var(--navy)] text-lg mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {info.content}
                </p>
                {info.subContent && (
                  <p className="text-gray-400 text-sm mt-1">
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
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block"
                >
                  {cardContent}
                </a>
              )
            }

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                {cardContent}
              </div>
            )
          })}
        </div>

        {/* Social Media Section */}
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
            Seguinos en Redes Sociales
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-lg mx-auto">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl px-8 py-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-4 w-full sm:w-auto"
              >
                <div className={`w-12 h-12 rounded-xl ${social.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-[var(--navy)]">{social.title}</p>
                  <p className="text-gray-500 text-sm">{social.content}</p>
                </div>
              </a>
            )
          })}
        </div>

        {/* Map */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto relative" style={{height: "300px"}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.9744754193337!2d-64.4364!3d-31.6666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9690e2e2e2e2e2e2%3A0x0!2sAvenida%20del%20Libertador%201032%2C%20Alta%20Gracia%2C%20C%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses!2sar!4v1234567890"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Pinturería Albatros"
            style={{
              zIndex: 3,
              position: "absolute",
              height: "100%",
              width: "100%",
              padding: 0,
              borderWidth: 0,
              margin: 0,
              left: 0,
              top: 0,
              touchAction: "pan-x pan-y"
            }}
          />
        </div>
      </div>
    </section>
  )
}
