import './BookNow.css'
import {CiLocationOn} from 'react-icons/ci';
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const notify = () =>
  toast("wow! your ticket has been booked. Enjoy your holidays.");
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

    <div className='bookticket'>
     
      <div className='ticket'>
            
            <div className='searchDestination'>
                <span>Search Your Destination:</span>
                <div className='search'>
               <input type='text' placeholder='Enter your Destination'/> 
               <span> <CiLocationOn size={'30px'}/></span>
               
                
                
                   </div>
                </div>
                <div className='selectdate'>
                    <span >Select Your Date:</span>
                  <input type='date'  value={date.toLocaleDateString('en-CA')} onChange={onSetDate}/>
                </div>
                <div className='max-price'>
                    <div className='setprice'>
                        <span> Price Range</span>
                        <div className='range'>
                        <input type='range' min={0} max={100000} step={1} value={maxprice} onChange={RangeHandler} />
                        <span>{maxprice}</span>
                        </div>
                      
                    </div>
                </div>
                </div>
            
                <div className='bookbook'>
          <button onClick={notify}>Book your Ticket </button>
         
          </div>

          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
    </div>
  )
}

export default Page
