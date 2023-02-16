export default class Hero {
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
