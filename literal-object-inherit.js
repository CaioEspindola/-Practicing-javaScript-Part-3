const xMan = {
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
  name: 'Charles Xavier',
  email: 'xmanxavier@hotmail.com',
  birth: '1943/08/17',
  role: 'admin',
  createClass() {
    console.log('classroom created')
  }
}
//Para definir o protótipo que vai passar a herança de propriedades do objeto e também quem vai herdar.
//Primeiro parametro é o objeto que vai herdar, e segundo é o objeto que vai passar a herança das propriedades.

Object.setPrototypeOf(admin, xMan)
admin.createClass()
admin.printInfos()
