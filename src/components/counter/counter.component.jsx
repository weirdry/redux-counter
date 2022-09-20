import { useSelector, useDispatch } from 'react-redux'

import {
	selectCount,
	selectHistory,
} from '../../store/counter/counter.selector'
import {
	increaseCount,
	decreaseCount,
	resetCount,
	saveCountToHistory,
} from '../../store/counter/counter.action'

import { Button } from 'cloz-ui'

import { CounterContainer } from './counter.styles'

export default function Counter() {
	const dispatch = useDispatch()

	const count = useSelector(selectCount)
	const history = useSelector(selectHistory)

	const handleIncrease = () => dispatch(increaseCount(count))
	const handleDecrease = () => dispatch(decreaseCount(count))
	const handleReset = () => dispatch(resetCount())
	const handleSave = () => dispatch(saveCountToHistory(history, count))

	return (
		<CounterContainer>
			<div className="counter-low">
				<Button text="-" onClick={handleDecrease} />
				<h2>
					<span className="counter-display">{count}</span>
				</h2>
				<Button text="+" onClick={handleIncrease} />
			</div>

			<br />

			<div className="counter-low">
				<Button shape="outlined" text="RESET" onClick={handleReset} />
				<Button shape="outlined" text="SAVE" onClick={handleSave} />
			</div>
		</CounterContainer>
	)
}
