import React from "react";
import mainCoverImage from "../assets/images/mainImage.jpeg";
import Card from "../components/Mist/Card";
import { ICONS } from "../assets/icons";
import styleImage1 from '../assets/images/styleImage1.png'
import styleImage2 from '../assets/images/styleImage2.png'
import styleImage3 from '../assets/images/styleImage3.png'
import styleImage4 from '../assets/images/styleImage4.png'
import { div } from "framer-motion/client";

const Home = () => {
  return (
    <>
      <div className="mt-16 flex flex-col md:flex-row bg-[#F0F0F0]">
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
          <ICONS.SPARKLE fontSize={35} fill="black" className="mt-52 ml-10 sm:ml-1" />
          <img src={mainCoverImage} className="h-[40rem]" />
          <ICONS.SPARKLE fontSize={60} fill="black" className="mt-20" />
        </div>
      </div>
      <div class="bg-black text-white py-9 px-7 flex flex-wrap justify-center">
        <ul class="flex flex-wrap gap-5 lg:gap-28 justify-center md:justify-between">
          <li class="flex-[1_1_30%] md:flex-[1_1_auto] text-2xl font-bold text-center">
            VERSACE
          </li>
          <li class="flex-[1_1_30%] md:flex-[1_1_auto] text-2xl font-bold text-center">
            ZARA
          </li>
          <li class="flex-[1_1_30%] md:flex-[1_1_auto] text-2xl font-bold text-center">
            GUCCI
          </li>
          <li class="flex-[1_1_20%] md:flex-[1_1_auto] text-2xl font-bold text-center">
            PRADA
          </li>
          <li class="flex-[1_1_30%] md:flex-[1_1_auto] text-2xl font-bold text-center">
            Calvin Klein
          </li>
        </ul>
      </div>
      <div>
        <p className="text-center font-extrabold text-3xl py-4 mt-8">
          NEW ARRIVALS
        </p>
        <div className="sm:px-24 md:px-28 px-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[...Array(4)].map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
      <div>
        <p className="text-center font-extrabold text-3xl py-4 mt-4">
          TOP SELLING
        </p>
        <div className="sm:px-24 md:px-28 px-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[...Array(4)].map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>

      <div className="bg-[#F0F0F0] m-10 sm:px-4 md:px-10 py-10 px-2 sm:mx-24 md:mx-28 mx-4 rounded-3xl">
        <p className="text-3xl font-extrabold text-center py-6">
          BROWSE BY STYLE
        </p>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="relative w-auto md:w-2/3 h-60 md:mr-4">
            <img src={styleImage4} className="rounded-3xl h-full w-full object-cover transform scale-x-[-1]" alt="Style Image" />
            <p className="absolute left-2 top-2 font-bold text-2xl text-black">Casual</p>
          </div>
          <div className="relative w-auto md:w-2/5 h-60 md:mr-4">
            <img src={styleImage3} className="rounded-3xl h-full w-full object-cover" alt="Style Image" />
            <p className="absolute left-2 top-2 font-bold text-2xl text-black">Formal</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row h-64">
          <div className="relative w-auto md:w-2/5 h-60 md:mr-4">
            <img src={styleImage2} className="rounded-3xl h-full w-full object-cover" alt="Style Image" />
            <p className="absolute left-2 top-2 font-bold text-2xl text-black">Party</p>
          </div>
          <div className="relative w-auto md:w-2/3 h-60 md:mr-4">
            <img src={styleImage1} className="rounded-3xl h-full w-full object-cover" alt="Style Image" />
            <p className="absolute left-2 top-2 font-bold text-2xl text-black">Gym</p>
          </div>
        </div>
      </div>

      <div className="sm:px-24 md:px-28 px-4">
        <p className="font-extrabold text-3xl">OUR HAPPY CUSTOMERS</p>
        <div className="flex">
        {[...Array(3)].map((_,index)=>(
<div className="bg-white border-2 border-gray-300 p-10">

</div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Home;
