//---class basic syntax ---//
class myClass {
  constructor() {}
  method1;
  method2;
  method3;
  method4;
}
// 1 define class and its method under constructor
class Users {
  constructor(name, age, address, introText) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.introText = introText;
  }
  greet() {
    return `Hi! i am ${this.name}. My age is ${this.age} and my address is at ${this.address}`;
  }
  intro() {
    return `my name is ${this.name} my age is ${this.age} ${this.introText}`;
    // console.log(`my name is ${this.name} my age is ${this.age} ${this.introText}`);
  }
}
// 02 create object
const ami = {
  name: "kubi",
  age: 30,
  address: "Birisiri",
};
const kubi = new Users(ami.name, ami.age, ami.address);
kubi.greet();

const putul = {
  name: "Putul Nokrek",
  age: 25,
  address: "Nalchapra",
  introText:
    "I am a classical dancer from my childhood. I love to dance and make other people entertain through dancing!. I get money from doing and performing in different events at locally and nationall.",
};
const me = new Users(putul.name, putul.age, putul.address, putul.introText);
me.intro();
// rendering to UI
document.getElementById("user1").innerHTML = `<p>${kubi.greet()}</p>`;
document.getElementById("user2").innerHTML = `<p>${me.intro()}</p>`;

// class expression

let Member = class {
//   constructor(name, age, id) {
//     this.name = name;
//     this.age = age;
//     this.id = id;
//   }
  hellow (){
    console.log(`kkkkk`);
  }
};

new Member().hellow();

// getter and setter 
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    // Getter for computing the area of the circle
    get area() {
        return Math.PI * this._radius * this._radius;
    }
    // Setter for dynamically updating the radius and maintaining the area
    set radius(radius) {
        this._radius = radius;
    }
}

const myCircle = new Circle(5);
console.log(myCircle.area); // Output: 78.53981633974483

myCircle.radius = 10; // Updating the radius
console.log(myCircle.area); // Output: 314.1592653589793

