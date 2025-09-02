import React from "react";

const Footer = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="300" className="mt-[135px] w-full h-[400px] bg-gradient-to-br from-[#004435] to-[#00853E] rounded-t-4xl flex justify-between p-[70px] text-[#bfc1c1]">
      <div>
        <img
          className="w-[130px]"
          src="src/assets/logo/logo_Siyob.png"
          alt=""
        />
        <p className="mt-[40px]">
          © Copyright 2024 <br />
          F/X Siyob Shavkat Orzu <br />
          Siyob Ferma
        </p>
      </div>

      <div className="flex flex-col gap-[15px] [&>a]:text-[20px] font-semibold">
        <a href="">Siyob Ferma haqida</a>
        <a href="">Mahsulotlar</a>
        <a href="">Blog</a>
        <a href="">Biz bilan bog'lanish</a>
      </div>

      <div className="[&>p]:font-semibold flex flex-col gap-[15px]">
        <p className="text-[20px]">Kontaktlar:</p>
        <p className="text-[18px]">+998 78 122 10 07</p>
        <p>siyobferma.uz@gmail.com</p>
      </div>

      <div className="w-[400px] h-[250px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.9727499337023!2d67.06860767639805!3d39.627817403276495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d215ed348cbe7%3A0xeeb42186879b3408!2sSiyob%20Ferma!5e0!3m2!1sru!2s!4v1756805672556!5m2!1sru!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Footer;
