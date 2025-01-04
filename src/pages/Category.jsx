import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '../components/Mist/Card'

const Category = ({RoutesName}) => {
    const { category } = useParams()
    return (
        <div className='min-h-screen mt-10 sm:px-24 md:px-32 px-4 py-14 bg-[#faf9f9]'>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Link to={'/'}>Home</Link>
                <span>{'>'}</span>
                <p>Category</p>
                <span>{'>'}</span>
                <p>{category.toUpperCase()}</p>
            </div>

            {/* second section */}
            <div className='flex flex-col md:flex-row mt-5'>
                <div className='border-2 md:w-1/4 rounded-xl px-5'>
                    <div className="flex border-b-2 py-5">
                        <p className='font-bold text-lg'>Filter</p>
                    </div>
                   <div className='border-b-2 py-5'>
                   {['T-shirts', 'Shorts', 'Shirt', 'Hoodie', 'Jeans'].map((_,i)=>(
                        <p className='text-zinc-500 mb-2 text-lg cursor-pointer'>{_}</p>
                    ))}
                   </div>
                   <div className='py-5 border-b-2'>
                    <p className='text-lg font-bold'>Price</p>
                   </div>
                   <div className='py-5 border-b-2'>
                    <p className='text-lg font-bold'>Colors</p>
                 <div className="grid grid-cols-5 gap-2 mt-4">
                 {['bg-red-500','bg-yellow-300','bg-green-500','bg-purple-500','bg-blue-400','bg-blue-700','bg-pink-500','bg-orange-400','bg-white','bg-black'].map((_,i)=>(
                        <div className={`${_} p-6 rounded-full border-2 cursor-pointer active:border-zinc-500`}></div>
                    ))}
                 </div>
                   </div>
                   <div className='py-5 border-b-2'>
                    <p className='text-lg font-bold'>Size</p>
                 <div className="grid grid-cols-2 gap-2 mt-4">
                 {['XX-Small','S-Small','Small','Medium','Large','X-Large','XX-Large','3X-Large','4X-Large'].map((_,i)=>(
                        <p className={`cursor-pointer p-3 rounded-full text-zinc-600 bg-zinc-200 text-center active:bg-black active:text-white`}>{_}</p>
                    ))}
                 </div>
                   </div>
                   <div className="flex border-b-2 py-5">
                        <p className='font-bold text-lg'>Dress Style</p>
                    </div>
                   <div className='border-b-2 py-5'>
                   {['Casual', 'Formal', 'Party', 'Gym', 'Classic'].map((_,i)=>(
                        <p className='text-zinc-500 mb-2 text-lg cursor-pointer'>{_}</p>
                    ))}
                   </div>
                   <button className='bg-black text-white rounded-full py-3 font-light w-full mb-7'>Apply Filter</button>
                </div>
                <div className='md:w-3/4 ml-5 border-b-2 pb-10'>
                    <div className="flex flex-col md:flex-row justify-between items-center mb-5">
                        <p className='text-2xl font-bold'>{category.toUpperCase()}</p>
                        <div className='mt-3 md:mt-0 flex space-x-4 text-sm md:text-md'>
                            <p>Shwoing 1-10 of 100 Products</p>
                            <div className='flex items-center text-sm md:text-md'>
                                <p>Sort by:</p>
                                <select className='font-semibold ml-1'>
                                    {['Most Popular', 'Price', 'Alphabet'].map((_, i) => (
                                        <option value={_} key={i}>{_}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[...Array(8)].map((_, index) => (
            <Card key={index} RoutesName={RoutesName}/>
          ))}
        </div>
                </div>
            </div>
        </div>
    )
}

export default Category
