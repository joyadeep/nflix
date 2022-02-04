import React, { useRef } from 'react';
import {useDispatch} from 'react-redux';
import {search_movie,cleanup_list} from '../Redux/Action/action';
import {useNavigate} from 'react-router-dom';

export const Landing = () => {
    const tosearch=useRef();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const changeRoute=()=>{
        navigate("/movies")
    }
  return <>
    <div className='flex h-screen absolute top-0 w-screen  text-white items-center justify-center z-20  bg-hero'>
    <input type="text" ref={tosearch} placeholder="Search here..." className='pl-4 text-2xl rounded-md w-1/2 h-14 outline-none text-black'/>
    <button type='submit' className='h-14 ml-3 bg-purple-500 px-4 rounded-md text-2xl hover:bg-purple-400' onClick={()=>{
        dispatch(cleanup_list());
        dispatch(search_movie(tosearch.current.value));
        changeRoute();
    }}>Search</button>
    </div>
  </>;
};
