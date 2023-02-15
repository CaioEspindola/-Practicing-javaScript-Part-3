// Função Classes tem a primeira letra maiuscula. Classe é um conceito, um modelo, para criação de objetos.

//Exemple 1: Método new, para criar objetos JS com constructor.

function Hero(name, email) {
  //<-propriedades ->parametros
  this.name = name
  this.email = email
  this.printInfos = function () {
    return `${this.name}, ${this.email}`
  }
}

const newHero = new Hero(`'Wolverine', 'logan@hotmail.com'`)
console.log(newHero.printInfos())

//Exemple 2: Metodo call, que chama a função classe para herdar suas propriedades.
//Metodo create. Inclui dentro das propriedados do novo objeto, as propriedados de outro objeto.

function Admin(role) {
  Hero.call(this, 'Charles Xavier', 'charlesx@gmail.com')
  this.role = role || 'student'
}
Admin.prototype = Object.create(Hero.prototype)
const newHero2 = new Admin('Admin')

console.log(newHero2.printInfos())
console.log(this.role)

//Exemple 3: Criando objeto, usando diretamente o objeto.

const rivalHero = {
  printInfos: function (name) {
    return name
  }
}

const newRival = Object.create(rivalHero)
console.log(newRival.printInfos('Magneto'))
console.log(rivalHero.isPrototypeOf(newRival))

//Exemple 4: Metodo Init.

const rivalHero2 = {
  init: function (name, email) {
    this.name = name
    this.email = email
  },

  printInfos2: function () {
    return this.name, this.email
  }
}
const newRival2 = Object.create(rivalHero2)
newRival2.init('Thanos', 'thanos@hotmail.com')
console.log(newRival2.printInfos2())
