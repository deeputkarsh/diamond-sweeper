import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'

import appState from './app_actions'

const rootReducer = combineReducers({
  appState
})
let middleware = ''
if (process.env.NODE_ENV === 'production') {
  middleware = applyMiddleware(promiseMiddleware, thunk)
} else {
  middleware = applyMiddleware(promiseMiddleware, thunk, createLogger())
}
export const store = createStore(rootReducer, {}, middleware)
