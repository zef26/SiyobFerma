import React from 'react'

const Blog = () => {
  return (
    <div className='mt-[135px]'>

        <h3 className='text-[55px] text-center font-bold'>BLOG</h3>
        <p className='text-[#8C8C8C] text-[18px] text-center'>Qimmatli maslahatlar va maxsus retseptlar</p>

        <div data-aos="fade-left" className='mt-[75px] flex items-center justify-between gap-[20px] [&>div]:pb-[40px] [&>div]:cursor-pointer '>
            <div className='flex-1  bg-[#ECECEC] rounded-[60px] p-[20px]  '>
                <img src="src/assets/blogs/blog1.jpg" alt="retsept"  className='hover:transform hover:scale-110 transition duration-300  rounded-[60px]' />
                <p className='text-[#28A0F7] text-[14px] pt-[35px] '>Retseptlar</p>
                <p className='text-[20px] font-[700] pt-[30px] w-[70%]'>Tovuq oyoqchalaridan mazali Chaxoxbili retsepti</p>
            </div>

            <div className='flex-1  bg-[#ECECEC] rounded-[60px] p-[20px]  '>
                <img src="src/assets/blogs/blog2.jpg" alt="retsept"  className='hover:transform hover:scale-110 transition duration-300 rounded-[60px]'/>
                <p className='text-[#28A0F7] text-[14px] pt-[35px] '>Retseptlar</p>
                <p className='text-[20px] font-[700] pt-[30px] w-[70%]'>Tovuq jigari va qaymoqdan mazali retsept</p>
            </div>
            <div className='flex-1 gap-[30px] bg-[#ECECEC] rounded-[60px] p-[20px]  '>
                <img src="src/assets/blogs/blog3.jpg" alt="retsept" className='hover:transform hover:scale-110 transition duration-300 rounded-[60px]' />
                <p className='text-[#28A0F7] text-[14px] pt-[35px]'>Retseptlar</p>
                <p className='text-[20px] font-[700] pt-[30px] w-[70%]'>Qovurilgan tovuq yurakchalaridan ishtaha ochar retsept</p>
            </div>
            <div className='flex-1 gap-[30px] bg-[#ECECEC] rounded-[60px] p-[20px]  '>
                <img src="src/assets/blogs/blog4.jpg" alt="retsept" className='hover:transform hover:scale-110 transition duration-300 rounded-[60px]'/>
                <p className='text-[#28A0F7] text-[14px] pt-[35px]'>Retseptlar</p>
                <p className='text-[20px] font-[700] pt-[30px] w-[70%]'>Tovuq oyoqchalaridan sirli qarsildoq jo'ja retsepti</p>
            </div>
            
        </div>

      <div className='w-full flex justify-center mt-[60px]'>
        <button className=' bg-[#009440] py-[10px] px-[24px] rounded-[36px] text-white font-medium text-[15px] hover:bg-[#066a31] transition duration-300 cursor-pointer '>Barchasini ko'rish</button>

        </div>
     
    </div>
  )
}

export default Blog
