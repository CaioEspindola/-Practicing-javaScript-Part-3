class Hero {
  constructor(name, age, cpf, email, balance) {
    this.name = name
    this.age = age
    this.cpf = cpf
    this.email = email
    this.balance = balance
  }

  //Behavior method that adds or changes infos when creating the new object.

  deposit(value) {
    this.balance += value
  }

  printDeposit() {
    console.log(this.balance)
  }
}

const wolverine = new Hero(
  'Wolverine',
  160,
  '08774155966',
  'logan@hotmail.com',
  200
)

console.table(wolverine)

// Inheriting methods and properties.

class HeroPoup extends Hero {
  constructor(name, age, cpf, email, balance, balancePoup) {
    super(name, age, cpf, email, balance)
    this.balancePoup = balancePoup
  }

  depositPoup(value) {
    this.balancePoup += value
  }
}

const wolverinePoup = new HeroPoup(
  'Charles Xavier',
  70,
  '08774155966',
  'professorcharles@hotmail.com',
  1000,
  5000
)

console.log(wolverinePoup)
