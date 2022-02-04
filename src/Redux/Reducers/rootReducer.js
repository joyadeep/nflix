import {combineReducers} from 'redux';
import movielistReducer from './movielistReducer';
import movieReducer from './movieReducer';
const rootReducer= combineReducers({
    movieReducer,
    movielistReducer
})

export default rootReducer;