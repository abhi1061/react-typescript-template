import { put } from 'redux-saga/effects'
import moviesActions from '@app/store/actions/movies'
import { Movie } from '@app/store/reducers/movies/default'

export function* searchMovies({
	payload: { arg },
}: ReturnType<typeof moviesActions.searchMovies>) {
	const movie: Movie = {
		title: arg,
		releasDate: '2015',
		availablePlatforms: ['HBO max'],
		casts: ['Leonardo DiCaprio', 'Tom Hardy'],
	}
	yield put(moviesActions.searchMoviesSuccess({ movies: [movie] }))
}
