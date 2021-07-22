import { takeLatest } from '@redux-saga/core/effects'

import { SEARCH_MOVIES } from '@app/store/actions/types'
import { searchMovies } from '@app/store/sagas/movies/searchMovies'

export default function* rootSagas() {
	yield takeLatest(SEARCH_MOVIES, searchMovies)
}
