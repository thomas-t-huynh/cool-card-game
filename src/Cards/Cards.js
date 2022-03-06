// Make simple cards for now.

// TODO - when cards are in play. Merge card with obj that contains card's meta data.
// meta-data -
// # of turns since summon,
// current atk and def,
// position (set, atk, def),
// player ownership
// is effect active
//
export const cards = {
	monster: {
		'Protector of the Rampart': {
			name: 'Protector of the Rampart',
			atk: 1400,
			def: 1200,
			level: 4,
			type: 'monster',
		},
		'Light Sorceror': {
			name: 'Light Sorceror',
			atk: 2500,
			def: 2100,
			level: 7,
			type: 'monster',
		},
		'Granite Golem': {
			name: 'Granite Golem',
			atk: 800,
			def: 2000,
			level: 4,
			type: 'monster',
		},
		'Badger Warrior': {
			name: 'Badger Warrior',
			atk: 1200,
			def: 1500,
			level: 4,
			type: 'monster',
		},
		'Savage Gremlin': {
			name: 'Savage Gremlin',
			atk: 1300,
			def: 1400,
			level: 4,
			type: 'monster',
		},
		'Spawned Cranium': {
			name: 'Spawned Cranium',
			atk: 2500,
			def: 1200,
			level: 6,
			type: 'monster',
		},
		'Atlas The Ferocious Knight': {
			name: 'Atlas The Ferocious Knight',
			atk: 2300,
			def: 2100,
			level: 7,
			type: 'monster',
		},
		'Hex of Wyrm': {
			name: 'Hex of Wyrm',
			atk: 2000,
			def: 1500,
			level: 5,
			type: 'monster',
		},
		'Green Guard': {
			name: 'Green Guard',
			atk: 1400,
			def: 1200,
			level: 4,
			type: 'monster',
		},
		'Elephant Cemetery': {
			name: 'Elephant Cemetery',
			atk: 1200,
			def: 800,
			level: 3,
			type: 'monster',
		},
		'Awesome Black': {
			name: 'Awesome Black',
			atk: 1600,
			def: 800,
			level: 4,
			type: 'monster',
		},
		'Gold Jaw': {
			name: 'Gold Jaw',
			atk: 1200,
			def: 800,
			level: 3,
			type: 'monster',
		},
	},
	spell: {
		'Anti-Mag': {
			name: 'Anti-Mag',
			desc: 'Target spell/trap card on field. Destroy if target is a spell. If card was set, reveal it.',
			action: [
				['destory', 'select', 'spell'],
				['reveal', 'select'],
			],
			type: 'spell',
		},
		'Slippery Floor': {
			name: 'Slippery Floor',
			desc: 'Destroy 1 face-up monster',
			action: [['recover', 'self', 500]],
			type: 'spell',
		},
	},
}

// consider using callbacks to handle some effects

// Properties of magic/trap cards:
//   action: [recover, changeStat, destroy, reveal, negate, skipPhase]
//   target: [all, foeAll, selfAll, selfLife, foeLife, selfTarget, foeTarget, lowest]
//   amount: [number]
//   effect: [atk, def, battle, spell, trap]   can be used in conjunction with action to specify target/adjustment.
