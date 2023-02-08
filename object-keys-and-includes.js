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
    },
    {
      name: 'Magneto',
      age: 80,
      cpf: '01047784200',
      email: 'magneto@gmail.com'
    }
  ]
}

function offerDuel(obj) {
  const propsHeroes = Object.keys(obj)
  if (propsHeroes.includes('rival')) {
    console.log(`Prepare for Battle ${obj.name}`)
  }
}

offerDuel(hero)

// Another way to access values and array by console.log
console.log(Object.values(hero))
console.log(Object.entries(hero))
