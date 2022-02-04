import React from 'react';
import {useParams} from 'react-router-dom';
import {get_movie,cleanup} from "../Redux/Action/action";
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import {MdLocalMovies} from "react-icons/md";
import {AiFillStar} from 'react-icons/ai';
import {FaLanguage} from 'react-icons/fa';



export const Movie = () => {
const movie=useSelector((state)=>state.movieReducer.movie);
  const dispatch=useDispatch();
  const {id}=useParams();
  useEffect(()=>{
    dispatch(get_movie(id));   
    
    return ()=>{
      dispatch(cleanup());
    }
  },[dispatch,id])



return <>
{
  !movie?"<h1>loading</>":
  <div className='flex  shadow-md border shadow-black border-gray-900 w-3/4 h-fit mx-auto mt-10 rounded-xl overflow-hidden '>
      <div className='w-2/5  '>
        <img className='h-full w-full object-cover rounded-r-xl ' src={movie.Poster} alt="movie poster" />
      </div>
      <div className='w-3/5 h-fit pb-5   pl-5 pr-3 pt-2 text-white '>
        <p className='text-2xl mb-3'>{movie.Title}</p>
        <p className='text-xl  flex items-center w-full mb-3'>{movie.Released} |<span className=' mt-[5px]'>
           <MdLocalMovies/></span> {movie.Runtime} | <span className='mt-1 text-yellow-400'> <AiFillStar/> </span>  {movie.imdbRating} / 10 | {movie.Rated}</p>
          <p className='text-xl font-semibold'>Genre :<span className='font-normal'> {movie.Genre}</span></p>
          <p className='text-xl font-semibold'>Director : <span className='font-normal'> {movie.Director}</span></p>
          <p className='text-xl font-semibold'>Writer : <span className='font-normal'>{movie.Writer}</span></p>
          <p className='flex text-xl font-semibold'> <span className='text-4xl mr-2'><FaLanguage/> </span> : {movie.Language}</p>
          <p  className='text-xl font-semibold' >Actors : <span className='font-normal'>{movie.Actors}</span></p>
          <p  className='text-lg font-normal mt-3' >{movie.Plot}</p>

      </div>
  </div>
}

  </>;
};
