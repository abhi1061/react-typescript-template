import { SEARCH_MOVIES_SUCCESS } from '@app/store/actions/types'
import { AnyAction } from 'redux'
import { INITIAL_STATE } from './default'

export const MovieReducer = (state = INITIAL_STATE, action: AnyAction) => {
	switch (action.type) {
		case SEARCH_MOVIES_SUCCESS:
			return {
				...state,
				movies: [...state.movies, ...action.payload.movies],
			}
		default:
			return state
	}
}
