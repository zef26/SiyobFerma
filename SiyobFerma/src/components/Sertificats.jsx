import React from 'react'

const Sertificats = () => {
  return (
    <div  className="px-4 mt-20 md:px-10 lg:px-20">
      <h3 className="text-[28px] sm:text-[36px] md:text-[45px] lg:text-[55px] font-bold text-center">
        Sertifikatlar
      </h3>

      <div
        data-aos="fade-right"
        className="flex flex-wrap items-center justify-between mt-20 "
      >
        <img
          src="src/assets/sertificate/sert1.jpg"
          alt="sert"
          className="w-full sm:w-[45%] lg:w-[30%] max-w-[383px] h-auto"
        />
        <img
          src="src/assets/sertificate/sert2.jpg"
          alt="sert"
          className="w-full sm:w-[45%] lg:w-[30%] max-w-[383px] h-auto"
        />
        <img
          src="src/assets/sertificate/sert3.png"
          alt="sert"
          className="w-full sm:w-[45%] lg:w-[30%] max-w-[383px] h-auto"
        />
      </div>
    </div>
  )
}

export default Sertificats
