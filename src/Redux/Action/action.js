import axios from "axios";

export const set_movies=()=>{
    return {
        type: "SET_MOVIES"
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

export const cleanup_list=()=>{
    return {
        type: "CLEANUP_LIST"
    }
}

export const search_movie=(tosearch)=>{
    return async(dispatch)=>{
        const movies=await axios.get(`http://www.omdbapi.com/?apikey=2f081ebc&s=${tosearch}`).catch((err)=>{console.log("error : ",err)}) ;
        // console.log(movies)
        dispatch({
            type:"SEARCH_MOVIE",
            payload:movies.data.Search
        })
    }
}
