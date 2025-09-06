import React from "react";
import Icon from "@mdi/react";
import { mdiFoodHalal, mdiKnife } from "@mdi/js";
import { House } from "lucide-react";

const Banner = () => {
  return (
    <>
      {/* Hero section */}
      <div data-aos="zoom-in" className="relative w-full mt-[25px] overflow-hidden rounded-3xl">
        <img
          src="src/assets/Site-Header.jpg"
          alt="siyob"
          className="w-full h-auto max-h-[700px] object-cover rounded-3xl"
        />

        {/* Текст поверх */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-4 sm:px-8 md:px-16 lg:px-20">
          <h1 className="text-white font-bold leading-snug text-[16px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[55px] max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
            Siyob Ferma — <br /> Sog'lom hayot uchun <br /> Sifatli mahsulot!
          </h1>
          <button className="mt-4 rounded-full bg-[#009440] px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-white font-medium hover:bg-[#066a31] transition-colors duration-300">
            Biz haqimizda
          </button>
        </div>
      </div>
   
      {/* Features */}
      <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {/* Item 1 */}
        <div data-aos="fade-right" className="flex flex-col items-center gap-3">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#009440]">
            <Icon path={mdiFoodHalal} color="white" className="w-6 h-6" />
          </div>
          <span className="text-[16px] xl:text-[20px] text-center">Halol mahsulot</span>
        </div>

        {/* Item 2 */}
        <div data-aos="fade-up" className="flex flex-col items-center gap-3">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#009440]">
            <House className="w-6 h-6 text-white" />
          </div>
          <span className="text-[16px] xl:text-[20px] text-center">100% o'zimizda yetishtiriladi</span>
        </div>

        {/* Item 3 */}
        <div data-aos="fade-left" className="flex flex-col items-center gap-3">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#009440]">
            <Icon path={mdiKnife} color="white" className="w-6 h-6" />
          </div>
          <span className="text-[16px] xl:text-[20px] text-center">Qo'lda so'yiladi</span>
        </div>
      </div>
    </>
  );
};

export default Banner;
