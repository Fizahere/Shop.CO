import React from "react";
import productImage from "../../assets/images/productImage.png";
import { ICONS } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const { RoutesName = [] } = props;
  const navigate = useNavigate()

  const showDetailPage = (productId) => {
    navigate(RoutesName.DETAIL.replace(':product', productId));
  }
  return (
    <>
      <div className={`${RoutesName ? 'cursor-pointer' : 'cursor-auto'}`} onClick={() => showDetailPage('Black T-shirt')}>
        <img src={productImage} className="w-44 sm:w-52 md:w-72 h-36 sm:h-52 md:h-80 rounded-lg" alt="" />
        <div className="px-2 space-y-1">
          <p className="font-bold text-xs md:text-lg mt-2 w-32 md:w-48 md:w-72">
            Black T-shirt, available in all sizes
          </p>
          <span className="flex items-center text-xs md:text-md">
            {[...Array(5)].map((_, index) => (
              <i>
                <ICONS.FIILEDSTAR className="text-yellow-400 mr-0.5" />
              </i>
            ))}
            <p className="ml-2">4.5</p>
          </span>
          <p className="text-xs md:text-xl font-bold">$250</p>
        </div>
      </div>
    </>
  );
};

export default Card;
