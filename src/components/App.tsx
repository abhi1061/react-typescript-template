import { ThemeProvider } from 'styled-components'

import { Movies } from '@app/containers/movies'
import { theme } from './theme'
import './App.css'

function App() {
	return (
		<ThemeProvider theme={theme.light}>
			<Movies />
		</ThemeProvider>
	)
}

export default App
