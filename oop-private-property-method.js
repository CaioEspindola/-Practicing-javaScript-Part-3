export default class Hero {
  //Ex1: Syntax for declaring a private property #
  #name
  #email
  #age
  #role
  #active

  constructor(name, email, age, role, active = true) {
    this.#name = name
    this.#email = email
    this.#age = age
    this.#role = role || 'student'
    this.#active = active
  }
  //Ex2: Private Method #
  #createObjHero() {
    return {
      name: this.#name,
      email: this.#email,
      age: this.#age,
      role: this.#role,
      active: this.#active
    }
  }
  // Methods are functions that are executed in an object's context. Returning your infos:
  printInfos() {
    const objHero = this.#createObjHero()
    return `${objHero.name}, ${objHero.email}, ${objHero.age}, ${objHero.role}, ${objHero.active}`
  }
}
