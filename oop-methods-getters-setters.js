//Getters e setters are too called Accessor Property.

//They are methods to access attributes with can be expose.

//Getters return values ​​and setters set values.

export default class Hero2 {
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

  //Ex 1: Method Getters. Accessor property that just get the information and returns it for reading. Don`t accept parameters.
  get name() {
    return this.#name
  }

  get email() {
    return this.#email
  }

  get age() {
    return this.#age
  }

  get role() {
    return this.#role
  }

  get active() {
    return this.#active
  }

  //Ex 2: Method Setters. When it is necessary to change the properties that are already instantiated and created. Accept 1 parameter.
  set name(newName) {
    this.#name = newName
  }

  set email(newEmail) {
    if (newEmail === '') {
      throw new Error('It is not valid')
    }
    this.#email = newEmail
  }

  printInfos() {
    return `${this.name}, ${this.email}, ${this.age}, ${this.role}, ${this.active}`
  }
}
