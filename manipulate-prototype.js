function hero(name, cpf, email, balance) {
  this.name = name
  this.cpf = cpf
  this.email = email
  this.balance = balance
  this.deposit = function (value) {
    this.saldo += value
  }
}

function heroPoup(name, cpf, email, balance, balancePoup) {
  hero.call(this, name, cpf, email, balance)
  this.balancePoup = balancePoup
}

const xavier = new heroPoup(
  'Charles Xavier',
  '07898458721',
  'profxavier@gmail.com',
  500,
  1000
)

console.log(xavier)

heroPoup.prototype.depositPoup = function (value) {
  this.balancePoup += value
}

xavier.depositPoup(4000)

console.log(xavier.balancePoup)
