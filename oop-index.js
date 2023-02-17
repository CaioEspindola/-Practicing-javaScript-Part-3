import Hero from './oop-private-property-method.js'
import AdminHero from './oop-module-import-object.js'
import Hero2 from './oop-methods-getters-setters.js'

// Ex 1: Private Attributes

const newHero = new Hero('Gambit', 'gambit@gmail.com', 30)
console.log(newHero.printInfos())

//error when change name, because now the propriety is private.

/* newHero.#name = 'Magneto'
newHero.#email = 'magneto@gmail.com'
newHero.#age = 70
console.log(newHero.#name) */

// Ex 1: Private Methods

const newHero2 = new Hero2('Storm', 'storm@gmail.com', 31)
console.log(newHero2.name)

newHero2.name = 'Colossus'
/* newHero2.email = '' */

console.log(newHero2.name)
/* console.log(newHero2.email) */
