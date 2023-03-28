import React from 'react'
import './Contact.css'

const Contact = () => {
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

      <div className='form'>

        <form>
          <div className='input'>
         <span>Name:</span>
          <input type='text' placeholder='Name'  style={{marginLeft:'130px',padding:'10px 50px'}}/>
          </div>
          <div className='input'>
          <span>Email:</span>
          <input type='email' placeholder='Email ID'  style={{marginLeft:'130px',padding:'10px 50px'}}/>
          </div>
          <div className='input'>
          <span>Writing sample:</span>
          <textarea  maxLength={5000} placeholder='Writing Sample' style={{marginLeft:'40px',height:'200px',width:'300px'}}/>
          </div>
          <button style={{marginLeft:'250px' ,marginTop:'30px' ,marginBottom:'30px'}}>Submit</button>
        </form>
      
      </div>
    </div>
  )
}

export default Contact
