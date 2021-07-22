import { Movie } from '@app/store/reducers/movies/default'
import { SEARCH_MOVIES, SEARCH_MOVIES_SUCCESS } from '../types'

const searchMovies = (payload: { arg: string }) => ({
	type: SEARCH_MOVIES,
	payload,
})

const searchMoviesSuccess = (payload: { movies?: Movie[] }) => ({
	type: SEARCH_MOVIES_SUCCESS,
	payload,
})

const moviesActions = {
	searchMovies,
	searchMoviesSuccess,
}

export default moviesActions
