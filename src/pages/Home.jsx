import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
      <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '4rem 2rem', borderRadius: '20px', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Discover Premium Products</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Curated collection for modern lifestyle</p>
        <Link to="/products">
          <button style={{ background: '#e67e22', color: 'white', border: 'none', padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '50px', cursor: 'pointer' }}>Shop Now →</button>
        </Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', minWidth: '150px' }}>🚚 Free Shipping</div>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', minWidth: '150px' }}>🔄 30-Day Returns</div>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', minWidth: '150px' }}>🔒 Secure Payments</div>
      </div>
    </div>
  )
}

export default Home