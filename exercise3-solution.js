// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

// Newer variable :
let a='test';
let b=true;
const c = 789;
a='test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

//Newer way to wrtie the objects 
const {firstName,lastName,age,eyeColor}=person;


var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;


// Object properties
var a = 'test';
var b = true;
var c = 789;

// newer way for object properties:
const a='test';
const b=true;
const c=789;

var okObj = {
  a: a,
  b: b,
  c: c
};

// ES6 object
const okObj = {a,b,c};

// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
//
const message = `Hello ${firstName} have i met you before? i think we met in ${city}. last summer no???`;

// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}
//
const isValidAge= (age=10) => age;
// Symbol
// Create a symbol: "This is my first Symbol"
const sym = Symbol('this is my first Symbol');
// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

//
const whereAmI = (username,location) => {
    if(username && location){
        return "I am not lost";
    }
    else{
        return "I am totally lost!";
    }
}