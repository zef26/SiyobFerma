import React from 'react'

const Tips = () => {
  return (
   <div className='mt-[135px]'>

        <h3 className='text-[55px] text-center font-bold'>FOYDALI MASLAHATLAR</h3>
      

        <div data-aos="fade-left" className='mt-[75px] flex items-center justify-between gap-[20px] [&>div]:pb-[40px] [&>div]:cursor-pointer '>
            <div className='flex-1  bg-[#ECECEC] rounded-[60px] p-[20px]  '>
                <img src="src/assets/tips/tips1.jpg" alt="retsept"  className='hover:transform hover:scale-110 transition duration-300  rounded-[60px]' />
                <p className='text-[#28A0F7] text-[14px] pt-[35px] '>Maslahatlar</p>
                <p className='text-[20px] font-[700] pt-[30px] w-[70%]'>Muzlatilgan va sovutilgan tovuq go'shtining farqi</p>
            </div>

            <div className='flex-1  bg-[#ECECEC] rounded-[60px] p-[20px]  '>
                <img src="src/assets/tips/tips2.jpg" alt="retsept"  className='hover:transform hover:scale-110 transition duration-300 rounded-[60px]'/>
                <p className='text-[#28A0F7] text-[14px] pt-[35px] '>Maslahatlar</p>
                <p className='text-[20px] font-[700] pt-[30px] w-[70%]'>Tovuq go'shti ozishda va parhezda yordam beradimi?</p>
            </div>
            <div className='flex-1 gap-[30px] bg-[#ECECEC] rounded-[60px] p-[20px]  '>
                <img src="src/assets/tips/tips3.jpg" alt="retsept" className='hover:transform hover:scale-110 transition duration-300 rounded-[60px]' />
                <p className='text-[#28A0F7] text-[14px] pt-[35px]'>Maslahatlar</p>
                <p className='text-[20px] font-[700] pt-[30px] w-[70%]'>Tovuq go'shti tanlashning 5ta asosiy qoidasi!</p>
            </div>
            <div className='flex-1 gap-[30px] bg-[#ECECEC] rounded-[60px] p-[20px]  '>
                <img src="src/assets/tips/tips4.jpg" alt="retsept" className='hover:transform hover:scale-110 transition duration-300 rounded-[60px]'/>
                <p className='text-[#28A0F7] text-[14px] pt-[35px]'>Maslahatlar</p>
                <p className='text-[20px] font-[700] pt-[30px] w-[70%]'>Tovuqning qaysi qismi qanaqa ovqatlarga to'g'ri keladi?</p>
            </div>
            
        </div>

      <div className='w-full flex justify-center mt-[60px]'>
        <button className=' bg-[#009440] py-[10px] px-[24px] rounded-[36px] text-white font-medium text-[15px] hover:bg-[#066a31] transition duration-300 cursor-pointer '>Barchasini ko'rish</button>

        </div>
     
    </div>
  )
}

export default Tips
