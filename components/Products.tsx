"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"

interface Product {
  id: number
  categoria: string
  nombre: string
  descripcion: string
  imagen: string
}



export default function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState("Todas")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [imageFullscreen, setImageFullscreen] = useState(false)
  const [zoomed, setZoomed] = useState(false)

  const handleSearchChange = (term: string) => {
    setSearchTerm(term)
    setIsAnimating(true)
    setTimeout(() => {
      let filtered = products
      if (selectedCategory !== "Todas") {
        filtered = products.filter((p) => p.categoria === selectedCategory)
      }
      // Aplica búsqueda
      if (term) {
        filtered = filtered.filter((p) =>
          p.nombre.toLowerCase().includes(term.toLowerCase()) ||
          p.descripcion.toLowerCase().includes(term.toLowerCase())
        )
      }
      setFilteredProducts(filtered)
      setIsAnimating(false)
    }, 150)
  }
  useEffect(() => {
    fetch("/productos.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data)
        setFilteredProducts(data)
        const uniqueCategories = [...new Set(data.map((p) => p.categoria))]
        setCategories(["Todas", ...uniqueCategories])
      })
      .catch((err) => console.error("Error loading products:", err))
  }, [])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setIsAnimating(true)
    setTimeout(() => {
      let filtered = products
      if (category !== "Todas") {
        filtered = products.filter((p) => p.categoria === category)
      }
      // Aplica búsqueda
      if (searchTerm) {
        filtered = filtered.filter((p) =>
          p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }
      setFilteredProducts(filtered)
      setIsAnimating(false)
    }, 150)
  }

  const openModal = (product: Product) => {
    setSelectedProduct(product)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedProduct(null)
    setImageFullscreen(false)
    setZoomed(false)
    document.body.style.overflow = "auto"
  }

  const openFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation()
    setImageFullscreen(true)
    setZoomed(false)
  }

  const closeFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation()
    setImageFullscreen(false)
    setZoomed(false)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--navy)] mb-4">
            Nuestros Productos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explorá nuestro catálogo de pinturas, revestimientos y accesorios
          </p>
        </div>

        {/* Buscador y filtro */}
        <div className="mb-10">
          {/* Buscador — siempre arriba */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full sm:max-w-xs px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[var(--navy)] text-sm"
              value={searchTerm}
              onChange={e => handleSearchChange(e.target.value)}
            />
          </div>
          {/* Filtros — debajo del buscador, scroll horizontal */}
          <div className="overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-3 min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    selectedCategory === category
                      ? "bg-[var(--navy)] text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products by Category */}
        <div
          className={`space-y-14 transition-all duration-300 ${
            isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {categories
            .filter((cat) => cat !== "Todas")
            .map((cat) => {
              const catProducts = filteredProducts.filter((p) => p.categoria === cat)
              if (catProducts.length === 0) return null
              return (
                <div key={cat}>
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-2xl font-bold text-[var(--navy)]">{cat}</h3>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-[var(--golden)]/60 to-transparent rounded-full" />
                  </div>

                  {/* Category Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {catProducts.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => openModal(product)}
                        className="group bg-white rounded-2xl p-5 shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          {/* Circular Image */}
                          <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden rounded-full">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--navy)]/10 to-[var(--golden)]/10" />
                            <Image
                              src={product.imagen}
                              alt={product.nombre}
                              fill
                              className="rounded-full object-cover border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-[var(--navy)] text-lg leading-snug mb-2 group-hover:text-[var(--navy)]/80 transition-colors">
                              {product.nombre}
                            </h4>
                            <p className="text-gray-600 text-sm line-clamp-3">
                              {product.descripcion}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && !isAnimating && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No se encontraron productos</p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Product Image — clickable to fullscreen */}
            <div
              className="relative h-64 sm:h-80 bg-gradient-to-br from-[var(--navy)] via-[#1e4478] to-[var(--navy)] cursor-zoom-in overflow-hidden rounded-t-3xl"
              onClick={openFullscreen}
              title="Ver imagen completa"
            >
              <Image
                src={selectedProduct.imagen}
                alt={selectedProduct.nombre}
                fill
                className="object-contain p-0 scale-125"
              />
            </div>

            {/* Product Info */}
            <div className="p-6 sm:p-8">
              <span className="inline-block px-3 py-1 bg-[var(--golden)]/20 text-[var(--navy)] text-sm font-semibold rounded-full mb-3">
                {selectedProduct.categoria}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--navy)] mb-4">
                {selectedProduct.nombre}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {selectedProduct.descripcion}
              </p>

              <div className="flex justify-end gap-3">
                <a
                  href={`https://wa.me/543516570436?text=Hola!%20tengo%20una%20consulta%20sobre%20${encodeURIComponent(selectedProduct.nombre)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--green)] text-white rounded-lg font-semibold hover:brightness-110 transition-all cursor-pointer"
                >
                  <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} className="w-5 h-5" />
                  Consultar
                </a>
                <button
                  onClick={closeModal}
                  className="px-6 py-3 bg-[var(--navy)] text-white rounded-lg font-semibold hover:brightness-110 transition-all cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image Viewer */}
      {imageFullscreen && selectedProduct && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 animate-in fade-in duration-200"
          onClick={() => setZoomed((z) => !z)}
        >
          <div
            className={`transition-transform duration-300 ease-in-out ${
              zoomed ? "scale-[2.2] cursor-zoom-out" : "scale-100 cursor-zoom-in"
            }`}
          >
            <Image
              src={selectedProduct.imagen}
              alt={selectedProduct.nombre}
              width={1200}
              height={900}
              className="max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain"
            />
          </div>

          {/* Close fullscreen button */}
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/35 text-white rounded-xl transition-colors"
            aria-label="Cerrar imagen"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  )
}
