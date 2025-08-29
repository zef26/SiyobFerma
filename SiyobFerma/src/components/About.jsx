import React from 'react'

const About = () => {
  return (
    <div className='mt-[110px]'>
      <h2 className='text-[55px] text-center font-bold'>BIZ HAQIMIZDA</h2>

      <div className='mt-[30px] flex items-center  justify-between'>
        <div data-aos="fade-right" className=' w-[34%] h-[540px] bg-[#004435] py-[80px] pl-[60px] pr-[50px] text-white rounded-3xl'>
            <h3 className='text-[30px] font-bold'>Siyob Ferma haqida </h3>
            <p className='text-[22px] mt-5'>«SIYOB FERMA» Tovuq go’shti  ishlab chiqaruvchi korxona Samarqand viloyatida joylashgan  bo’lib bugungi kunda yuqori  sifatli tovuq go’shti mahsulotlari  ishlab chiqarish va sotishda  yetakchi o’rinlarni egallab kelmoqda.</p>
            <button className='mt-[40px] bg-[#009440] py-[10px] px-[24px] rounded-[36px] text-white font-medium text-[15px] hover:bg-[#066a31] transition duration-300 cursor-pointer text-2xl'>Ko'proq ma'lumot olish</button>
        </div>
        <div data-aos="fade-left" >
            <img src="src/assets/About.jpg" alt="About" className=' h-[540px] object-cover rounded-3xl' />
        </div>

      </div>
    </div>
  )
}

export default About
