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
  ],

  balance: 100,
  // Function as parameter value, specified with this, and += to increment
  deposit: function (value) {
    this.balance += value
  }
}

let report = ''

for (let heroInfo in hero) {
  if (
    typeof hero[heroInfo] === 'object' ||
    typeof hero[heroInfo] === 'function'
  ) {
    continue
  } else {
    report += ` 
    ${heroInfo} ==> ${hero[heroInfo]}
    `
  }
}
console.log(report)
