const basket = [ 'apples','oranges','grapes'];

// 1.First way of looping.

for( let i=0; i<basket.length;i++)
{
    console.log(basket[i]);
}

// 2. Second way / ForEach loop

basket.forEach(item=>{
    console.log(item);
})

// for of loop
// Iterating - arrays,strings.

for(item of basket) {
    console.log(item);
}

// for in loop - properties.
// it works with object.
// enumerating(we are not iterating but enumerating) - Objects/
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

for(item in detailedBasket)
{
    console.log(item);
}
