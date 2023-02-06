const hero = {
  name: 'Wolverine',
  age: 160,
  cpf: '07184792201',
  email: 'loganw@hotmail.com'
}

const keys = ['name', 'age', 'cpf', 'email']

console.log(hero[keys[0]])

keys.forEach(info => console.log([hero[info]]))
