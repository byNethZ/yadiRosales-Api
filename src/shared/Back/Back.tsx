import React from 'react'
import { useNavigate } from 'react-router-dom';

import './back.css'

const Back = () => {
    const navigate = useNavigate();

  return (
    <div className='back-container'>
        <button className='back-button' onClick={() => navigate(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgb(0, 0, 0)'}} data-darkreader-inline-fill=""><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>
        </button>
    </div>
  )
}

export default Back

//style="fill: rgb(0, 0, 0); --darkreader-inline-fill: #e8e6e3;"