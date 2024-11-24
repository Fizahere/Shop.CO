import React from "react";
import mainCoverImage from "../assets/images/mainImage.jpeg";
import Card from "../components/Mist/Card";
import { ICONS } from "../assets/icons";
import styleImage1 from '../assets/images/styleImage1.png'
import styleImage2 from '../assets/images/styleImage2.png'
import styleImage3 from '../assets/images/styleImage3.png'
import styleImage4 from '../assets/images/styleImage4.png'

const Home = () => {
  return (
    <>
      <div className="mt-16 flex md:justify-around flex-col md:flex-row bg-[#F0F0F0]">
        <div className="sm:px-24 md:px-28 px-4 py-14 text-black">
          <div>
            <div>
              <p className="text-5xl md:text-6xl font-bold">FIND CLOTHES</p>
              <p className="text-5xl md:text-6xl font-bold">THAT MATCHES</p>
              <p className="text-5xl md:text-6xl font-bold">YOUR STYLE</p>
            </div>
            <div className="text-[#00000099] mt-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elitlabora</p>
              <p>Lorem ipsum dolor sit amet consectetur adipis.</p>
            </div>
            <button className="bg-black px-20 py-2 text-white rounded-xl mt-4 w-full sm:w-60">
              Shop Now
            </button>
            <ul className="flex justify-between mt-8">
              <li>
                <p className="text-2xl font-bold">200+</p>
                <p className="text-gray-500">categories we have</p>
              </li>
              <li className="hidden sm:flex flex-col">
                <p className="text-2xl font-bold">2,000+</p>
                <p className="text-gray-500">products we have</p>
              </li>
              <li>
                <p className="text-2xl font-bold">30,000+</p>
                <p className="text-gray-500">satisfied clients</p>
              </li>
            </ul>
            <div className="flex sm:hidden justify-center">
              <li className="list-none flex flex-col mt-2">
                <p className="text-2xl font-bold">30,000+</p>
                <p className="text-gray-500">satisfied clients</p>
              </li>
            </div>
          </div>
        </div>
        <div className="flex">
          <ICONS.SPARKLE fontSize={35} fill="black" className="mt-52 ml-6 sm:ml-1" />
          <img src={mainCoverImage} className="h-[30rem] md:h-[40rem]" />
          <ICONS.SPARKLE fontSize={60} fill="black" className="mt-20" />
        </div>
      </div>
      <div className="bg-black text-white py-9 px-7 flex flex-wrap justify-center">
        <ul className="flex flex-wrap gap-5 lg:gap-28 justify-center md:justify-between">
          <li className="flex-[1_1_30%] md:flex-[1_1_auto] text-2xl font-bold text-center tracking-widest font-normal">
            VERSACE
          </li>
          <li className="flex-[1_1_30%] md:flex-[1_1_auto] text-2xl font-bold text-center font-serif">
            ZARA
          </li>
          <li className="flex-[1_1_30%] md:flex-[1_1_auto] text-2xl font-bold text-center font-serif">
            GUCCI
          </li>
          <li className="flex-[1_1_20%] md:flex-[1_1_auto] text-2xl font-bold text-center font-serif">
            PRADA
          </li>
          <li className="flex-[1_1_30%] md:flex-[1_1_auto] text-2xl font-bold text-center font-thin">
            Calvin Klein
          </li>
        </ul>
      </div>
      <div>
        <p className="text-center font-extrabold text-3xl py-4 my-6">
          NEW ARRIVALS
        </p>
        <div className="sm:px-24 md:px-28 px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ml-2 md:ml-36">
          {[...Array(4)].map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
      <div>
        <p className="text-center font-extrabold text-3xl py-4 my-6">
          TOP SELLING
        </p>
        <div className="sm:px-24 md:px-28 px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ml-2 md:ml-36">
          {[...Array(4)].map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>

      <div className="bg-[#F0F0F0] m-10 sm:px-4 md:px-10 py-10 px-2 sm:mx-24 md:mx-28 mx-4 rounded-3xl">
        <p className="text-3xl md:text-5xl font-extrabold text-center pb-8">
          BROWSE BY DRESS STYLE
        </p>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="relative w-auto md:w-2/3 h-60 md:mr-4">
            <img src={styleImage1} className="rounded-3xl h-full w-full object-cover transform scale-x-[-1]" alt="Style Image" />
            <p className="absolute left-2 top-2 font-bold text-2xl text-black">Casual</p>
          </div>
          <div className="relative w-auto mt-4 md:mt-1 md:w-2/5 h-60 md:mr-4">
            <img src={styleImage2} className="rounded-3xl h-full w-full object-cover transform scale-x-[-1]" alt="Style Image" />
            <p className="absolute left-2 top-2 font-bold text-2xl text-black">Formal</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="relative w-auto md:w-2/5 h-60 md:mr-4">
            <img src={styleImage3} className="rounded-3xl h-full w-full object-cover" alt="Style Image" />
            <p className="absolute left-2 top-2 font-bold text-2xl text-black">Party</p>
          </div>
          <div className="relative w-auto mt-4 md:mt-1 md:w-2/3 h-60 md:mr-4">
            <img src={styleImage4} className="rounded-3xl h-full w-full object-cover" alt="Style Image" />
            <p className="absolute left-2 top-2 font-bold text-2xl text-black">Gym</p>
          </div>
        </div>
      </div>

      <div className="sm:px-24 md:px-28 px-4 md:ml-0">
        <p className="font-extrabold text-3xl">OUR HAPPY CUSTOMERS</p>
        <div className="flex justify-between mt-6 flex-col lg:flex-row">
          {[...Array(4)].map((_, index) => (
            <div className="bg-white border-2 border-gray-300 p-6 w-80 md:w-96 rounded-lg mb-2 md:mb-0">
              <i className="flex">
                {[...Array(5)].map((_, index) => (
                  <ICONS.FIILEDSTAR color="orange" />
                ))}
              </i>
              <p className="font-bold text-black mt-4">Fiza.</p>
              <p className="text-[#00000099] mt-1">"Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Commodi, neque.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, neque."</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
