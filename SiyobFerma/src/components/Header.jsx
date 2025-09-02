import React, { useState } from "react";
import ReacCountryFlag from "react-country-flag";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed z-50 bg-white left-0 top-0 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        {/* Лого */}
        <div className="w-[70px] h-[70px] flex-shrink-0">
          <a href="/">
            <img
              src="src/assets/logo/logo_Siyob.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </a>
        </div>

        {/* Навигация (desktop) */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex gap-6 text-[16px] font-medium [&>li]:cursor-pointer [&>li]:hover:text-[#009440] [&>li]:transition">
            <li>Bosh sahifa</li>
            <li>Siyob Ferma haqida</li>
            <li>Mahsulotlar</li>
            <li>Blog</li>
            <li>Kontaktlar</li>
          </ul>

          {/* Язык */}
          <div className="flex flex-col items-center cursor-pointer ml-4">
            <div className="flex items-center gap-2">
              <ReacCountryFlag countryCode="UZ" svg />
              <span className="text-[16px] font-medium text-[#009440]">UZ</span>
              <ChevronDown className="w-4 h-4 text-[#009440]" />
            </div>
            <div className="w-[40px] h-[1.5px] bg-[#009440]" />
          </div>
        </nav>

        {/* Кнопка (desktop) */}
        <div className="hidden lg:block">
          <button className="bg-[#009440] py-2 px-6 rounded-[36px] text-white font-medium text-[15px] hover:bg-[#066a31] transition">
            <a href="tel:+998781221007">+998 78 122 10 07</a>
          </button>
        </div>

        {/* Бургер (mobile) */}
        <button
          className="lg:hidden p-2 text-[#009440]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-md px-4 py-6 space-y-4">
          <ul className="flex flex-col gap-4 text-[16px] font-medium [&>li]:cursor-pointer [&>li]:hover:text-[#009440]">
            <li>Bosh sahifa</li>
            <li>Siyob Ferma haqida</li>
            <li>Mahsulotlar</li>
            <li>Blog</li>
            <li>Kontaktlar</li>
          </ul>

          <div className="flex items-center gap-2 pt-4 border-t">
            <ReacCountryFlag countryCode="UZ" svg />
            <span className="text-[16px] font-medium text-[#009440]">UZ</span>
            <ChevronDown className="w-4 h-4 text-[#009440]" />
          </div>

          <button className="mt-4 w-full bg-[#009440] py-2 rounded-[36px] text-white font-medium text-[15px] hover:bg-[#066a31] transition">
            <a href="tel:+998781221007">+998 78 122 10 07</a>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
