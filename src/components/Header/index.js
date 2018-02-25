import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        display:'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        flex: '1 1 auto',
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          José Cabeda
        </Link>
      </h1>
      <Link to="/projects">Portefolio</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
    </div>
  </div>
)

export default Header
