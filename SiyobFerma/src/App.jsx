import React from 'react'
import Header from './components/Header';


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from './components/Pages/FirstPage';



function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


 return (
  <Router>
    <div>
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10">
      <Header />
      <Routes>

        <Route path="/" element={<FirstPage />} />

      </Routes>
          
    </div>
  </div>
  </Router>
);

}




export default App