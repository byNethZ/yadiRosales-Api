import React, { useEffect, useState } from 'react';
import requests from '../request';
import './Card.css';

function Card(url) {

    const [charging, setCharging] = useState(true);
    const [urlsImage, setUrlsImage] = useState([])
    useEffect(() => {
      async function fetchData (){
        const req = await fetch(`${requests.fetchOneImageUrl}${url.id}`)
        .then(response => response.json())
        .then(info => {
          setUrlsImage(info.imageUrl)
          //console.log(info);
          setCharging(false);
        });
      }
      fetchData();
    }, [])

  return (
    <div className='image'>
      <div className="bg-gradient"></div>
        <img className={`${charging === true? 'visible' : 'invisible'} charging`} src='img/charging.gif' alt=''/>
        <img className={`${charging === false? 'visible' : 'invisible'} img`} src={urlsImage ? urlsImage : 'img/No_image_available.svg' } alt='' />
        <p className="price">$ {url.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
    </div>
  )
}

export default Card