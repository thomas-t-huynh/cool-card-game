import React, { useState, useEffect } from 'react'

import Card from './Components/Atoms/Card/Card'
import { cards } from './Cards/Cards'
import { generateDeck, shuffleDeck } from './Utils/Utils'
import { Board } from './Components/Organisms/Board/Board'
// attack, defense

// magic

// ! - most of these variales will be stored in back-end. Use sockets to retrieve data and then update state.
// ! - for now, we use state to see how it works
// 1 for player 1, 2 for player 2

const phases = {
	draw() {}, // draw a card
	standBy() {}, // Some card effects occur in stand by phase.
	main1() {}, // summon, special summon, flip, change battle position, set cards (monsters, spell, trap)
	battle() {}, // attack monsters
	main2() {}, // summon or change position granted no monster was summon in main1 or monster didnt attack, set spell and trap
	end() {}, // change player turns.
}

const phaseArray = [
	phases.draw(),
	phases.standBy(),
	phases.main1(),
	phases.battle(),
	phases.main2(),
	phases.end(),
]

function getOtherPlayer(player) {
	return { 1: 2, 2: 1 }[player]
}

function App() {
	const [currentPlayerTurn, setCurrentPlayerTurn] = useState(1)
	const [phase, setPhase] = useState()
	const [lifePoints, setLifePoints] = useState({
		1: 2000,
		2: 2000,
	})
	const [deck, setDeck] = useState({
		1: shuffleDeck(generateDeck()),
		2: shuffleDeck(generateDeck()),
	})
	return (
		<div>
			<Board />
			<Card {...cards.monster['Dragon Toddler']} />
		</div>
	)
}

export default App
