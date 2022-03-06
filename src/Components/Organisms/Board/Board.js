import React from 'react'

import { CardSlot, Container, Row } from './Board.styles'

// f m m m m m
// g s s s s s d

export function Board() {
	return (
		<Container>
			<Row>
				<CardSlot />
				<CardSlot />
				<CardSlot />
				<CardSlot />
				<CardSlot />
				<CardSlot />
				<CardSlot />
			</Row>
			<Row>
				<CardSlot />
				<CardSlot />
				<CardSlot />
				<CardSlot />
				<CardSlot />
				<CardSlot />
				<CardSlot />
			</Row>
			<Row>
				<CardSlot />
				<CardSlot />
				<CardSlot />
				<CardSlot />
				<CardSlot />
				<CardSlot />
				<CardSlot />
			</Row>
			<Row>
				<CardSlot />
				<CardSlot />
				<CardSlot />
				<CardSlot />
				<CardSlot />
				<CardSlot />
				<CardSlot />
			</Row>
		</Container>
	)
}
