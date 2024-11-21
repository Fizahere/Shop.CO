import React from "react";
import mainCoverImage from "../assets/images/mainImage.jpg";
import Card from "../components/Mist/Card";
import { div } from "framer-motion/client";

const Home = () => {
  return (
    <>
      <div className="mt-16 md:relative">
        <div className="sm:px-24 md:px-28 px-4 py-14 md:absolute md:text-white">
          <div>
            <p className="text-5xl md:text-6xl font-bold">FIND CLOTHES</p>
            <p className="text-5xl md:text-6xl font-bold">THAT MATCHES</p>
            <p className="text-5xl md:text-6xl font-bold">YOUR STYLE</p>
          </div>
          <div className="text-gray-500 mt-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elitlabora</p>
            <p>Lorem ipsum dolor sit amet consectetur adipis.</p>
          </div>
          <button className="bg-black px-20 py-2 text-white font-bold rounded-xl mt-4 w-full sm:w-60">
            explore
          </button>
          <ul className="flex justify-between mt-4">
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
        <img src={mainCoverImage} className="h-screen bg-cover" />
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

      <div className="p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(9)].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </>
  );
};

export default Home;
