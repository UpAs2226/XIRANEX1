import { useState, useEffect } from 'react'

const PRODUCTS = [
  { id: 1, name: "Premium Leather Backpack", price: 89.99, description: "Handcrafted genuine leather backpack.", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop", category: "Bags" },
  { id: 2, name: "Wireless Headphones", price: 199.99, description: "Noise cancelling, 30hr battery.", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop", category: "Electronics" },
  { id: 3, name: "Minimalist Watch", price: 149.99, description: "Elegant stainless steel watch.", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=300&fit=crop", category: "Accessories" },
  { id: 4, name: "Ceramic Coffee Set", price: 45.99, description: "Artisan 4-piece set.", image: "https://images.unsplash.com/photo-1517251594061-c8fb750992a9?w=400&h=300&fit=crop", category: "Home" },
  { id: 5, name: "Fitness Tracker", price: 79.99, description: "Track steps, heart rate.", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop", category: "Electronics" },
  { id: 6, name: "Organic Cotton T-Shirt", price: 29.99, description: "Soft organic cotton.", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop", category: "Clothing" }
]

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setProducts(PRODUCTS)
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const getProductById = (id) => {
    return products.find(p => p.id === parseInt(id))
  }

  return { products, loading, getProductById }
}