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
                ...state,
                movies:action.payload
            }
        default:
            return state;
    }
}

export default movielistReducer;