// Pass by value
var a = 5;
var b = a;
b++
 console.log(a);
 console.log(b);

 // this will result in a= 5 and b= 6
  
 // Pass By reference : 

 let Object1 = {
     name: 'Batman',
     password: 'I am Batman'
 }
 let Object2 = Object1;
 
 Object2.password = 'TheDarkNight';

 console.log(Object1);
 console.log(Object2);
 
 // this will result in change in both the object password despite changing the password of Object2,
 // that is now Object1 password is also changed in this case to 'theDarkNight'.

 // Same thing for arrays also
 var c = [1,5,6,10,15];
 var d = c;
 d.push(121);
 console.log(d);
 // this will also change the c array.
 
 // thus if we do not want it to pass by reference then we do like this :
  var c= [1,5,6,10,15];
  var d=[].concat(c);
  d.push(121);
  console.log(d);

  // Now for Objects we do like this: 

  let obj = {a:a,b:b,c:c};
  let clone = Object.assign({},obj);
  let clone2 = {...obj};
  obj.c= 5;
  console.log(obj);
  console.log(clone);
  console.log(clone2);
  // thus now changing one object will not alter the other one.

// But What if there is an object inside an object.
// then we have to do this to make a superclone.
let objt = {
    a:a,
    b:b,
    c: {
       deep: "Try and copy me"
    }
};
  let clone = Object.assign({},objt);
  let clone2 = {...objt};
  let superclone = JSON.parse(JSON.stringify())
  objt.c.deep= 'Ha Ha Ha';
  console.log(objt);
  console.log(clone);
  console.log(clone2);
  console.log(superclone);