const first = () => {
    const greet='Hi';
    const second = () =>
    {
        alert(greet);
    }
    return second;
}
const newFunc = first ();
newFunc();

/* Closures : - a function ran. the function executed. it never going to execute again. But it is going to 
remember that there are references to that variable. So the child scope has always access to parent scope.
But the vice versa is not true. */

// Currying :- it is used to convert multiple parameter function into single parameter function

const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
const multiplyby5 = curriedMultiply(5);

// compose : - it is like maths composition function.

const compose = (f,g) => (a) => f(7);
const sum = (num) => num+1;
compose (sum,sum)(5);

/* Avoiding Side Effects, functional Purity, Deterministic or "we can say as an example returning value
   without console.log */

   var a = 1;
   function b(){
       a=2;               // Avoiding this type of stuff.
   } 