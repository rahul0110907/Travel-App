import React, { useState } from 'react'
import '../style/PackageCard.css'

const PackageCard = () => {
    const[open ,setOpen] =useState(true);
    const[openApril,setApril]=useState(false);
    const[openJuly,setJuly]=useState(false);
    const October =()=>{
       setOpen(true);
       setJuly(false);
       setApril(false);
    }
    const April =()=>{
        setJuly(false);
        setOpen(false)
        setApril(true);
     }
     const July =()=>{
        setApril(false)
        setOpen(false);
        setJuly(true);
     }
  return (
    <div className='packagecard-main'>
    <div className='packagecard'>
        <div className='package-list'>
    <img src ='https://static.toiimg.com/photo/93246451.cms' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}} />
    <a href='/'>Himachal package</a>
    <p>Starting form : &#8377;10000 </p>
    </div>
    <div className='package-list'>
    <img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJlakRbjMMHvroiDwWqfO2tu17XDUKdWf4A&usqp=CAU' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}}/>
    <a href='/'>Rajasthan package</a>
    <p>Starting form : &#8377;15000 </p>
    </div>
    <div className='package-list'>
    <img src ='https://www.nativeplanet.com/img/2020/09/jammucover-1601270563.jpg' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}} />
    <a href='/'>Jammu Kashmir package</a>
    <p>Starting form : &#8377;9000 </p>
    </div>
    <div className='package-list'>
    <img src ='https://media.istockphoto.com/id/484389570/photo/himalayas.jpg?s=612x612&w=0&k=20&c=6jM32XJBWlvv6x7AF-av52jlncPkz5hn_AEhjaDSFYI=' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}} />
    <a href='/'>Uttarakhand package</a>
    <p>Starting form : &#8377;11000 </p>
    </div>
    <div className='package-list'>
    <img src ='https://cdn.kimkim.com/files/a/content_articles/featured_photos/6993d173d4b49caed93819ef9e4a366631c6b249/big-b71140ad5f5648cff4aaff46447c003f.jpg' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}} />
    <a href='/'>Tamil Nadu package</a>
    <p>Starting form : &#8377;20000 </p>
    </div>
    </div>

    <div className='packagecard-month'>
        <h2>Top places in India by months</h2>
       
        <div className='month-name'>
            <span onClick={October}  >October to March</span>
            <span onClick={April}>April to June</span>
            <span onClick={July}>July to September</span>
        </div>
       {
        open&& <div className='october'>
             <div className='packagecard'>
        <div className='package-list'>
    <img src ='https://www.holidify.com/images/cmsuploads/compressed/PBA_20180911145004.jpg' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}} />
    <a href='/'>Alleppy</a>
    
    </div>
    <div className='package-list'>
    <img src ='https://assets.traveltriangle.com/blog/wp-content/uploads/2016/09/Untitled-design1.jpg' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}}/>
    <a href='/'>Jaisalmer -The Golden City</a>
    
    </div>
    <div className='package-list'>
    <img src ='https://www.tripsavvy.com/thmb/Yh7C0nh6CKbB5BmhRz3il-V8sm8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-537000923-541774dbe2d44759815fdf0719b04685.jpg' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}} />
    <a href='/'>Kutch</a>
   
    </div>
    <div className='package-list'>
    <img src ='https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/09/23113313/andaman-nicobar.jpg' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}} />
    <a href='/'>Andman</a>
   
    </div>
    <div className='package-list'>
    <img src ='https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/09/27/871143-goa-tourism-092719.jpg' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}} />
    <a href='/'>Goa -Beaches,Sunsets and Crazy Nights</a>
    
    </div>
    </div>
            </div>
       }
        {
        openApril&& <div className='April'>
             <div className='packagecard'>
        <div className='package-list'>
    <img src ='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/0f/94/c2/paragliding-in-solang.jpg?w=600&h=400&s=1' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}} />
    <a href='/'>Manali</a>
    
    </div>
    <div className='package-list'>
    <img src ='https://www.holidify.com/images/bgImages/GANGTOK.jpg' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}}/>
    <a href='/'>GangTok</a>
   
    </div>
    <div className='package-list'>
    <img src ='https://admin.banbanjara.com/public/frontend/uploads/destination/1626948902908-SpitiValley.jpg' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}} />
    <a href='/'>Spiti</a>

    </div>
    <div className='package-list'>
    <img src ='https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/05/Trip-to-Kasol-A-memory-to-fill-your-adventure-wall-Tosh.jpg' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}} />
    <a href='/'>Kasol</a>
    
    </div>
    <div className='package-list'>
    <img src ='https://www.clubmahindra.com/blog/media/section_images/shuttersto-026b0fa609daf35.jpg' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}} />
    <a href='/'>Shimla</a>
    
    </div>
    </div>
            </div>
       }
      {
        openJuly&& <div className='october'>
             <div className='packagecard'>
        <div className='package-list'>
    <img src ='https://www.holidify.com/images/bgImages/LADAKH.jpg' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}} />
    <a href='/'>Ladakh</a>
    
    </div>
    <div className='package-list'>
    <img src ='https://static.toiimg.com/photo/msid-85515152,width-96,height-65.cms' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}}/>
    <a href='/'>Munnar</a>
  
    </div>
    <div className='package-list'>
    <img src ='https://sai.org.in/sites/default/files/Mask%20Group%201_new.jpg' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}} />
    <a href='/'>Shirdi</a>
    
    </div>
    <div className='package-list'>
    <img src ='https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/ooty-1655457424_bca80f81e8391ebdaaca.webp' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}} />
    <a href='/'>Ooty</a>
   
    </div>
    <div className='package-list'>
    <img src ='https://images.thrillophilia.com/image/upload/s--oJuHii4g--/c_fill,g_auto,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/082/478/original/1600412455_shutterstock_1084397678.jpg.jpg' alt='' style={{height:'100px' ,width:'200px' ,borderRadius:'10px'}} />
    <a href='/'>Meghalaya</a>
   
    </div>
    </div>
            </div>
       }

