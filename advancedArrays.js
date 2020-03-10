//Advanced Arrays

const array = [1,5,6,8,21];
const double = [];
const newArray = array.forEach((num) => {
    double.push(num*2);
});

console.log(double);

// map , filter , reduce:
//map
const mapArray = array.map((num)=> {
    return num*2;
});

console.log('map', mapArray);
// map also iterates the array elements but it is different than for each as in map we have to return value,
// it gets stored inside the mapArray in this case. It satisfies function purity(deterministic).

// short form to do the same thing is : 
const smapArray = array.map(num => num*2);
console.log(smapArray);

// filter :- it filters the array according to the condition given that is return the array based on
// condition given.

const filterArray = array.filter(num => num>5);
console.log('filter',filterArray);

// reduce :- reduce is very much useful we can do the work of map and filter and also it have a parameter
// called accumulator, accumulator holds the previous value as can be seen in this example code below.

const reduceArray = array.reduce((accumulator,num)=> {
    return accumulator + num;
},0);
// it returns the sum of the array
console.log('reduce',reduceArray);