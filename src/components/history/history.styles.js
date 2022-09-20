import styled from 'styled-components'

export const HistoryContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	margin: 0;

	.history-list {
		list-style: none;
		padding: 0;

		li {
			margin: 0.5rem 0;
			padding: 0.25rem;
			padding-left: 1rem;
			font-weight: 600;

			background-color: lightgray;
			border-radius: 2rem;
		}

		li:before {
			content: '# ' counter(list-item) '.';
			color: #fff;
			margin-inline-end: 0.5rem;
		}

		.restore-button {
			all: unset;
			margin-left: 1rem;
			background-color: white;
			padding: 0.25rem 0.75rem;

			border-radius: 1rem;

			font-size: 0.75rem;
			color: #a1a1a1;
			font-weight: 400;

			cursor: pointer;

			&:hover {
				color: #b1b1b1;
			}
			&:active {
				background-color: #999999;
				color: lightgray;
			}
		}
	}
`
