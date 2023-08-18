import React from 'react'
import PackageCard from '../../components/PackageCard'
import './Package.css'

const Package = () => {
  return (
    <div className='package'>
      <div className='package-head'>
        <div className='head-text'>
       
      <h1>Holiday Tour Packages</h1>
      <p>Get the Best Travel & Tour Package Deals via 3000+ Trusted Agents</p>
     
      </div>
      </div>
      <div className='package-product'>
      <h2>Trending Holiday Packages This Season</h2>
         <PackageCard />
      </div>
    
     
    </div>
  )
}

export default Package
