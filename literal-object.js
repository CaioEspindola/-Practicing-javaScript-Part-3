const user = {
  name: 'Logan',
  email: 'wolverine@hotmail.com',
  birth: '1853/07/05',
  role: 'admin',
  active: true,
  printInfos: function () {
    console.log(this.name, this.email)
  }
}

//Method THIS AND BIND.

const display = function () {
  console.log(this.name)
}

const displayName = display.bind(user)

display()
displayName()

//Exemple 2:

const user2 = {
  name: 'Logan',
  email: 'wolverine@hotmail.com',
  birth: '1853/07/05',
  role: 'estudante',
  active: true,
  printInfos: function () {
    console.log(this.name, this.email)
  }
}

const admin = {
  nome: 'Charles Xavier',
  email: 'xmanxavier@hotmail.com',
  birth: '1943/08/17',
  role: 'admin',
  createClass() {
    console.log('classroom created')
  }
}

Object.setPrototypeOf(admin, user) //primeiro parametro é o objeto que VAI herdar, e segundo é quem vai passar a herança das propriedades do objeto
admin.createClass()
admin.printInfos()
