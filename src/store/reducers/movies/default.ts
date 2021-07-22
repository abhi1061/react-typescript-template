export type Movie = {
	title: string
	releasDate: string
	availablePlatforms?: string[]
	casts?: string[]
	ratings?: {
		imdb: string
		rottenTomattos: string
	}
}

type initialState = {
	movies: Movie[]
}

export const INITIAL_STATE: initialState = {
	movies: [],
}
