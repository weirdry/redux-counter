import { COUNTER_ACTION_TYPES } from './counter.types'

const INITIAL_STATE = {
	count: 0,
	history: [],
}

export const counterReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action

	switch (type) {
		case COUNTER_ACTION_TYPES.SET_COUNT:
			return {
				...state,
				count: payload,
			}
		case COUNTER_ACTION_TYPES.SET_HISTORY:
			return {
				...state,
				history: payload,
			}
		default:
			return state
	}
}
