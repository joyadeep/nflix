const initialState={
    movies:[]
}

const movielistReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case "GET_MOVIES":
            return {
                ...state,
                movies:action.movielist
            }

        case "SET_MOVIES":
            return {
                ...state
            }
        case "SEARCH_MOVIE":
            return{
                ...state,
                movies:action.payload
            }
        case "CLEANUP_LIST":
            return {
                movies:[]
            }
        default:
            return state;
    }
}


export default movielistReducer;