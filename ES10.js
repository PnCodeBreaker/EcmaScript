// array flat.
//array.flat() will flatten the array or take out the nested array to one level.
// for example: - 
const flatArray = [1,2,[2,5],5,[32,[5]]];
flatArray.flat(5);

const entries = ['bob','sally',,,,'cindy']
entries.flat()

//flatMap . We can use both Flat and Map function and it can return a new flattened array.

const flatArrayMapped = flatArray.flatMap(zero => zero + 0);

// trimStart() , trimEnd ()

const userEmail = '      Pncoder@gmail.com';
const userEmail2 = 'Pncdoer@gmail.com       ';

console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

//formEntries -  it actually converts an disarranged array into objects.

const userProfiles = [['commanderTom',23], ['derekZlander',40], ['hansel',18]];

const obj = Object.fromEntries(userProfiles);
// It will convert it to into an object 
//while in ES8 Object.Entries() was used to the opposite thing that is converting to array.

Object.entries(obj);
// this does completely opposite thing as mentioned above.


// Try and catch 
// if there is an error in try block then Catch block will be executed

try{
    true+ '1'
}
catch{
    console.log('you messed up');
}

// before ES10 we had to give an error parameter.

try{
    true + '1'
}
catch(error){;
    console.log('you messed up' + error);
}