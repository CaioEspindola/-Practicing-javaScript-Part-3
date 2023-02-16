class Hero {
  constructor(name, email, age, role, active = true) {
    this.name = name
    this.email = email
    this.age = age
    this.role = role || 'student'
    this.active = active
  }
  // Methods are functions that are executed in an object's context.
  printInfos() {
    return `${this.name}, ${this.email}`
  }
}

const newHero = new Hero('Wolverine', 'logan@hotmail.com', 160)

console.log(newHero)
console.log(newHero.printInfos())

//To check if the class is the prototype of the new object.
console.log(Hero.prototype.isPrototypeOf(newHero))
