import React from 'react'
import './Hotel.css'
import { useState } from 'react'

const Hotel = () => {
  let defaultDate = new Date()
  defaultDate.setDate(defaultDate.getDate())
  const [date,setDate]=useState(defaultDate);

  let nextDate = new Date()
  nextDate.setDate(nextDate.getDate()+1)
  const [nextdate,setnextDate]=useState(nextDate);


  // const[open,setOpen]=useState(false);

  // const openCustom=()=>{
  //   setOpen(true);
  // }

  const onSetDate = (e) => {
      setDate(new Date(e.target.value))
  }
  const onSetnextDate = (e) => {
    setnextDate(new Date(e.target.value))
}
  return (
    <div className='hotel'>
    
      <h1>Hotels & places to stay</h1>
      <p>Top stay options curated by Holidify for your travel needs</p>
      <div className='checkIn'>
      <span style={{marginRight:'60px'}}>Enter Your City : </span>
     <input type='text' placeholder='Enter Your City' style={{height:'50px',width:'600px'}}/>
     <br/>
     <br/>
     <span style={{marginRight:'60px'}}>Check In : </span>
     <input type='date'  value={date.toLocaleDateString('en-CA')} onChange={onSetDate} style={{height:'50px',width:'200px'}}/>
    
     <span style={{marginRight:'50px',marginLeft:'30px'}}>Check out : </span>
     <input type='date'  value={nextdate.toLocaleDateString('en-CA')} onChange={onSetnextDate} style={{height:'50px',width:'200px'}}/>
    
     <select style={{height:'50px',width:'200px' ,marginLeft:'130px'}}>
      <option>1 Adult</option>
      <option>2 Adult</option>
      <option>3 Adult</option>
      <option>4 Adult</option>
      {/* <option  onSelect={openCustom}>Custom</option> */}
     </select>
     <br/>
     <br/>
     <button style={{ marginTop:'50px',marginLeft:'300px',width:'300px',height:'40px'}}>Search for Your Date</button>
  
     </div>
     <div className='collection'>
      <h2>Stay Collections Near You</h2>
      <div className='packagecard'>
        <div className='package-list'>
    <img src ='https://static.toiimg.com/photo/93246451.cms' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}} />
    <p style={{marginBottom:'0px'}}>Around </p>
    <a href='/'>Himachal </a>
    
    </div>
    <div className='package-list'>
    <img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJlakRbjMMHvroiDwWqfO2tu17XDUKdWf4A&usqp=CAU' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}}/>
    <p style={{marginBottom:'0px'}}>Around </p>
    <a href='/'>Rajasthan </a>
    
    </div>
    <div className='package-list'>
    <img src ='https://www.nativeplanet.com/img/2020/09/jammucover-1601270563.jpg' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}} />
    <p style={{marginBottom:'0px'}}>Around </p>
    <a href='/'>Jammu Kashmir </a>
    
    </div>
    <div className='package-list'>
    <img src ='https://media.istockphoto.com/id/484389570/photo/himalayas.jpg?s=612x612&w=0&k=20&c=6jM32XJBWlvv6x7AF-av52jlncPkz5hn_AEhjaDSFYI=' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}} />
    <p style={{marginBottom:'0px'}}>Around </p>
    <a href='/'>Uttarakhand </a>
   
    </div>
    <div className='package-list'>
    <img src ='https://cdn.kimkim.com/files/a/content_articles/featured_photos/6993d173d4b49caed93819ef9e4a366631c6b249/big-b71140ad5f5648cff4aaff46447c003f.jpg' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}} />
    <p style={{marginBottom:'0px'}}>Around </p>
    <a href='/'>Tamil Nadu </a>
    
    </div>
    </div>

      
<h2>Best Places To Stay In India</h2>
<div className='fivestar'>

<div className='hotel-list'>
    <img src ='https://static.toiimg.com/photo/51107660.cms' alt='' style={{height:'100px' ,width:'100px' ,borderRadius:'50px'}} />
    <p>5 star hotels</p>  
    </div>
    <div className='hotel-list'>
    <img src ='https://media.easemytrip.com/media/Blog/India/637073414728587272/637073414728587272dMZIPW.jpg' alt='' style={{height:'100px' ,width:'100px' ,borderRadius:'50px'}} />
    <p>Heritage Hotels</p>  
    </div>
    <div className='hotel-list'>
    <img src ='https://gac.sndimg.com/content/dam/images/gac/fullset/2014/9/8/0/CI_My-Cool-Shed_Glamping-treehouse_h.jpg.rend.hgtvcom.966.644.suffix/1428961668524.jpeg' alt='' style={{ marginLeft:'20px',height:'100px' ,width:'100px' ,borderRadius:'50px'}} />
    <p>Romantic Gataways</p>  
    </div>
    <div className='hotel-list'>
    <img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaILZeS4mhdOSVuSRU_dTa9STsB9yBlMtQQ&usqp=CAU' alt='' style={{height:'100px' ,width:'100px' ,borderRadius:'50px'}} />
    <p style={{marginLeft:'10px'}}>Treehouses</p>  
    </div>
    <div className='hotel-list'>
    <img src ='https://q-xx.bstatic.com/xdata/images/hotel/840x460/269149486.jpg?k=66108a4d9e760ed221ed2b149223b89b03c676ebf37ad7075894e9c7191c8e1f&o=' alt='' style={{marginLeft:'10px',height:'100px' ,width:'100px' ,borderRadius:'50px'}} />
    <p>Private Pool Vilas</p>  
    </div>
    </div>

    <h2>Top Hill Stations</h2>
    <div className='HillHotel'>
     
    <div className='HillHotel-list'>
    <img src ='https://www.thelostpassport.com/wp-content/uploads/2020/08/Darjeeling-Tea-Fields.jpg' alt=''  />
    <p>Darjeeling Hotels</p>  
    </div>
    <div className='HillHotel-list'>
    <img src ='https://hblimg.mmtcdn.com/content/hubble/img/coorg/mmt/destination/m_destination-coorg-landscape_l_400_640.jpg' alt=''  />
    <p>Coorg Hotels</p>  
    </div>
    <div className='HillHotel-list'>
    <img src ='https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/04/Thekkady-Lake.jpg' alt=''  />
    <p>Thekkady Hotels</p>  
    </div>
    <div className='HillHotel-list'>
    <img src ='https://trisoj.com/travel-guide/wp-content/uploads/2022/11/Places-to-Visit-in-Mussoorie.png' alt=''  />
    <p>Mussoorie Hotels</p>  
    </div>
    </div>
   

    <h2>Top Destinations for Honeymoon</h2>
    <div className='HoneyMoonHotel'>
    <div className='HillHotel-list'>
    <img src ='https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2020/07/Feature-image-Ooty-Hidden-Spots.jpg' alt=''  />
    <p>Ooty Hotels</p>  
    </div>
    <div className='HillHotel-list'>
    <img src ='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/30/3a/3c/mesmerizing.jpg?w=700&h=500&s=1' alt=''  />
    <p>Nanital Hotels</p>  
    </div>
    <div className='HillHotel-list'>
    <img src ='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/5e/59/d4/alleppey-backwater-tour.jpg?w=1200&h=1200&s=1' alt=''  />
    <p>Alleppey Hotels</p>  
    </div>
    <div className='HillHotel-list'>
    <img src ='https://static.toiimg.com/thumb/width-600,height-400,msid-53331161.cms' alt=''  />
    <p>Bali Hotels</p> 
    </div>
    
    </div>

     </div>
    </div>
  )
}

export default Hotel
