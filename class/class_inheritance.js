// Extends reserve word
class Animal {
  constructor(name, food) {
    this.name = name;
    this.food = food;
    this._speed = 0;
  }
  // get and set method added to learn
  get speed() {
    return this._speed;
  }
  set speed(value) {
    if (typeof value !== "number" || value < 0) {
      console.log("not a number!");
    }
    return (this._speed = value);
  }
  // below is method
  run() {
    console.log(`my ${this.name} can run ${this.speed} miles`);
  }
  eat() {
    console.log(
      `my dog ${this.name} eats rice and pulse as his fav ${this.food}.`
    );
  }
}
const fog = {
  name: "kobi",
  food: "rice and pulse",
};
const lili = new Animal(fog.name, fog.food);
// set speed before calling methods!
lili.speed = 25;

lili.run();
lili.eat();

class Rabit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
  eat() {
    super.eat(); // it call parents eat
    this.hide();
  }
  // usage of super at arrow functioin.
  run() {
    setTimeout(() => {
      super.run();
    }, 1000);
  }
}
const rabit = new Rabit("Bob", "grass");
rabit.eat();
rabit.hide();
rabit.speed = 10;
rabit.run();
