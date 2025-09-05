import React from 'react'
import About from '../About';
import Partners from '../Partners';
import Answers from '../Answers';
import Blog from '../Blog';
import Tips from '../Tips';
import Banner from '../Banner';


const FirstPage = () => {
  return (
    <div>
      <Banner />
      <About/>
      <Partners/>
      <Answers/>
      <Blog/>
      <Tips/>
    </div>
  )
}

export default FirstPage
