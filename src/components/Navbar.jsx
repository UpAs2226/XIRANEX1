import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.container}>
        <NavLink to="/" style={styles.logo}>
          🛍️ Elegance Store
        </NavLink>
        <div style={styles.links}>
          <NavLink to="/" style={({ isActive }) => ({ ...styles.link, ...(isActive && styles.active) })}>
            Home
          </NavLink>
          <NavLink to="/products" style={({ isActive }) => ({ ...styles.link, ...(isActive && styles.active) })}>
            Products
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

const styles = {
  nav: { background: '#2c3e50', padding: '1rem 0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
  container: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { color: 'white', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none' },
  links: { display: 'flex', gap: '2rem' },
  link: { color: 'white', textDecoration: 'none', fontSize: '1rem' },
  active: { color: '#e67e22', borderBottom: '2px solid #e67e22', paddingBottom: '0.25rem' }
}

export default Navbar