import React from 'react';
import Section from '../shared/Section';
import Counts from './Counts/Counts';

import './home.css'

const Home = () => {
  


  return (
    <div className='section-container'>
      <Counts/>
      <Section title='Residential Properties' type="a"/>
      <Section title='Multifamily Properties' type="b"/>
      <Section title='Land Properties' type="c"/>
      <Section title='Rental Properties' type="d"/>
    </div>
  )
}

export default Home