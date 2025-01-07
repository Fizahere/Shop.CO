import React, { useState } from "react";
import { ICONS } from "../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../pages/Cart";

const Navbar = ({ RoutesName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const handleSelect = (event) => {
    const selectedCategory = event.target.value.toLowerCase();
    if (selectedCategory) {
      navigate(RoutesName.CATEGORY.replace(':category', selectedCategory));
    }
  };
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const toggleCartDrawer = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <nav
        className={`bg-white h-16 fixed top-0 left-0 w-full z-20`}
      >
        <ul className="ml-5 justify-between items-center md:justify-evenly h-16 items-center text-black flex">
          <h3 className="hidden md:block text-black font-extrabold text-3xl"><Link to={'/'}><div className="flex items-center space-x-2"><ICONS.LOGO className="text-black text-md"/><p>SHOP.CO</p></div></Link></h3>
          <div className="flex md:hidden">
            <ICONS.HAMBURGER
              className={`text-xl cursor-pointer mt-2 mr-4 ${isOpen ? "hidden" : "block"
                }`}
              onClick={toggleDrawer}
            />
            <h3 className={`text-black font-extrabold text-2xl md:text-3xl ${isOpen ? 'hidden' : 'block'}`}><Link to={'/'}>SHOP.CO</Link></h3>
          </div>
          <ul className="hidden md:flex">
            <select
              className="px-4 cursor-pointer"
              onChange={handleSelect}
            >
              <option value="" disabled>
                Select Category
              </option>
              {['Casual', 'Sports', 'Classic', 'Gym'].map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <li className="mr-6 ml-4 cursor-pointer">On Sale</li>
            <li className="mr-6 cursor-pointer">New Arrivals</li>
            <li className="mr-6 cursor-pointer">Brands</li>
          </ul>
          <div className="hidden lg:flex relative">
            <i className="absolute left-3 top-3">
              <ICONS.SEARCH color="grey" fontWeight={'100'} />
            </i>
            <input
              className="bg-gray-100 pl-8 pr-2 py-2 w-96 rounded-full"
              placeholder="search for products.."
            />
          </div>
          <div className={`flex justify-between md:ml-6 md:ml-0 ${isOpen || isCartOpen ? 'hidden' : 'block'}`}>
            <i>
              <Link to={RoutesName.CART}>
              <ICONS.CART fontSize={21} className="mr-6 md:mr-4 cursor-pointer"/>
              </Link>
              {/* <ICONS.CART fontSize={21} className="mr-6 md:mr-4 cursor-pointer" onClick={toggleCartDrawer} /> */}
            </i>
            <i>
              <ICONS.PROFILE fontSize={22} className="mr-6 cursor-pointer" />
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
        className={`fixed z-30 inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >

        <div
          className={`fixed top-0 p-5 left-0 h-screen w-64 bg-white text-black transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex items-center">
            <h3 className="text-black font-extrabold text-2xl md:text-3xl" onClick={toggleDrawer}><Link to={'/'}>SHOP.CO</Link></h3>
            <ICONS.CLOSE
              className={`text-xl cursor-pointer ml-20 ${isOpen ? "block" : "hidden"
                }`}
              onClick={toggleDrawer}
            />
          </div>
          <ul>
            <li className="mt-10 cursor-pointer" onClick={toggleDrawer}>Home</li>
            <select
              className="px-4 cursor-pointer"
              onChange={handleSelect}
            >
              <option value="" disabled>
                Select Category
              </option>
              {['Casual', 'Sports', 'Classic', 'Gym'].map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <li className="mt-3 cursor-pointer">On Sale</li>
            <li className="mt-3 cursor-pointer">New Arrivals</li>
            <li className="mt-3 cursor-pointer">Brands</li>
            <li className="mt-3 cursor-pointer" onClick={toggleDrawer}>Login</li>
            <li className="mt-3 cursor-pointer" onClick={toggleDrawer}>Register</li>
          </ul>
          <div className="flex lg:hidden relative mt-6 justify-center">
            <i className="absolute left-2 top-2.5">
              <ICONS.SEARCH />
            </i>
            <input
              className="border-2 border-black pl-8 pr-2 py-1 w-96 rounded-md"
              placeholder="search here.."
              onClick={(e) => {
                e.stopPropagation()
              }}
            />
          </div>
        </div>
      </aside>
      <Cart toggleCartDrawer={toggleCartDrawer} isCartOpen={isCartOpen} />
    </>
  );
};

export default Navbar;
