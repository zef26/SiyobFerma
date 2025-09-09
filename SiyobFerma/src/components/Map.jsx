import React from 'react'

const Map = () => {
  return (
    <div className="mt-[100px] px-4">
      <h3 className="text-[28px] sm:text-[36px] md:text-[45px] lg:text-[55px] font-bold text-center">
        MANZIL
      </h3>
      <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center">
        O'zbekiston, Samarqand viloyati, Toyloq tumani, Qo'rg'oncha
      </p>

      <div className="mt-[50px] w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.9727499337023!2d67.06860776!3d39.6278174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d215ed348cbe7%3A0xeeb42186879b3408!2sSiyob%20Ferma!5e0!3m2!1sru!2s!4v1756805672556!5m2!1sru!2s"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "24px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Siyob Ferma map"
        />
      </div>
    </div>
  )
}

export default Map
