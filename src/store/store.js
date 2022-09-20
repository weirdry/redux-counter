import {
	compose,
	legacy_createStore as createStore,
	applyMiddleware,
} from 'redux'

import { rootReducer } from './root.reducer'

const middleWares = []

const composedEnhancer =
	(process.env.NODE_ENV !== 'production' &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEnhancers)
