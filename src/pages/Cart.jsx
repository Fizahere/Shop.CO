import React from 'react'
import productImage from "../assets/images/productImage.png";
import { ICONS } from "../assets/icons";


const Cart = ({isCartOpen,toggleCartDrawer}) => {
  return (
    <div>
        <aside
              className={`z-50 fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ${isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              onClick={toggleCartDrawer}
            >
              <div
                className={`fixed top-0 p-5 right-0 h-full w-96 bg-white text-black transition-transform transform ${isCartOpen ? "translate-x-0" : "translate-x-full"
                  }
                `}
              >
                <div className="flex justify-between items-center py-2 border-b border-gray-400">
                  <p className="text-3xl font-bold">Cart</p>
                  <ICONS.CLOSE fontSize={24} cursor={'pointer'} />
                </div>
                <div className="rounded-lg border-2 my-2">
                  {[...Array(3)].map((_,index)=>(
                    <div key={index} className="border-b-2 p-2 flex">
                    <img src={productImage} className="h-32 w-32 rounded-lg mr-2" alt="" />
                    <div>
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-bold">Black T-shirt</p>
                        <ICONS.TRASH fontSize={20} color="red" />
                      </div>
                      <div className="flex">
                        <p>Size:</p>
                        <p className="text-zinc-500 ml-2">Medium</p>
                      </div>
                      <div className="flex">
                        <p>Color:</p>
                        <p className="text-zinc-500 ml-2">Black</p>
                      </div>
                      <div className="flex">
                        <p>$145.0</p>
                        <div className="ml-10 border-2 rounded-full w-28 text-center">- 1 +</div>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
                <div className="rounded-lg border-2 my-2 p-4">
                  <p className="text-lg font-bold mb-2">Order Summary</p>
                  <div className="flex justify-between">
                    <p className="text-zinc-500">Subtotal</p>
                    <p className="font-bold">$565</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-zinc-500">Discount (-20%)</p>
                    <p className="font-bold text-red-500">-$113</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-zinc-500">Delicveryy Fee</p>
                    <p className="font-bold">$15</p>
                  </div>
                </div>
                <button className="w-full rounded-full bg-black text-white py-4 mt-2">Checkout</button>
              </div>
            </aside>
    </div>
  )
}

export default Cart
