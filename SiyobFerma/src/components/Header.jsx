import React from 'react'
import ReacCountryFlag from 'react-country-flag'
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <div className='flex items-center justify-between  '>

      <div className='w-[80px] h-[80px]'>
        <a href="">
        <img src="	https://siyobferma.uz/ru/wp-content/uploads/sites/2/2025/01/logo_Siyob.png" alt="Logo" />
        </a>
      </div>
      <div>
        <nav className='flex items-center gap-[25px]'>
            <ul className='flex gap-[25px] text-[17px] font-medium [&>li]:cursor-pointer [&>li]:hover:text-[#009440] [&>li]:transition duration-300 '>
                <li >Bosh sahifa</li>
                <li>Siyob Ferma haqida</li>
                <li>Mahsulotlar</li>
                <li>Blog</li>
                <li>Kontaktlar</li>
            </ul>

            <div className='flex-1 cursor-pointer'>
                <div className='flex items-center gap-2'>
                    <ReacCountryFlag countryCode='UZ' svg/> 
                    <span className='text-[18px] font-medium text-[#009440]'>UZ</span>
                    <ChevronDown className="w-5 h-5 text-[#009440]" />
                </div>

                <div className='w-[50px] h-[1.5px] bg-[#009440]' ></div>
            </div>

        </nav>

      </div>
      <div>
        <button className='bg-[#009440] py-[10px] px-[24px] rounded-[36px] text-white font-medium text-[15px] cursor-pointer hover:bg-[#066a31] transition duration-300'><a href="tel:+998781221007">+998 78 122 10 07</a></button>
      </div>

    </div>

  )
}

export default Header
