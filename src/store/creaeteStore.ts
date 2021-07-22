import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'

import rootSagas from '@app/store/sagas'
import reducers from '@app/store/reducers'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = configureStore({
	reducer: reducers,
	middleware: [...middlewares],
})

sagaMiddleware.run(rootSagas)

export default store
