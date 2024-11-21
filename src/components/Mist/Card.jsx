import React from "react";
import mainCoverImage from "../../assets/images/mainImage.jpg";
import { ICONS } from "../../assets/icons";

const Card = () => {
  return (
    <>
      <div>
        <img src={mainCoverImage} className="w-72 h-80 rounded-md" alt="" />
        <div className="px-2">
          <p className="font-bold text-lg mt-2 w-72">
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
          <p className="text-xl font-bold">$250</p>
        </div>
      </div>
    </>
  );
};

export default Card;
