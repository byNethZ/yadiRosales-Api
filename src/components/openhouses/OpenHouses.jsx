import React, { useEffect, useState } from 'react';
import request from './../../request';

function OpenHouses() {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData (){
      const req = await fetch(request.fetchOpenHouses)
      .then(response => response.json())
      .then(info => setData(info.data));
    }
    fetchData();
  }, [])
  
  return (
    <div className='OpenHouses'>
      {data.map((property) => (
        <h1>{property.ADD0}</h1>
      ))}
    </div>
  )
}

export default OpenHouses