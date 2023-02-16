import Hero from './oop-module-export-object.js'

class AdminHero extends Hero {
  constructor(name, email, age, role = 'admin', active = true) {
    //super classe para trazer todas as propriedades que queremos aproveitar do prototipo
    super(name, email, age, role, active)
  }
}

const newAdmin = new AdminHero('Charles Xavier', 'charlesx@gmail.com', 80)

console.log(newAdmin)
console.log(newAdmin.printInfos())
