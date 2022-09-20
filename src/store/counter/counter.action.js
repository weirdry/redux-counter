import { COUNTER_ACTION_TYPES } from './counter.types'
import { createAction } from '../../utils/reducer/reducer.utils'

const saveCount = (history, count) => [...history, count]

const restoreCount = (history, index) => {
	const countToRestore = history[index]
	return countToRestore
}

export const increaseCount = (count) =>
	createAction(COUNTER_ACTION_TYPES.SET_COUNT, count + 1)

export const decreaseCount = (count) =>
	createAction(COUNTER_ACTION_TYPES.SET_COUNT, count - 1)

export const resetCount = () => createAction(COUNTER_ACTION_TYPES.SET_COUNT, 0)

export const saveCountToHistory = (history, count) => {
	const newHistory = saveCount(history, count)
	return createAction(COUNTER_ACTION_TYPES.SET_HISTORY, newHistory)
}

export const resetHistory = () =>
	createAction(COUNTER_ACTION_TYPES.SET_HISTORY, [])

export const restoreCountFromHistory = (history, index) => {
	const countToRestore = restoreCount(history, index)
	return createAction(COUNTER_ACTION_TYPES.SET_COUNT, countToRestore)
}
