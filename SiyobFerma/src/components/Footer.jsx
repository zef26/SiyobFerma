import React from "react";

const Footer = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      className="mt-32 sm:mt-36 md:mt-40 w-full bg-gradient-to-br from-[#004435] to-[#00853E] rounded-t-4xl text-[#bfc1c1] px-4 sm:px-6 md:px-10 lg:px-[70px] py-10"
    >
      <div className="max-w-[1500px] mx-auto flex flex-wrap justify-center md:justify-between gap-10 text-center md:text-left">
      
        <div className="flex-1 min-w-[200px]">
          <img
            className="mx-auto md:mx-0 w-[90px] sm:w-[110px] xl:w-[130px]"
            src="src/assets/logo/logo_Siyob.png"
            alt="Siyob Ferma"
          />
          <p className="mt-5 text-[13px] sm:text-[15px] leading-relaxed">
            © Copyright 2024 <br />
            F/X Siyob Shavkat Orzu <br />
            Siyob Ferma
          </p>
        </div>

        <div className="flex-1 min-w-[160px] flex flex-col gap-2 sm:gap-3 font-semibold">
          <a className="text-[15px] sm:text-[17px] xl:text-[20px] hover:text-white transition" href="">
            Siyob Ferma haqida
          </a>
          <a className="text-[15px] sm:text-[17px] xl:text-[20px] hover:text-white transition" href="">
            Mahsulotlar
          </a>
          <a className="text-[15px] sm:text-[17px] xl:text-[20px] hover:text-white transition" href="">
            Blog
          </a>
          <a className="text-[15px] sm:text-[17px] xl:text-[20px] hover:text-white transition" href="">
            Biz bilan bog'lanish
          </a>
        </div>

    
        <div className="flex-1 min-w-[160px] flex flex-col gap-1 sm:gap-2">
          <p className="text-[17px] sm:text-[19px] font-semibold">Kontaktlar:</p>
          <p className="text-[15px] sm:text-[17px] font-semibold">+998 78 122 10 07</p>
          <p className="text-[14px] sm:text-[16px] font-semibold truncate">siyobferma.uz@gmail.com</p>
          <div className="flex gap-2 items-center justify-center  [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div]:w-[30px] [&>div]:h-[30px] [&>div]:rounded-full [&>div]:bg-[#009440] [&>div]:hover:bg-[#066a31] [&>div]:transition-colors [&>div]:duration-300 [&>div]:cursor-pointer [&>div]:hover:scale-[1.1] [&>div]:border-[2px] [&>div]:border-[white] [&>div>a>img]:w-[20px] [&>div>a>img]:h-[20px]  ">
            <div><a href="https://www.instagram.com/siyobferma.uz/"><img src="/src/assets/icons/instagram.svg" alt="instagram" /></a></div>
            <div><a href="https://www.facebook.com/siyobferma.uz"><img src="/src/assets/icons/facebook.svg" alt="facebook" /></a></div>
            <div><a href="https://t.me/siyobferma_uz"><img src="/src/assets/icons/telegram.svg" alt="telegram" /></a></div>
            <div><a href="https://www.youtube.com/@SiyobFerma"><img src="/src/assets/icons/youtube.svg" alt="youtube" /></a></div>
          </div>
        </div>

   
        <div className="w-full sm:flex-1 sm:min-w-[260px] sm:max-w-[400px] aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.9727499337023!2d67.06860767639805!3d39.627817403276495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d215ed348cbe7%3A0xeeb42186879b3408!2sSiyob%20Ferma!5e0!3m2!1sru!2s!4v1756805672556!5m2!1sru!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Siyob Ferma map"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
