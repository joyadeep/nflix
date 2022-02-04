import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {set_movies} from '../Redux/Action/action';
import {useSelector,useDispatch} from 'react-redux';
export const Movielist = () => {

    const movies=useSelector((state)=>state.movielistReducer.movies);
 
    const dispatch=useDispatch();
    
    useEffect(()=>{
       dispatch(set_movies());
    },[dispatch])

  return <>
    
   

<div className=' w-11/12 h-auto mx-auto mt-10 text-white grid grid-cols-5 gap-x-3 gap-y-5'>
    {/* card */}
   

    {
        movies.length===0?"loading":
        

        movies.map((item)=>{
            return (
                <div key={item.imdbID} className='bg-blue-400 h-fit pb-3 cursor-pointer rounded-lg overflow-hidden hover:scale-110 transition ease-in-out hover:transition'>
                <Link to={`/movie/${item.imdbID}`} >
                   <img className='h-2/3 w-full object-cover' src={item.Poster} alt="potrait of person" />
                   <p className='px-2 text-lg font-semibold'>{item.Title}</p>
                   <p className='px-2 font-medium text-sm'>{item.Year}</p>
                   
                </Link>
             </div>
           
            )
        })
    
    }



</div>
  </>;
};

