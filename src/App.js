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
import { useEffect } from 'react';

function App() {



  return (
    <div className="App overflow-y-hidden scrol">
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
