import React from 'react';
import './Shared.css'
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className='nav-content'>
      <Link className='buttons' to='/admin'>Admin</Link>
      <Link className='buttons' to='/'>Open Houses</Link>
    </nav>
  )
}

export default Menu