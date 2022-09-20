import { createSelector } from 'reselect'

const selectCounterReducer = (state) => state.counter

// export const selectCount = (state) => state.counter.count
export const selectCount = createSelector(
	[selectCounterReducer],
	(counter) => counter.count,
)

export const selectHistory = createSelector(
	[selectCounterReducer],
	(counter) => counter.history,
)
