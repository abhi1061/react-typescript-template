import React from 'react'
import { useDispatch } from 'react-redux'

import moviesActions from '@app/store/actions/movies'
import { SearchBarComponent } from '@app/components/searchBar'

export const Movies = () => {
	const dispatch = useDispatch()

	const searchMovie = (text: string) => {
		dispatch(moviesActions.searchMovies({ arg: text }))
	}

	return (
		<>
			<SearchBarComponent key="movieSearch" onChangeText={searchMovie} />
			<br />
			<>list</>
		</>
	)
}
