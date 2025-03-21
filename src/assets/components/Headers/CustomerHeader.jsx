import React, { useState } from "react";
import { Link } from "react-router-dom";
const CustomerHeader = () => {
    // State to track the menu open/close
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="p-3 bg-[#31A505] md:flex md:items-center md:justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="flex justify-between items-center">
                <img className="h-14 inline cursor-pointer" src="https://larrytabus.com/img/logo-white.png" alt="Logo" />

                {/* Mobile Menu Toggle Button */}
                <span
                    className="text-3xl text-white cursor-pointer mx-2 md:hidden block"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <ion-icon name={menuOpen ? "close-outline" : "menu-outline"}></ion-icon>
                </span>
            </div>

            {/* Navigation Links */}
            <ul
                className={`md:flex md:items-center absolute md:static bg-[#31A505] w-full left-0 
                md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all duration-300 ease-in-out
                ${menuOpen ? "top-16 opacity-100 visible" : "top-[-400px] opacity-0 invisible"} md:opacity-100 md:visible`}
            >
                <li className="mx-4 my-6 md:my-0">
                    <a href="/" className="text-[17px] text-white hover:text-gray-300 duration-500">Buses</a>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <a href="/branches" className="text-[17px] text-white hover:text-gray-300 duration-500">Branches</a>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <a href="/about" className="text-[17px] text-white hover:text-gray-300 duration-500">About</a>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <a href="/faqs" className="text-[17px] text-white hover:text-gray-300 duration-500">FAQs</a>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <a href="#" className="text-[17px] text-white hover:text-gray-300 duration-500">Profile</a>
                </li>

                <Link to="/login">
                    <button className="bg-amber-500 text-white text-[17px] px-6 py-2 mx-4 hover:bg-amber-300 rounded duration-100">
                        Login
                    </button>
                </Link>
            </ul>
        </nav>
    );
};

export default CustomerHeader;
