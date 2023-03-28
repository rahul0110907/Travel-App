import './BookNow.css'
import {CiLocationOn} from 'react-icons/ci';
import React, { useState } from 'react';

const Page = () => {
  const[maxprice,setMaxprice]=useState(1000);

  let defaultDate = new Date()
  defaultDate.setDate(defaultDate.getDate())
  const [date,setDate]=useState(defaultDate);

  const onSetDate = (e) => {
      setDate(new Date(e.target.value))
  }

  const RangeHandler=(e)=>{
      setMaxprice(e.target.value);
  }
  return (

    <div>
     
      <div className='ticket'>
            
            <div className='searchDestination'>
                <span>Search Your Destination:</span>
                <div className='search'>
                <input type='text'/>
                 <div className='icon'>
                 <CiLocationOn/>
                 </div>
                
                </div>
                </div>
                <div className='selectdate'>
                    <span style={{marginBottom:'5px'}}>Select Your Date:</span>
                  <input type='date'  value={date.toLocaleDateString('en-CA')} onChange={onSetDate}/>
                </div>
                <div className='max-price'>
                    <div className='setprice'>
                        <span>Max price</span>
                        <span>{maxprice}</span>
                    </div>
                    <input type='range' min={1000} max={100000} step={1} value={maxprice} onChange={RangeHandler} style={{marginTop: '10px'}}/>

                </div>
                </div>
            
                <div className='bookbook'>
          <button>Book </button>
          </div>

         
    </div>
  )
}

export default Page
