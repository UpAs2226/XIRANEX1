import React from 'react'
import { useProducts } from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'
import LoadingSpinner from '../components/LoadingSpinner'

const ProductList = () => {
  const { products, loading } = useProducts()

  if (loading) return <LoadingSpinner />

  return (
    <div>
      <h1 style={{ margin: '2rem 0 0', fontSize: '2rem' }}>All Products</h1>
      <p style={{ color: '#666', marginBottom: '1rem' }}>{products.length} items available</p>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList