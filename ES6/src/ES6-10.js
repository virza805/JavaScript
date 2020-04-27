// ES6-10 video-40 # 8:36 pm # 26/3/2020 # Default Parameter, Rest and Spread

// let add = (a, b) => a+b;

// console.log(add(10));
// This is use Default Parameter
let sqr = (a=1, b=a) => a*b;

console.log(sqr(10));

//Rest or Spread = ...

// To use Rest oparator

function sum (...num){
    return num.reduce((a, b) => a+b );
  // console.log(sum);
   
}

let xum = sum(10, 20, 30, 40, 50);
console.log(xum);

// To use Spread oparator

var arr = [ 1, 2, 3, 4];

arr =[...arr, 10, 15, 20, 25];
console.log(...arr);

var obj = {
    name: 'Tanvir Hasan',
    email: 'virza805@gmail.com'
}

var obj2 ={
    ...obj,
    phone: 01795815660
}
console.log(obj2);

