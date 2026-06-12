import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'
import LoadingSpinner from '../components/LoadingSpinner'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getProductById, loading } = useProducts()
  const product = getProductById(id)

  if (loading) return <LoadingSpinner />
  if (!product) return <div style={{ textAlign: 'center', padding: '2rem' }}>Product not found</div>

  return (
    <div style={{ padding: '2rem 0' }}>
      <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: '#e67e22', cursor: 'pointer', marginBottom: '1rem' }}>← Back</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', background: 'white', borderRadius: '16px', padding: '2rem' }}>
        <img src={product.image} alt={product.name} style={{ flex: '1 1 300px', width: '100%', maxWidth: '500px', borderRadius: '12px', objectFit: 'cover' }} />
        <div style={{ flex: '1 1 300px' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{product.name}</h1>
          <p style={{ color: '#7f8c8d', marginBottom: '0.5rem' }}>{product.category}</p>
          <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#e67e22', margin: '1rem 0' }}>${product.price.toFixed(2)}</p>
          <p style={{ lineHeight: '1.6', marginBottom: '2rem' }}>{product.description}</p>
          <button style={{ background: '#e67e22', color: 'white', border: 'none', padding: '1rem 2rem', borderRadius: '8px', cursor: 'pointer' }}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail