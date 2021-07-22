import { combineReducers } from 'redux'
import { MovieReducer } from './movies/moviesReducer'

const reducers = combineReducers({
	movie: MovieReducer,
})

export default reducers
