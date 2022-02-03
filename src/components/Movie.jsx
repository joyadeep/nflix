import React from 'react';

export const Movie = () => {
  return <>
  <div className='flex  w-3/4 h-96 mx-auto mt-10 rounded-xl overflow-hidden '>
      <div className='w-2/5  '>
        <img className='h-full w-full object-cover ' src="https://images.pexels.com/photos/10418930/pexels-photo-10418930.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="movie poster" />
      </div>
      <div className='w-3/5 bg-neutral-700  pl-5 pr-3 pt-2 text-white '>
        <p className='text-2xl mb-3'>Harry Potter and the secret of chamber</p>
        <p className='text-xl'>released : 2011</p>
        <p>other stuffs here...</p>
      </div>
  </div>
  </>;
};
