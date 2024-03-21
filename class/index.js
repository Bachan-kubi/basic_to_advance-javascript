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
    constructor(name, age, address, introText){
        this.name = name;
        this.age = age;
        this.address = address;
        this.introText = introText;
    }
    greet(){
        console.log(`Hi! i am ${this.name}. My age is ${this.age} and my address is at ${this.address}`);
    }
    intro(){
        console.log(`${this.introText}`);
    }
}
// 02 create object
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
    address: "Nalchapra",
    intro: 'I am a classical dancer from my childhood. I love to dance and make other people entertain through dancing!. I get money from doing and performing in different events at locally and nationall.'
}
const me = new Users(putul.name, putul.age, putul.address, putul.intro);
me.intro();
