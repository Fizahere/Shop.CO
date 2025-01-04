import React, { useState } from 'react'
import productImage from "../assets/images/productImage.png";
import { ICONS } from '../assets/icons';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const [count, setCount] = useState(1);

    return (
        <div className='min-h-screen mt-10 sm:px-24 md:px-32 py-14 p-2'>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Link to={'/'}>Home</Link>
                <span>{'>'}</span>
                <p>Category</p>
                <span>{'>'}</span>
                <p>Cart</p>
            </div>
            <p className='text-2xl font-extrabold my-6'>YOUR CART</p>

            <div className="grid grid-cols-1 lg:grid-cols-12 sm:gap-4 sm:p-2">
                <div className="rounded-2xl sm:p-2 border-2 lg:col-span-8">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="border-b-2 p-2 flex space-x-2 sm:space-x-4">
                            <img src={productImage} className="h-32 w-32 rounded-lg mr-2" alt="" />
                            <div className='w-full space-y-1'>
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
                                <div className="flex flex-col sm:flex-row justify-between w-full">
                                    <p className='text-xl font-bold my-2'>$450</p>
                                    <div className='bg-zinc-200 my-2 rounded-full w-40 flex justify-center items-center space-x-6 mr-2'>
                                        <p className='text-4xl font-bold cursor-pointer -mt-1'
                                            onClick={() => {
                                                if (count === 1) {
                                                    setCount(1)
                                                    return
                                                }
                                                setCount(count - 1)
                                            }}
                                        >-</p>
                                        <p className='text-lg'>{count}</p>
                                        <p className='text-xl font-bold cursor-pointer -mt-1'
                                            onClick={() => setCount(count + 1)}
                                        >+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="rounded-lg border-2 p-4 lg:col-span-4 space-y-4">
                    <p className="text-xl font-bold mb-2">Order Summary</p>
                    <div className="flex justify-between">
                        <p className="text-zinc-500">Subtotal</p>
                        <p className="font-bold">$565</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-zinc-500">Discount (-20%)</p>
                        <p className="font-bold text-red-500">-$113</p>
                    </div>
                    <div className="flex justify-between border-b-2 pb-4">
                        <p className="text-zinc-500">Delicveryy Fee</p>
                        <p className="font-bold">$15</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-zinc-500">Total</p>
                        <p className="font-bold text-lg">$565</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between">
                        <div className="relative">
                            <i className='absolute left-2 top-3'><ICONS.CREDITCARD /></i>
                            <input type="text" className='bg-zinc-200 rounded-full pl-8 pr-4 py-2 w-full sm:w-72 mb-3 sm:mb-0' />
                        </div>
                        <button className="bg-black text-white rounded-full px-6 py-2">Apply</button>
                    </div>
                    <button className="bg-black text-white font-light active:font-normal w-full py-4 rounded-full space-x-2 flex justify-center items-center">
                        <p> Go to Checkout</p>
                        <ICONS.RIGHTARROW className='text-xl'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartPage
