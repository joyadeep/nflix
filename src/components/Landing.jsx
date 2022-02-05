import React from 'react';
import {useDispatch} from 'react-redux';
import {search_movie,cleanup_list} from '../Redux/Action/action';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';


export const Landing = () => {
  const [tosearch,setTosearch]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const changeRoute=()=>{
        navigate("/movies")
    }
   
  return <>
    <div className='flex h-screen absolute top-0 w-screen  text-white items-center justify-center z-20  bg-hero object-cover'>
    <input type="text" value={tosearch} onChange={(e)=>{setTosearch(e.target.value)}}  placeholder="Search here..." className='pl-4 text-2xl rounded-md w-1/2 h-14 outline-none text-black'/>
    <button disabled={!tosearch}  type='submit' className='h-14 ml-3 bg-purple-500 px-4 rounded-md text-2xl hover:bg-purple-400' onClick={()=>{
        dispatch(cleanup_list());
        dispatch(search_movie(tosearch));
        changeRoute()
        
    }}>Search</button>
    </div>
  </>;
};
