import React from 'react';
import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom';
export const Header = () => {
  return <>
    <div className='bg-indigo-300 h-20 flex justify-between items-center'>
        <Link to="/"><div className='text-5xl text-white pl-3'>N<span className='text-[20px] text-slate-200'>flix</span></div></Link>
        <div>
            <input className='pl-4 text-2xl rounded-l-full w-80 h-11 outline-none text-black ' type="text" placeholder='Search here...' />
            <button className='bg-gray-500  text-white text-xl h-11 w-16  rounded-r-full pl-5 hover:bg-gray-800 active:bg-gray-600' type="submit"><FaSearch/></button>
            
        </div>
        <div className='px-2'>
            <input className='bg-green-700 cursor-pointer text-white  h-10 px-1 text-xl rounded-md font-medium hover:bg-green-800 active:bg-green-600' type="button" value="Login" />
        </div>
    </div>
  </>;
};
