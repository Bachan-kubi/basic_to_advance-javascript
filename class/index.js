//---class basic syntax ---//
class myClass {
    constructor(){
    }
    method1
    method2
    method3
    method4
}
// 1 define class and its method under constructor
class Users {
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    greet(){
        console.log(`Hi! i am ${this.name}. My age is ${this.age} and my address is at ${this.address}`);
    }
}
const ami = {
    name: "kubi",
    age: 30,
    address: "Birisiri"
}
const kubi = new Users(ami.name, ami.age, ami.address);
kubi.greet();

const putul = {
    name: "Putul Nokrek",
    age: 25,
    address: "Nalchapra"
}
