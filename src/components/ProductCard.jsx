import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
      <div style={styles.card}>
        <img src={product.image} alt={product.name} loading="lazy" style={styles.image} />
        <div style={styles.content}>
          <h3 style={styles.title}>{product.name}</h3>
          <p style={styles.category}>{product.category}</p>
          <p style={styles.price}>${product.price.toFixed(2)}</p>
          <button style={styles.button}>View Details →</button>
        </div>
      </div>
    </Link>
  )
}

const styles = {
  card: {
    background: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
    cursor: 'pointer'
  },
  image: { width: '100%', height: '200px', objectFit: 'cover' },
  content: { padding: '1rem' },
  title: { fontSize: '1.1rem', marginBottom: '0.25rem', color: '#2c3e50' },
  category: { fontSize: '0.85rem', color: '#7f8c8d', marginBottom: '0.5rem' },
  price: { fontSize: '1.25rem', fontWeight: 'bold', color: '#e67e22', margin: '0.5rem 0' },
  button: {
    background: '#2c3e50',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer'
  }
}

export default ProductCard