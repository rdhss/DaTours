import './App.scss';
import Headers from './components/Headers';
import About from './components/About';
import Features from './components/Features';
import Tours from './components/Tours';
import Stories from './components/Stories';
import Book from './components/Book';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [Active, setActive] = useState(false)
  const checkboxes = useRef(null)

  return (
    <div className="App overflow-y-hidden z-50">
     <input type="checkbox" id="active" ref={checkboxes}/>
    {/* <label for="active" class="menu-btn" onClick={()=>setActive(!Active)}><FontAwesomeIcon icon={faBars} className='text-black'/></label> */}
    <label for="active" class="menu-btn-up"><FontAwesomeIcon icon={faBars} className='text-black text-center absolute right-4 top-[15px]'/></label>
    <div class={`wrapper bg-testing`}>
      <ul>
        {["home", "about", "features", "tours", "stories", "booking"].map(item =>
        <li><a onClick={()=> checkboxes.current.checked=false} href={`#${item}`}>{item}</a></li>
          )}
      </ul>
    </div>
      <Headers/>
      <About/>
      <Features/>
      <Tours/>      
      <Stories/>  
      <Book/>
      <Footer/>
    </div>
  );
}

export default App;