<div className='family-theme'>
<h2>Best Theme Package</h2>
<div className='packagecard'>
        <div className='theme-list'>
    <img src ='https://www.tourmyindia.com/states/rajasthan/image/honeymoon-banner-m.webp' alt='' style={{height:'150px' ,width:'100%' ,borderRadius:'7px'}} />
     <h3>Honeymoon Package</h3>
    <p>A perfect Romantic Getaway With Your Partner </p>
    <p>Starting from : <span>9000</span></p>
    
    </div>
   
    <div className='theme-list'>
    <img src ='https://www.tourmyindia.com/states/goa/image/family-getaways-goa.webp' alt='' style={{height:'150px' ,width:'100%' ,borderRadius:'7px'}} />
     <h3>Family Package</h3>
    <p>Hand Crafted Holidays For An Ideals Family Vacation </p>
    <p>Starting from : <span>12239</span></p>
    
    </div>
    <div className='theme-list'>
    <img src ='https://indiathrills.com/wp-content/uploads/2022/03/3rkhc5wxof9kmokdky067faduyh8_shutterstock_1115156795.jpg' alt='https://indiathrills.com/wp-content/uploads/2022/03/3rkhc5wxof9kmokdky067faduyh8_shutterstock_1115156795.jpg' style={{height:'150px' ,width:'100%' ,borderRadius:'7px'}} />
     <h3>Friends Package</h3>
    <p>Best Of Local And International Travel Packages With Your Closest Friends </p>
    <p>Starting from : <span>6660</span></p>
    
    </div>
    <div className='theme-list'>
    <img src ='https://www.travel.domains/wp-content/uploads/2019/10/adventure-tourism.jpg' alt='' style={{height:'150px' ,width:'100%' ,borderRadius:'7px'}} />
     <h3>Adventure Package</h3>
    <p>Best Deals For An Adrenaline Filled Holiday </p>
    <p>Starting from : <span>10608</span></p>
    
    </div>
    </div>

</div>
      
     
     
   </div>
      
    </div>
  )
}

export default PackageCard
