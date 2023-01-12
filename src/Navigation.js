import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className='All-Links'>
      <Link to="/">Home</Link>
      <Link to="/login">login</Link>
      <Link to="/registration">registration</Link>
    </div>
  )
}

export default Navigation
