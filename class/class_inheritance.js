// Extends reserve word
class Animal{
    constructor(name, food){
        this.name = name;
        this.food = food;
        this._speed = 0;
    }
    // get and set method added to learn 
    get speed (){
        return this._speed;
    }
    set speed (value){
        if(typeof value !== 'number' || value<0){
            console.log('not a number!');
        }
        return this._speed = value;
    }
    // below is method
    run(){
        console.log(`my ${this.name} can run ${this.speed} miles`);
    }
    eat(){
        console.log(`my dog eats rice and pulse as his fav ${this.food}`);
    }
};

const lili = new Animal('nobo', 'dal');

lili.speed = 25;
lili.run();
lili.eat();