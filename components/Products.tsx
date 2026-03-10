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
      if (category === "Todas") {
        setFilteredProducts(products)
      } else {
        setFilteredProducts(products.filter((p) => p.categoria === category))
      }
      setIsAnimating(false)
    }, 150)
  }

  const openModal = (product: Product) => {
    setSelectedProduct(product)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedProduct(null)
    document.body.style.overflow = "auto"
  }

  return (
    <section id="productos" className="py-20 bg-white">
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

        {/* Category Filter */}
        <div className="mb-10 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-3 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
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

        {/* Products Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ${
            isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => openModal(product)}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                {/* Circular Image */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--navy)]/10 to-[var(--golden)]/10" />
                  <Image
                    src={product.imagen}
                    alt={product.nombre}
                    fill
                    className="rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <span className="inline-block px-2 py-1 bg-[var(--golden)]/20 text-[var(--navy)] text-xs font-semibold rounded-full mb-2">
                    {product.categoria}
                  </span>
                  <h3 className="font-bold text-[var(--navy)] text-lg mb-1 group-hover:text-[var(--navy)]/80 transition-colors">
                    {product.nombre}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {product.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && !isAnimating && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No hay productos en esta categoría</p>
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
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Product Image */}
            <div className="relative h-64 sm:h-80 bg-gradient-to-br from-[var(--navy)]/5 to-[var(--golden)]/10">
              <Image
                src={selectedProduct.imagen}
                alt={selectedProduct.nombre}
                fill
                className="object-cover"
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
              
              <div className="flex gap-3">
                <a
                  href="https://wa.me/543547XXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[var(--green)] text-white text-center py-3 rounded-full font-semibold hover:brightness-110 transition-all"
                >
                  Consultar
                </a>
                <button
                  onClick={closeModal}
                  className="px-6 py-3 border-2 border-[var(--navy)] text-[var(--navy)] rounded-full font-semibold hover:bg-[var(--navy)] hover:text-white transition-all"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
