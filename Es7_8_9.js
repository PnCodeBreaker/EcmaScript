// includes

const superhero = ['Batman','IronMan','Daredevil','CaptainAmerica'];
superhero.includes('Batman');

// thus it will return true.

// exponential operator : 

const sqaure = (x) => x**2;
const cube = (y) => y**3;

// which will result in sqaring and cubing.


// ES 8 :
// .padstart()
// .padend()   // gives padding to the text.

//object.values
//object.entries
//object.keys

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr Grinch'
}

Object.key(obj).forEach((key,index) => {
    console.log(key,obj[key]);
});

Object.values(obj).forEach(value => {
    console.log(value);
}) 

Object.entires(obj).forEach(value => {
    console.log(value);
})


Object.entries(obj).map(value=> {
    return value[1] + value [0].replace('username','');
    
})
// Async Await.