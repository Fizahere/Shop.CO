import React, { useState } from 'react';
import image from '../assets/images/productImage.png';
import { ICONS } from '../assets/icons';
import Ratings from './Ratings';

const ProductDetail = () => {
    const [count, setCount] = useState(1);
    const [tab, setTab] = useState('ProductDetail')


    return (
        <div className='mt-10 sm:px-24 md:px-32 px-3 py-14'>
            <div className="flex flex-col lg:flex-row">
                <div className='flex flex-col-reverse lg:flex-row'>
                    <div className="flex lg:flex-col">
                        {[...Array(3)].map((_, index) => (
                            <img key={index} src={image} alt='product image' className='mt-2 lg:mt-0 ml-2 lg:ml-0 h-24 w-32 md:h-44 md:w-44 mb-2 rounded-2xl cursor-pointer active:border-2 border-black' />
                        ))}
                    </div>
                    <img src={image} alt="product image" className='h-72 w-full md:h-[34rem] md:w-[34rem] md:ml-2 rounded-2xl' />
                </div>
                <div className='ml-4 space-y-3 md:space-y-4 mt-4 md:mt-8 lg:mt-0'>
                    <p className='text-2xl font-bold md:text-4xl md:font-extrabold'>Black T-shirt, available in all sizes</p>
                    <i className='flex items-center'>
                        {[...Array(5)].map((_, index) => (
                            <ICONS.FIILEDSTAR key={index} className='text-yellow-400 ml-1' />
                        ))}
                        <p className='ml-4'>5/5</p>
                    </i>
                    <div className="flex space-x-4">
                        <p className='text-2xl text-xl'>$260</p>
                        <p className='text-2xl text-xl text-zinc-400 line-through'>$300</p>
                        <p className='text-red-600 bg-red-100 rounded-full px-3 py-1 text-sm md:text-md'>-40%</p>
                    </div>
                    <p className='text-zinc-500 min-w-72 md:text-md text-sm md:w-[32rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quisquam facere corrupti quasi dolore alias deserunt distinctio sit vero ratione!</p>
                    <div className='border-y-2 py-6 sm:w-full'>
                        <p className='text-zinc-500'>Select Color</p>
                        <div className='flex space-x-4 mt-4'>
                            {['bg-black', 'bg-pink-500', 'bg-red-800'].map((_, index) => (
                                <div className={`${_} p-6 rounded-full w-1 cursor-pointer`}></div>
                            ))}
                        </div>
                    </div>
                    <div className='border-b-2 py-4 sm:w-full'>
                        <p className='text-zinc-500'>Select Size</p>
                        <div className='flex space-x-2 md:space-x-4 mt-4'>
                            {['Small', 'Medium', 'Large', 'X-Large'].map((_, index) => (
                                <p className={`cursor-pointer text-xs md:text-md p-3 rounded-full text-zinc-600 bg-zinc-200 text-center active:bg-black active:text-white`}>{_}</p>
                            ))}
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='bg-zinc-200 rounded-full w-56 flex justify-center items-center space-x-6 mr-2'>
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
                        <button className='bg-black text-white font-light rounded-full py-3 w-full'>Add to Cart</button>
                    </div>
                </div>
            </div>
            {/* second secyion */}
            <div className='mt-10'>
                <div className="flex justify-around">
                    <p
                        onClick={() => {
                            if (tab === 'ProductDetail') {
                                return
                            }
                            setTab('ProductDetail')
                        }}
                        className={`cursor-pointer text-sm md:text-lg ${tab === 'ProductDetail' ? 'text-black' : 'text-zinc-500'} ${tab === 'ProductDetail' ? 'border-b-2' : 'border-none'} border-black p-2`}>
                        Product Details
                    </p>
                    <p
                        onClick={() => {
                            if (tab === 'Ratings') {
                                return
                            }
                            setTab('Ratings')
                        }}
                        className={`cursor-pointer text-sm md:text-lg ${tab === 'Ratings' ? 'text-black' : 'text-zinc-500'} ${tab === 'Ratings' ? 'border-b-2' : 'border-none'} border-black p-2`}>
                        Ratings & Reviews
                    </p>
                    <p
                        onClick={() => {
                            if (tab === 'Faqs') {
                                return
                            }
                            setTab('Faqs')
                        }}
                        className={`cursor-pointer text-sm md:text-lg ${tab === 'Faqs' ? 'text-black' : 'text-zinc-500'} ${tab === 'Faqs' ? 'border-b-2' : 'border-none'} border-black p-2`}>
                        FAQs
                    </p>
                </div>
                <Ratings/>
            </div>
        </div>
    )
}

export default ProductDetail
