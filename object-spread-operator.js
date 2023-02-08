const heroes = [
  {
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
  },
  {
    name: 'Spider Man',
    age: 17,
    cpf: '04785910084',
    email: 'peterparker@hotmail.com',
    rival: [
      {
        name: 'Sand Man',
        age: 170,
        cpf: '03087745602',
        email: 'sabertooth@gmail.com'
      },
      {
        name: 'Green Elf',
        age: 60,
        cpf: '05889448871',
        email: 'greenelf@gmail.com'
      }
    ]
  }
]

//                spread operator. "espalhamento"
const rivalList = [...heroes[0].rival, ...heroes[1].rival]

console.table(rivalList)
