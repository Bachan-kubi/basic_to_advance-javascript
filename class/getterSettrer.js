// create a class
class Person {
  constructor(name) {
    this.name = name;
    this._age = 0;
  }
  // getter for age
  get age() {
    return this._age;
  }
  // setter for age with validation
  set age(value) {
    if (typeof value !== "number" || value < 0) {
      throw new Error("invalid numbers!");
    }
    this._age = value;
  }
  // introduction of person
  intro() {
    console.log(`Hello i am ${this.name} my age is ${this._age}`);
  }
}
// create persons instances 
const kubi = new Person("Bachan");
// set invalid age
try {
    // set age
    kubi.age=25;
    // kubi.age = 25
} catch (error) {
    console.error(error.message);
}
// call intro
kubi.intro();


  