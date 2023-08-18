import React, { useState } from 'react'
import '../style/ProductCard.css'

const ProductCard = (props) => {
    const {Name,palace,Image,des ,besttime} = props;

   
    const [isReadMore ,setisReadMore]=useState(true);
    const toggleReadMore =()=>{
        setisReadMore(!isReadMore)
    }
   
  return (
    <div className='productCard'> 

   <h2 className='name'>{Name}</h2>
  <img src={Image} alt="thumbnail"></img>
    <span className='palace'>{palace}</span>
    <div className='besttime'><span style={{fontWeight:'600'}}>Best Time :</span><span>{besttime}</span></div>
   <div className='description'>{
    isReadMore?des.slice(0,150)+'....':des
   }
   {
    des.length>150 &&<button className='readmore' onClick={toggleReadMore}>{isReadMore?'Read More':'Show Less'}</button>
}</div>
   
   
    </div>
  )
}


export default ProductCard
