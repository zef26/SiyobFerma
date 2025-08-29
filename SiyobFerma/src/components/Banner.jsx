import React from 'react'
import Icon from '@mdi/react';
import { mdiFoodHalal, mdiKnife } from '@mdi/js';
import { House } from 'lucide-react';

const Banner = () => {
  return (
    <>
    
    <div data-aos="zoom-in"  className= ' h-[500px]  relative mt-10 overflow-hidden rounded-3xl' >

      <img className= 'w-full object-cover' src="src/assets/Site-Header.jpg" alt="siyob" />
      
        <div className='absolute z-20 top-[130px] left-[50px]'>
            <h1 className='text-white text-[55px] leading-tight font-bold'>Siyob Ferma — <br/> Sog'lom hayot uchun <br/> Sifatli mahsulot! </h1>
            <button className= ' bg-[#009440] py-[10px] px-[24px] rounded-[36px] text-white font-medium text-[15px] cursor-pointer mt-5 hover:bg-[#066a31] transition duration-300'>Biz haqimizda</button>
        </div>
      </div>

      <div className='flex justify-between items-center [&>div]:flex [&>div]:items-center [&>div]:gap-[25px] mt-[25px] pr-10 pl-10 '>
        <div data-aos="fade-right">
            <div  className='w-[50px] h-[50px] rounded-full bg-[#009440] flex items-center justify-center  '>
                <Icon path={mdiFoodHalal} size={1} color="white" />
            </div>
            <span className='font-normal text-[20px]'>Halol mahsulot</span>
        </div>
        <div data-aos="fade-up">
            <div className='w-[50px] h-[50px] rounded-full bg-[#009440] flex items-center justify-center  '>
                <House className='text-white'/>
            </div>
            <span className='font-normal text-[20px]'>100% o'zimizda yetishtiriladi</span>
        </div>
        <div data-aos="fade-left">
            <div className='w-[50px] h-[50px] rounded-full bg-[#009440] flex items-center justify-center  '>
                <Icon path={mdiKnife} size={1} color={"white"} />
            </div>
            <span className='font-normal text-[20px]'>Qo'lda so'yiladi</span>
        </div>
      </div> 
    </>
  )
}

export default Banner
