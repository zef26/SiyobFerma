import React from 'react'
import About from '../About';
import Partners from '../Partners';
import Answers from '../Answers';
import Blog from '../Blog';
import Tips from '../Tips';
import AboutMain from '../AboutMain';


const FirstPage = () => {
  return (
    <div>
      
      <AboutMain/>
      <About/>
      {/* <Partners/> */}
      <Answers/>
      {/* <Blog/> */}
      <Tips/>
    </div>
  )
}

export default FirstPage
