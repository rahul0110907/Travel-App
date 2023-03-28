import React, { useEffect, useState } from 'react'
import '../style/Product.css'
import ProductCard from './ProductCard';

const Product = () => {

    const [Product,setProduct]=useState([]);
    const[Page,setPage]=useState(1);
  const fetchData = async()=>{
      const res = await fetch('data.json')
      const result =await res.json();
      setProduct(result);
    
  }
  useEffect(()=>{
    fetchData();
  },[])
  const PageHandler =(selectedpage)=>{
    setPage(selectedpage);
  }
  return (
    <div className='product'>
        <div className='product-text'>
        Most Visited destinations
        </div>
        <div className='ProductDetails'>
        {
            Product?.slice(Page*5-5,Page*5).map((item)=>{
                return(
                   <div>
                       <ProductCard  Name = {item.Name} palace={item.palace} Image={item.Thumbnail} key={item.id} des ={item.description} besttime ={item.BestTime}/>
                   </div> 
                )
            })
        }
        </div>
        {
  
  Product.length>0 &&<div className='pagination' style={{height:'50px'}}>
   <span onClick={()=>PageHandler(Page-1)}>Prev</span>
   {
     [...Array(Product.length/5)].map((_,i)=>{
       return(
         <span className={Page===i+1?"Pagination_selected":""} onClick={()=>PageHandler(i+1)} key={i}>{i+1}</span>
       )
     })
   }

   <span onClick={()=>PageHandler(Page+1)} >Next</span>
 </div>

}

 
     
      
    </div>
  )
}

export default Product
