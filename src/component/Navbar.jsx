import React from 'react'
import { Link } from 'react-router-dom'
import "../css/nav.css"
function Navbar() {
  return (
    <div id='nav'>
      <Link to="/" className='link'>Home</Link>
      <Link to="/About"  className='link'>About</Link>
      <Link to="/Product" className='link'>Product</Link>
      <Link to="/Signup" className='link'>Signup</Link>
      <Link to="/Login" className='link'>Login</Link>
    </div>
  )
}

export default Navbar
