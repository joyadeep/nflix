import axios from "axios";

export const set_movies=()=>{
    return async(dispatch)=>{
        const response=await axios.get(`http://www.omdbapi.com/?apikey=2f081ebc&s="and"&type="movie"`);
        dispatch({
            type:"SET_MOVIES",
            payload:response.data.Search
        });
    }
}

export const get_movie=(id)=>{
    return async(dispatch)=>{
        const movie=await axios.get(`http://www.omdbapi.com/?apikey=2f081ebc&i=${id}`);
        dispatch({
            type:"GET_MOVIE",
            payload:movie
        })
    }
}

export const cleanup=()=>{
    return {
        type:"CLEANUP"
    }
}