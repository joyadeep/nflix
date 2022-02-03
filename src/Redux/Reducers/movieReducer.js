const initialState={
    movies:[]
}

const movieReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case "GET_MOVIES":
            return {
                ...state,
                movies:action.movielist
            }
        default:
            return state;
    }
}

export default movieReducer;