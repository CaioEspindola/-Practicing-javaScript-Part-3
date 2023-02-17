import Hero from './oop-private-property-method.js'

export default class AdminHero extends Hero {
  constructor(name, email, age, role = 'admin', active = true) {
    //super classe para trazer todas as propriedades que queremos aproveitar do prototipo
    super(name, email, age, role, active)
  }

  //create a new method for this object
  createTraining(trainingName, numbOfStudents) {
    return `Class of ${trainingName}, for ${numbOfStudents} students!`
  }
}

/* const newAdmin = new AdminHero('Charles Xavier', 'charlesx@gmail.com', 80) 

console.log(newAdmin)
console.log(newAdmin.printInfos()) //Method exported

// console.log - create a new method:
console.log(newAdmin.createTraining('Self-Defense', 20))
 
 */
