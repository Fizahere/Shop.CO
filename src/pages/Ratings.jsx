import React from 'react'
import { ICONS } from '../assets/icons'

const Ratings = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between mt-4">
                <div className='flex items-center'>
                    <p className='font-bold md:text-2xl'>All Reviews </p>
                    <p className='text-zinc-500 ml-3 mt-1.5'>(451)</p>
                </div>
                <div className="flex justify-start md:justify-normal mt-2 md:mt-0 space-x-2">
                    <i className='bg-zinc-200 p-2 flex items-center justify-center rounded-full text-black'><ICONS.SETTING fontWeight={'bold'} fontSize={20} /></i>
                    <button className='px-6 md:py-2 bg-zinc-200 text-black rounded-full'>Latest</button>
                    <button className='px-6 md:py-2 text-xs md:text-md bg-black text-white md:font-light rounded-full'>Write a Review</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 mt-6">
                {[...Array(5)].map((_, index) => (
                    <div className='space-y-1 md:space-y-3 border-2 rounded-2xl p-6'>
                        <div className='flex justify-between'>
                            <i className='flex'>
                                {[...Array(5)].map((_, index) => (
                                    <ICONS.FIILEDSTAR key={index} className='text-yellow-400 mr-1' />
                                ))}
                            </i>
                            <i><ICONS.THREEDOTS className='text-lg md:text-xl text-zinc-700 cursor-pointer' /></i>
                        </div>
                        <div className="flex items-center text-lg md:text-xl">
                            <p className='font-bold'>
                                Samantha D.
                            </p>
                            <i><ICONS.VERIFIED className='text-green-600 ml-2' /></i>
                        </div>
                        <p className='text-zinc-500 text-xs md:text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro debitis quis rerum similique magni quod, inventore, vitae ducimus iste corrupti illum aspernatur. Nisi itaque eaque quidem possimus iste aperiam.
                        </p>
                        <p className='text-zinc-600 text-sm md:text-md'>Posted on August 14, 2023</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Ratings
