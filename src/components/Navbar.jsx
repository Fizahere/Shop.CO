import React, { useState } from "react";
import { ICONS } from "../assets/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`bg-white h-16 fixed top-0 left-0 w-full z-50 border-b border-black ${
          isOpen ? "border-none" : "border-b border-black"
        }`}
      >
        <ul className="ml-5 justify-between md:justify-evenly h-16 items-center text-black flex">
          <h3 className="hidden md:block">SHOP.CO</h3>
          <div className="flex md:hidden">
            <ICONS.HAMBURGER
              className={`text-xl cursor-pointer mr-4 ${
                isOpen ? "hidden" : "block"
              }`}
              onClick={toggleDrawer}
            />
            <h3>Logo</h3>
            <ICONS.CLOSE
              className={`text-lg cursor-pointer ml-40 ${
                isOpen ? "block" : "hidden"
              }`}
              onClick={toggleDrawer}
            />
          </div>
          <ul className="hidden md:flex">
            <li className="mr-6 cursor-pointer">Shop</li>
            <li className="mr-6 cursor-pointer">On Sale</li>
            <li className="mr-6 cursor-pointer">New Arrivals</li>
            <li className="mr-6 cursor-pointer">Brands</li>
          </ul>
          <div className="hidden lg:flex relative">
            <i className="absolute left-3 top-3">
              <ICONS.SEARCH color="grey" fontWeight={'100'}/>
            </i>
            <input
              className="bg-gray-100 pl-8 pr-2 py-2 w-96 rounded-full"
              placeholder="search for products.."
            />
          </div>
          <div className="flex justify-between">
            <i>
              <ICONS.CART fontSize={21} className="mr-2"/>
            </i>
            <i>
              <ICONS.PROFILE fontSize={20} className="mr-2" />
            </i>
          </div>
        </ul>
      {/* <div className="flex lg:hidden relative mt-6 justify-center">
            <i className="absolute left-[16.5rem] top-2.5">
              <ICONS.SEARCH/>
            </i>
            <input
              className="border-2 border-black pl-7 pr-2 py-1 w-96 rounded-md"
              placeholder="search here.."
            />
          </div> */}
      </nav>
      

      <aside
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      >
        <div
          className={`fixed top-0 p-5 left-0 h-full w-64 bg-customBlue text-black transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="mt-20">
            <li className="mt-10 cursor-pointer">Home</li>
            <li className="mt-3 cursor-pointer">About</li>
            <li className="mt-3 cursor-pointer">Contact</li>
            <li className="mt-3 cursor-pointer">Login</li>
            <li className="mt-3 cursor-pointer">Register</li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
