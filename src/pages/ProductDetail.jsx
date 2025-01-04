import React, { useState } from 'react';
import image from '../assets/images/productImage.png';
import image1 from '../assets/images/productImage3.png';
import image2 from '../assets/images/productImage5.png';
import { ICONS } from '../assets/icons';
import Ratings from './Ratings';
import Card from '../components/Mist/Card';
import FAQ from './Faq';
import { p } from 'framer-motion/client';

const ProductDetail = () => {
    const [count, setCount] = useState(1);
    const [tab, setTab] = useState('ProductDetail')
    const [selectedImage, setSelectedImage] = useState(0)
    const images = [
        image,
        image1,
        image2,
    ]
    const handleImageClick = (index) => {
        setSelectedImage(index)
    }
    return (
        <div className='mt-10 sm:px-24 md:px-32 px-3 py-14'>
            <div className="flex flex-col lg:flex-row">
                <div className='flex flex-col-reverse lg:flex-row'>
                    <div className="flex lg:flex-col">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt='product image'
                                className={`mt-2 lg:mt-0 ml-2 lg:ml-0 h-24 w-32 md:h-44 md:w-44 mb-2 rounded-2xl cursor-pointer active:border-2 border-black ${images[index] === images[selectedImage] ? 'border-2' : 'border-none'}`}
                                onClick={() => handleImageClick(index)}
                            />
                        ))}
                    </div>
                    <img src={images[selectedImage]} alt="product image" className='h-72 w-full md:h-[34rem] md:w-[34rem] md:ml-2 rounded-2xl' />
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
                            {['bg-black', 'bg-orange-600', 'bg-gradient-to-r to-orange-500 from-black'].map((_, index) => (
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
                        <button className='bg-black text-white font-light active:font-normal rounded-full py-3 w-full'>Add to Cart</button>
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
                {tab === 'Ratings' ?
                    <Ratings />
                    : tab === 'Faqs' ? <FAQ /> :
                        <p className='text-center mt-10 text-lg'>Product details page</p>
                }
            </div>
            <p className='text-2xl md:text-5xl font-bold md:font-extrabold text-center mt-10 md:mt-20'>YOU MIGHT ALSO LIKE</p>
            <div className="flex overflow-auto space-x-2 mt-5 md:mt-10">
                {[...Array(5)].map((_, index) => (
                    <Card key={index} />
                ))}
            </div>
        </div>
    )
}

export default ProductDetail
