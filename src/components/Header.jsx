import React from 'react';
import {Link} from 'react-router-dom';
export const Header = () => {
  return <>
    <div className='bg-gradient-to-r from-gray-700 to-blue-400 relative h-16 flex justify-between items-center z-40'>
        <Link to="/nflix"><div className='text-6xl font-semibold text-white pl-3'>N<span className='text-[20px] font-normal '>flix</span></div></Link>
 
        <div className='px-2'>
            <input className='bg-green-700 cursor-pointer text-white  h-10 px-1 text-xl rounded-md font-medium hover:bg-green-800 active:bg-green-600' type="button" value="Login" />
        </div>
    </div>
  </>;
};
