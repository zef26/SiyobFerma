import React from 'react'
import Header from './components/Header';
import Banner from './components/Banner';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from './components/About';
import Partners from './components/Partners';
import Answers from './components/Answers';
import Blog from './components/Blog';
import Tips from './components/Tips';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
  <div className='pt-10 px-5 container  mx-auto'>
    <Header />
    <Banner />
    {/* <About/> */}
    {/* <Partners/> */}
    {/* <Answers/> */}
    {/* <Blog/> */}
    {/* <Tips/> */}
    {/* <Footer/> */}
    
  </div>
  );
}




export default App
