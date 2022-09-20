import { useSelector, useDispatch } from 'react-redux'

import { selectHistory } from '../../store/counter/counter.selector'
import {
	resetHistory,
	restoreCountFromHistory,
} from '../../store/counter/counter.action'

import { Button } from 'cloz-ui'

import { HistoryContainer } from './history.styles.js'

export default function History() {
	const dispatch = useDispatch()

	const history = useSelector(selectHistory)

	const handleDeleteHistory = () => dispatch(resetHistory())
	const handleRestore = (index) =>
		dispatch(restoreCountFromHistory(history, index))

	return (
		<HistoryContainer>
			<ul className="history-list" type="">
				{history.map((count, index) => (
					<li key={index}>
						{count}
						<button
							className="restore-button"
							onClick={() => handleRestore(index)}
						>
							RESTORE
						</button>
					</li>
				))}
			</ul>
			<Button
				hierarchy="secondary"
				text="DELETE HISTORY"
				onClick={handleDeleteHistory}
			/>
		</HistoryContainer>
	)
}
