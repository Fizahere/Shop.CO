import React from "react";
import mainCoverImage from "../assets/images/mainImage.jpg";
import Card from "../components/Mist/Card";

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
          <button className="bg-black px-20 py-2 text-white rounded-xl mt-4 w-full sm:w-60">
            Shop Now
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
<div>
  <p className="text-center font-extrabold text-3xl py-4 mt-8">NEW ARRIVALS</p>
      <div className="p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
      </div>
      <div>
  <p className="text-center font-extrabold text-3xl py-4 mt-4">TOP SELLING</p>
      <div className="p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
      </div>

      <div className="bg-pink-300 m-10 p-6 rounded-3xl">
<p className="text-3xl font-extrabold text-center py-6">BROWSE BY STYLE</p>
<div className="flex p-4">
<div className="relative w-2/3 mr-4">
  <p className="absolute left-2 top-2 font-bold text-2xl">Casual</p>
  <img src={mainCoverImage} className="h-72 rounded-3xl" alt="" />
</div>
<div className="relative">
  <p className="absolute left-2 top-2 font-bold text-2xl">Formal</p>
  <img src={mainCoverImage} className="h-72 rounded-3xl" alt="" />
</div>
</div>
<div className="flex">
<div className="relative">
  <p className="absolute left-2 top-2 font-bold text-2xl">Party</p>
  <img src={mainCoverImage} className="h-72 rounded-3xl" alt="" />
</div>
<div className="relative w-2/3 ml-4">
  <p className="absolute left-2 top-2 font-bold text-2xl">Gym</p>
  <img src={mainCoverImage} className="h-72 rounded-3xl" alt="" />
</div>
</div>
      </div>
    </>
  );
};

export default Home;
