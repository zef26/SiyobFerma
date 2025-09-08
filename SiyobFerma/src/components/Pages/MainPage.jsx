import React from 'react'
import About from '../About';
import Partners from '../Partners';
import Answers from '../Answers';
import Blog from '../Blog';
import Tips from '../Tips';
import AboutMain from '../AboutMain';
import Sertificats from '../Sertificats';


const FirstPage = () => {
  return (
    <div>
      
      <AboutMain/>
      <About/>
      {/* <Partners/> */}
      <Sertificats/>
      <Answers/>
      {/* <Blog/> */}
      <Tips/>
    </div>
  )
}

export default FirstPage
