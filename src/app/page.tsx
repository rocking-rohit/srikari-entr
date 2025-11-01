'use client'

import { useState, useEffect } from 'react'
import { supabase, Product } from '@/lib/supabase'
import { MessageCircle, Phone, X } from 'lucide-react'

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [showWhatsAppForm, setShowWhatsAppForm] = useState(false)
  const [showGetInTouchForm, setShowGetInTouchForm] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: ''
  })

  const [getInTouchFormData, setGetInTouchFormData] = useState({
    name: '',
    message: ''
  })

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('status', 'active')
        .order('sort_order', { ascending: true })
        .order('created_at', { ascending: false })

      if (error) throw error
      setProducts(data || [])
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleWhatsAppClick = (product: Product) => {
    setSelectedProduct(product)
    setShowWhatsAppForm(true)
  }

  const handleGetInTouchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Use default message as base, add custom message as extension
    const defaultMessage = `Hi, I am ${getInTouchFormData.name}. Im intrested in your business, lets get in touch`
    const customMessage = getInTouchFormData.message.trim()
    
    // Combine default message with custom message if provided
    const finalMessage = customMessage 
      ? `${defaultMessage}\n\n${customMessage}`
      : defaultMessage

    const whatsappUrl = `https://wa.me/8317667232?text=${encodeURIComponent(finalMessage)}`
    window.open(whatsappUrl, '_blank')
    
    // Reset form and close modal
    setGetInTouchFormData({ name: '', message: '' })
    setShowGetInTouchForm(false)
  }

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `Hi! I'm interested in ${selectedProduct?.name}

Name: ${formData.name}
Address: ${formData.address}
Phone: ${formData.phone}

Please provide more details about this product.`

    const whatsappUrl = `https://wa.me/8317667232?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    // Reset form and close modal
    setFormData({ name: '', address: '', phone: '' })
    setShowWhatsAppForm(false)
    setSelectedProduct(null)
  }

  const handleCallClick = () => {
    window.open('tel:+918317667232', '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Srikari Enterprise</h1>
            </div>
            
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Srikari Enterprises
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for premium products and exceptional service. 
              Discover quality that exceeds expectations.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Products
              </button>
              <button
                onClick={() => setShowGetInTouchForm(true)}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>
            
            {/* Stats or Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">100+</div>
                <div className="text-blue-200">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
                <div className="text-blue-200">Customer Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">Premium</div>
                <div className="text-blue-200">Quality Products</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h3>
            <p className="text-lg text-gray-600">Explore our collection of high-quality products</p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                  {/* Image skeleton */}
                  <div className="h-48 bg-gray-200 relative">
                    <div className="absolute top-2 right-2 bg-gray-300 rounded-full px-2 py-1 w-16 h-6"></div>
                  </div>
                  
                  {/* Content skeleton */}
                  <div className="p-4">
                    {/* Title skeleton */}
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    
                    {/* Description skeleton */}
                    <div className="space-y-2 mb-4">
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                    
                    {/* Price skeleton */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="h-5 bg-gray-200 rounded w-16"></div>
                      <div className="h-4 bg-gray-200 rounded w-12"></div>
                    </div>
                    
                    {/* Status and buttons skeleton */}
                    <div className="flex items-center justify-between">
                      <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                      <div className="flex space-x-2">
                        <div className="h-8 bg-gray-200 rounded w-8"></div>
                        <div className="h-8 bg-gray-200 rounded w-8"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onWhatsAppClick={handleWhatsAppClick}
                  onCallClick={handleCallClick}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Srikari Enterprises</h3>
              <p className="text-gray-300">
                Your trusted partner for quality products and excellent service.
              </p>
            </div>
            
            {/* Contact Links */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <a
                  href="tel:+918317667232"
                  className="flex items-center justify-center md:justify-start space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 8317667232</span>
                </a>
                {/* <button
                  onClick={() => setShowWhatsAppForm(true)}
                  className="flex items-center justify-center md:justify-start space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </button> */}
              </div>
            </div>
            
            {/* Social Links */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="space-y-3">
                <a
                  href="https://instagram.com/srikari_enterprise"
            target="_blank"
            rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-end space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.896 3.708 13.745 3.708 12.448s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.98-.49-.98-.98s.49-.98.98-.98.98.49.98.98-.49.98-.98.98zm-1.96 9.281c-1.297 0-2.448-.49-3.323-1.297-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">© 2025 Srikari Enterprise. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Form Modal */}
      {showWhatsAppForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div>
          <div className="relative w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white bg-opacity-20 p-2 rounded-full">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Contact via WhatsApp
                      </h3>
                      <p className="text-green-100 text-sm">Get instant response</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setShowWhatsAppForm(false)
                      setSelectedProduct(null)
                      setFormData({ name: '', address: '', phone: '' })
                    }}
                    className="text-white hover:text-green-200 transition-colors duration-200"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              {selectedProduct && (
                <div className="px-6 py-4 bg-gray-50 border-b">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      {selectedProduct.image1 ? (
                        <img
                          src={selectedProduct.image1}
                          alt={selectedProduct.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                          <span className="text-gray-500 text-xs">No Image</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {selectedProduct.name}
                      </p>
                      <p className="text-sm text-green-600 font-semibold">
                        ₹{selectedProduct.offer_price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleWhatsAppSubmit} className="px-6 py-6 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Address
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Enter your address (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowWhatsAppForm(false)
                      setSelectedProduct(null)
                      setFormData({ name: '', address: '', phone: '' })
                    }}
                    className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t">
                <p className="text-xs text-gray-500 text-center">
                  Your message will be sent via WhatsApp for instant response
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Get in Touch WhatsApp Form Modal */}
      {showGetInTouchForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div>
          <div className="relative w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white bg-opacity-20 p-2 rounded-full">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Get in Touch
                      </h3>
                      <p className="text-green-100 text-sm">Send us a WhatsApp message</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setShowGetInTouchForm(false)
                      setGetInTouchFormData({ name: '', message: '' })
                    }}
                    className="text-white hover:text-green-200 transition-colors duration-200"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleGetInTouchSubmit} className="px-6 py-6 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={getInTouchFormData.name}
                    onChange={(e) => setGetInTouchFormData({ ...getInTouchFormData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={getInTouchFormData.message}
                    onChange={(e) => setGetInTouchFormData({ ...getInTouchFormData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Add additional details to your message (optional)"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Base message: &quot;Hi, I am [Your Name]. Im intrested in your business, lets get in touch&quot;<br/>
                    Your additional message will be added below this.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowGetInTouchForm(false)
                      setGetInTouchFormData({ name: '', message: '' })
                    }}
                    className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t">
                <p className="text-xs text-gray-500 text-center">
                  Your message will be sent via WhatsApp for instant response
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ProductCard({ 
  product, 
  onWhatsAppClick, 
  onCallClick 
}: { 
  product: Product
  onWhatsAppClick: (product: Product) => void
  onCallClick: () => void
}) {
  const discountAmount = product.mrp - product.offer_price
  const actualDiscountPercent = (discountAmount / product.mrp) * 100

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        {product.image1 ? (
          <img
            src={product.image1}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
        {actualDiscountPercent > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            {actualDiscountPercent.toFixed(0)}% OFF
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h4>
        
        {product.description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
        )}
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-green-600">
              ₹{product.offer_price.toFixed(2)}
            </span>
            {product.mrp > product.offer_price && (
              <span className="text-sm text-gray-500 line-through">
                ₹{product.mrp.toFixed(2)}
              </span>
            )}
          </div>
          {/* <span className="text-sm text-gray-500">
            Qty: {product.qty}
          </span> */}
        </div>
        
        <div className="space-y-3">
          {/* Product Description Placeholder */}
          {/* <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600 italic">
              "Hello! This is a placeholder for product description. Customization will be implemented in the next steps."
            </p>
          </div> */}
          
          {/* Contact Actions */}
          <div className="flex items-center justify-between">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              product.status === 'active' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {product.status === 'active' ? 'Available' : 'Out of Stock'}
            </span>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onWhatsAppClick(product)}
                className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors duration-200 flex items-center justify-center"
                title="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </button>
              <button
                onClick={onCallClick}
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
                title="Call"
              >
                <Phone className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}