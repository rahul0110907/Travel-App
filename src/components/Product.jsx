import React, { useEffect, useState } from 'react'
import '../style/Product.css'
import ProductCard from './ProductCard';


const Product = () => {
  const [product,setProduct]=useState([]);
  
  const[currentPage,setCurrentPage]=useState(1);
  const fetchData = async()=>{
      const res = await fetch('data.json')
      const result =await res.json();
      setProduct(result);
    
  }
  useEffect(()=>{
    fetchData();
  },[])
  console.log(product);
  const productPerPage = 5;
  
  const numOfPages = Math.ceil(product?.length/5);

    
  const pages =[...Array(numOfPages+1).keys()].slice(1);

  const indexofLastIndex = currentPage+productPerPage;
  const indexofFirstIndex =indexofLastIndex-productPerPage;

  const visibleProduct = product.slice(indexofFirstIndex,indexofLastIndex);

 

  const prevPageHandler =()=>{
      if(currentPage!==1){
          setCurrentPage(currentPage-1);
      }
  }
  const nextPageHandler=()=>{
      if(currentPage!==numOfPages){
          setCurrentPage(currentPage+1);
      }
  }
  
  return (
    <div className='product'>
        <div className='product-text'>
        Most Visited destinations
        </div>
        <div className='ProductDetails'>
        {
           visibleProduct?.map((item)=>{
                return(
                   <div>
                       <ProductCard  Name = {item.Name} palace={item.palace} Image={item.Thumbnail} key={item.id} des ={item.description} besttime ={item.BestTime}/>
                   </div> 
                )
            })
        }
        </div>
        <div className='pagination'>
        <button disabled={currentPage===1} onClick={prevPageHandler}>Prev</button>
         {
        pages?.map((item,i)=>{
                return(
           
                    <span key={i} onClick={()=>setCurrentPage(item)} 
                   className={`${currentPage===item?'active':''}`}>{item}</span>
            
                )
            })
        } 
            <button disabled={currentPage===numOfPages} onClick={nextPageHandler}>Next</button> 
            </div>  
    </div>
  )
}

export default Product
