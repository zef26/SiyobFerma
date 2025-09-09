import React from 'react'
import Header from './components/Header';


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MaintPage from './components/Pages/MainPage';
import AboutPage from './components/Pages/AboutPage';
import Footer from './components/Footer';
import TovarsPage from './components/Pages/TovarsPage';
import BlogsPage from './components/Pages/BlogsPage';
import ContactPage from './components/Pages/ContactPage';



function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


 return (
  <Router>
    <div>
    
    <div className="container px-4 pt-10 mx-auto sm:px-6 lg:px-8">
      <Header />
      <Routes>

        <Route path="/" element={<MaintPage />} />
        <Route path="/siyob-ferma-haqida" element={<AboutPage />} />
        <Route path="/mahsulotlarimiz" element={<TovarsPage />} />
        <Route path="/blog" element={<BlogsPage/>} />
        <Route path="/kontaktlar" element={<ContactPage/>} />

      </Routes>
          <Footer/>
    </div>
  </div>
  </Router>
); 

}




export default App