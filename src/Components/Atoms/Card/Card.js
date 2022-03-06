import React from 'react'

import { Container, Name, Portrait, Stat, StatContainer } from './Card.styles'

export default function Card({ name, atk, def }) {
	return (
		<Container>
			<Name>{name}</Name>
			<Portrait />
			<StatContainer>
				<Stat>{atk}</Stat>
				<Stat>{def}</Stat>
			</StatContainer>
		</Container>
	)
}
