// reference type : objects are user defined data structures thus : 
var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};
// here if we compare object1 and object 2 are equal or same but despite having same value object3!= object1.
// thus objects are reference type in js.
// also arrays are nothing but a kind of objects thus they are also reference type. thus []!=[].

//context :- (context vs scope) :

const object4 = {
    a: function() {
        console.log(this);  // this specifies inside which environment/context(object) we are... 
    }
}

//instantiation : make a copy of the object and reuse the code.Making multiple copies or instances of object.



class Player {
    constructor(name,type){
        console.log('player',this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi i am ${this.name}, i am a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name,type){
        super(name,type)
        console.log('Wizard',this);
    }
    play() {
        console.log(`WEEEE I am a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly','Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');