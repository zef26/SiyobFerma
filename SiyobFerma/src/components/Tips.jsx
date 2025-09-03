import React from 'react'

const Tips = () => {
  return (
    <div className="mt-[135px]">
      <h3 className="text-[28px] sm:text-[36px] md:text-[45px] lg:text-[55px] text-center font-bold">
  FOYDALI MASLAHATLAR
</h3>

      <div
        data-aos="fade-left"
        className="mt-[75px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]"
      >
        <div className="bg-[#ECECEC] rounded-[40px] p-[20px] flex flex-col">
          <img
            src="src/assets/tips/tips1.jpg"
            alt="retsept"
            className="rounded-[40px] hover:scale-105 transition duration-300"
          />
          <p className="text-[#28A0F7] text-[14px] pt-[25px]">Maslahatlar</p>
          <p className="text-[18px] md:text-[20px] font-bold pt-[20px]">
            Muzlatilgan va sovutilgan tovuq go'shtining farqi
          </p>
        </div>

        <div className="bg-[#ECECEC] rounded-[40px] p-[20px] flex flex-col">
          <img
            src="src/assets/tips/tips2.jpg"
            alt="retsept"
            className="rounded-[40px] hover:scale-105 transition duration-300"
          />
          <p className="text-[#28A0F7] text-[14px] pt-[25px]">Maslahatlar</p>
          <p className="text-[18px] md:text-[20px] font-bold pt-[20px]">
            Tovuq go'shti ozishda va parhezda yordam beradimi?
          </p>
        </div>

        <div className="bg-[#ECECEC] rounded-[40px] p-[20px] flex flex-col">
          <img
            src="src/assets/tips/tips3.jpg"
            alt="retsept"
            className="rounded-[40px] hover:scale-105 transition duration-300"
          />
          <p className="text-[#28A0F7] text-[14px] pt-[25px]">Maslahatlar</p>
          <p className="text-[18px] md:text-[20px] font-bold pt-[20px]">
            Tovuq go'shti tanlashning 5ta asosiy qoidasi!
          </p>
        </div>

        <div className="bg-[#ECECEC] rounded-[40px] p-[20px] flex flex-col">
          <img
            src="src/assets/tips/tips4.jpg"
            alt="retsept"
            className="rounded-[40px] hover:scale-105 transition duration-300"
          />
          <p className="text-[#28A0F7] text-[14px] pt-[25px]">Maslahatlar</p>
          <p className="text-[18px] md:text-[20px] font-bold pt-[20px]">
            Tovuqning qaysi qismi qanaqa ovqatlarga to'g'ri keladi?
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center mt-[60px]">
        <button className="bg-[#009440] py-[10px] px-[24px] rounded-[36px] text-white font-medium text-[15px] hover:bg-[#066a31] transition duration-300">
          Barchasini ko'rish
        </button>
      </div>
    </div>
  )
}

export default Tips
