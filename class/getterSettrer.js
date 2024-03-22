// create a class
class Person {
  constructor(name) {
    this.name = name;
    this._age = age;
  }
  // getter for age
  getter() {
    return this._age;
  }
  // setter for age with validation
  setter(value) {
    if (typeof value !== "number" || value < 0) {
      throw new Error("invalid numbers!");
    }
    this._age = value;
  }
  // intgroduction of person
  intro() {
    console.log(`Hello i am ${this.name} my age is ${this._age}`);
  }
}
