import React from 'react';
import './Shared.css'
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className='nav-content container'>
      <Link className='buttons' to='/'>Open Houses</Link>
      <Link className='buttons' to='/residential'>Properties</Link>
    </nav>
  )
}

export default Menu