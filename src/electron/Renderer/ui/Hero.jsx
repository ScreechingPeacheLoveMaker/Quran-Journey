import React,{useState} from 'react';

const Hero = ({searchTerm,onSearchChange}) => {
    
    const handleSearch = (e) => {
        e.preventDefault();
    }

    return (
        <div className='flex items-center justify-center min-h-screen from-green-400 to-blue-500 bg-gradient-to-r text-white w-full'>
            <div className='text-center'>
                <h1 className='text-7xl font-bold mb-12 underline'>Quran Journal</h1>
                <p className='mb-4'>Quran Journal enable you write your islamic journey with your favourite surah</p>
            <form onSubmit={handleSearch} className='flex items-center justify-center'>
                
                <input type="text" className='px-4 py-2 w-72 rounded-2xl  focus:outline-none bg-white opacity-85 text-gray-800' placeholder='Enter surah name'
                value={searchTerm} onChange={(e)=> onSearchChange(e.target.value)}/>
                
                <button type='submit' className='my-3 mx-3 px-6 py-2 rounded-2xl font-semibold bg-black hover:scale-110 hover:bg-white hover:text-black hover:font-semibold cursor-pointer'>Search</button>
    
            </form>
            </div>
        </div>
    )
}

export default Hero;