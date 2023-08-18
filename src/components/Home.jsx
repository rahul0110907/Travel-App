
import '../style/Home.css'

import Product from '../components/Product.jsx';


const Home = () => {
   
  return (
    <div>
    <div className='banner'>
        <div className='text'>
            <span>OUR PACKAGES</span>
            <div>
                Search your <span style={{color:'red', textDecoration:'underline'}}>Holiday</span>
            </div>
             </div>
             
             </div>
             <Product/>
    </div>
  )
}

export default Home
