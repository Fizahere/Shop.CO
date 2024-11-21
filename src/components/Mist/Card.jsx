import React from "react";
import productImage from "../../assets/images/productImage.png";
import { ICONS } from "../../assets/icons";

const Card = () => {
  return (
    <>
      <div>
        <img src={productImage} className="w-44 sm:w-52 md:w-72 h-48 sm:h-52 md:h-80 rounded-md" alt="" />
        <div className="px-2">
          <p className="font-bold text-md md:text-lg mt-2 w-44 sm:w-52 md:w-72">
            Black T-Shirt, available in all sizes
          </p>
          <span className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <i>
                <ICONS.FIILEDSTAR color="orange" />
              </i>
            ))}
            <p className="ml-2">4.5</p>
          </span>
          <p className="text-sm md:text-xl font-bold">$250</p>
        </div>
      </div>
    </>
  );
};

export default Card;
