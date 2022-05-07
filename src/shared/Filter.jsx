import React from 'react';
import './Filter.css';

function Filter() {
  return (
    <div className='filters'>
        <div className="filter">
            <h3>Search for homes</h3>
            <input type="text" />
        </div>
        <div className="filter">
            <h3>Price</h3>
            <input type="text" />
        </div>
        <div className="filter">
            <h3>Beds</h3>
            <input type="text" />
        </div>
        <div className="filter">
            <h3>Baths</h3>
            <input type="text" />
        </div>
        <div className="filter">
            <h3>Virtual Options</h3>
            <input type="text" />
        </div>
    </div>
  )
}

export default Filter