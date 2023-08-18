import React from 'react'
import './Contact.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
const submitHandler = (e)=>{
 e.preventDefault();
}
  const notify = () =>
  toast("Thank you for Connecting with us. we will get back to you");
  return (
    <div className='contact'>
      <div className='contact-head'>
      </div>
      <h1>Write For Us</h1>
      <p>
      Hello Wanderer! <br/>
      

Good to see you here.
<br/>

In a world of travellers looking for new adventures; be a curator of those ventures. <br/>
Let your words turn you into a storyteller and let your stories become their guide.<br/>
Are you the one who can see the world through the eyes of a traveller?<br/>
Are you the one who can weave magical words?<br/>
Are you the one who can show the world to someone who hasn't seen it?<br/>
If you can make a wishful traveller pack their backpacks, then you're the one we're looking for!<br/>
Be our travel writer and explore the world through words.<br/>
<br/>
Fill out the form below if you are interested in travel writing opportunities at travel.Net.
      </p>

      <div >
          <form className='form' onSubmit={submitHandler}>
            <h2>Contact Us</h2>
          <div className='input'>
         <span>Name:</span>
          <input type='text' placeholder='Enter your Name' className='inputfield'/>
          </div>
          <div className='input'>
          <span>Email:</span>
          <input type='email' placeholder='Enter your Email ID' className='inputfield' />
          </div>
          <div className='input'>
          <span>Message:</span>
          <textarea  maxLength={5000} placeholder='Message For us' className='textarea' />
          </div>
          <button  onClick={notify}>Submit</button>
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
        </form>
      
      </div>
    </div>
  )
}

export default Contact
