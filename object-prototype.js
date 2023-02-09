function hero(name, cpf, email, balance) {
  this.name = name
  this.cpf = cpf
  this.email = email
  this.balance = balance
  this.deposit = function (value) {
    this.saldo += value
  }
}

const jimGrey = new hero('Jim Grey', '08775412357', 'jimgrey@hotmail.com', 600)

console.log(jimGrey)
