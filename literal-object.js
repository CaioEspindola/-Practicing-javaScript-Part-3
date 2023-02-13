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
