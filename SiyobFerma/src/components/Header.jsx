import React, { useState } from "react";
import ReacCountryFlag from "react-country-flag";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import { navLinkStyle } from "./helpers/navLinkStyle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white ">
      <div className="flex items-center justify-between px-4 py-3 mx-auto sm:px-6 lg:px-8 lg:py-4">
        {/* Лого */}
        <div className="flex-shrink-0 w-14 h-14 sm:w-[85px] sm:h-[85px]">
          <a href="/">
            <img
              src="src/assets/logo/logo_Siyob.png"
              alt="Logo"
              className="object-contain w-full h-full"
            />
          </a>
        </div>

        {/* Навигация (desktop) */}
        <nav className="items-center hidden gap-6 lg:flex">
          <ul className="flex gap-6 text-[16px] font-medium [&>li]:cursor-pointer [&>li]:hover:text-[#009440] [&>li]:transition">
            <li>
              <NavLink end style={navLinkStyle} to="/">
                Bosh sahifa
              </NavLink>
            </li>
            <li>
              <NavLink end style={navLinkStyle}  to="/siyob-ferma-haqida">Biz haqimizda</NavLink>
            </li>
            <li>
              <NavLink end style={navLinkStyle}  to="/mahsulotlarimiz">Mahsulotlar</NavLink>
            </li>
            <li>Blog</li>
            <li>Kontaktlar</li>
          </ul>

          {/* Язык */}
          <div className="flex flex-col items-center ml-4 cursor-pointer">
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
          <button className="bg-[#009440] py-2 px-6 rounded-full text-white font-medium text-[15px] hover:bg-[#066a31] transition">
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

      {/* Мобильное меню с плавной анимацией */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-4 bg-white border-t shadow-md">
          <ul className="flex flex-col gap-4 text-[16px] font-medium [&>li]:cursor-pointer [&>li]:hover:text-[#009440]">
            <li>
              <NavLink end style={navLinkStyle} to="/">
                Bosh sahifa
              </NavLink>
            </li>
            <li>
              <NavLink end style={navLinkStyle}  to="/siyob-ferma-haqida">Biz haqimizda</NavLink>
            </li>
            <li>
              <NavLink end style={navLinkStyle}  to="/Mahsulotlar">mahsulotlar</NavLink>
            </li>
            <li>Blog</li>
            <li>Kontaktlar</li>
          </ul>

          <div className="flex items-center gap-2 pt-4 border-t">
            <ReacCountryFlag countryCode="UZ" svg />
            <span className="text-[16px] font-medium text-[#009440]">UZ</span>
            <ChevronDown className="w-4 h-4 text-[#009440]" />
          </div>

          <button className="mt-4 w-full bg-[#009440] py-2 rounded-full text-white font-medium text-[15px] hover:bg-[#066a31] transition">
            <a href="tel:+998781221007">+998 78 122 10 07</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
