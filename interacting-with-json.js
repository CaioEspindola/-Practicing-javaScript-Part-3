import heroes from './marvel-heroes.json' assert { type: 'json' }

/* console.log(heroes)
console.log(typeof heroes) */

const heroString = JSON.stringify(heroes)

console.log(heroString)

console.log(typeof heroString)

console.log(heroString.nome)

const heroObj = JSON.parse(heroString)

console.log(heroObj)
