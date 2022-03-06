import { cards } from '../Cards/Cards'

export const generateDeck = () => {
	return [...Object.values(cards.monster)]
}

// returns between 0 ... (range - 1)
export const getRandomNumber = (range) => {
	return Math.floor(Math.random() * range)
}

// fisher-yates
export const shuffleDeck = (deck) => {
	const shuffledDeck = [...deck]
	for (let i = deck.length - 1; i > 1; i--) {
		const numberRolled = getRandomNumber(i + 1) // + 1 to allow roll on current index.
		if (i === numberRolled) {
			continue
		}
		// swap
		const temp = shuffledDeck[i]
		// console.log(temp, deck[i], deck[numberRolled])
		shuffledDeck[i] = shuffledDeck[numberRolled]
		shuffledDeck[numberRolled] = temp
	}
	return shuffledDeck
}
