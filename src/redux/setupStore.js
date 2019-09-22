import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

import reducers from '../reducers'

export default function setupStore(initialState = {}) {
  let middlewares = []

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({ collapsed: true })
    middlewares.push(logger)
  }
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares)
  )

  sagaMiddleware.run(rootSaga)

  return store
}
