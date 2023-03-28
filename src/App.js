
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Package from '../src/Pages/Packages/Package.jsx' 
import About from '../src/Pages/about/About.jsx'
import Hotel from '../src/Pages/Hotel/Hotel.jsx'
import BookNow from '../src/Pages/BookNow/BookNow.jsx'
import News from '../src/Pages/News/News.jsx'
import Contact from '../src/Pages/Contact/Contact.jsx'
import Navbar from '../src/components/Navbar.jsx'

import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     <Router>
     <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Packages' element={<Package/>}/>
        <Route path='/Hotel' element={<Hotel/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/BookNow' element={<BookNow/>}/>
        <Route path='/News' element={<News/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        </Routes>
       
        <Footer/>
     </Router>
     
    </div>
  );
}

export default App;
