import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import moviesActions from '@app/store/actions/movies'

export const Movies = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(moviesActions.searchMovies({ arg: 'The Reverant' }))
	}, [dispatch])
	return (
		<>
			<>search bar</>
			<br />
			<>list</>
		</>
	)
}
