const hero = {
  name: 'Wolverine',
  age: 160,
  cpf: '07184792201',
  email: 'loganw@hotmail.com',
  rival: [
    {
      name: 'Saber Tooth',
      age: 170,
      cpf: '03087745602',
      email: 'sabertooth@gmail.com'
    }
  ]
}

//Adding a new object
hero.rival.push({
  name: 'Magneto',
  age: 80,
  cpf: '01047784200',
  email: 'magneto@gmail.com'
})

//console.log(hero)

const youngerRival = hero.rival.filter(rival => rival.age === 80)

console.log(youngerRival[0].name)
console.log(youngerRival)
