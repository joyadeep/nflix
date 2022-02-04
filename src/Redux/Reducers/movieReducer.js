const initialState={
    movie:[]
}

const movieReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case "GET_MOVIE":
            return {
                ...state,
                movie:action.payload.data
            }
        case "CLEANUP":
            return {
                movie:[]
            }
        default:
            return state
    }

}

export default movieReducer;