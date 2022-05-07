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
          //console.log(info.imageUrl);
          setCharging(false);
        });
      }
      fetchData();
    }, [])

  return (
    <div className='image'>
        <img className={`${charging === true? 'visible' : 'invisible'} charging`} src='img/charging.gif' alt=''/>
        <img className={`${charging === false? 'visible' : 'invisible'} img`} src={urlsImage} alt='' />
    </div>
  )
}

export default Card