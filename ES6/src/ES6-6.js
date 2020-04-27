// ES6-4 video-35 # 2:17 pm # 26/3/2020 # Arrow Function
// function print {

// }
const print = () => {
    console.log('Hello Arrow Function');
    
}
print();

// another exampole 

const addMe = (a, b) => a+b;
console.log(addMe(10, 24));

const sqr = x => x*x;
// old prosece 
// function sqr(x){
//     return x*x;
// }
console.log(sqr(10));

// ES6-7 video-38 # 2:17 pm # 26/3/2020 # Arrow Function

//Old stayl 
// const obj = {
//     name: 'Tanvir Hasan',
//     print: function(){
//         setTimeout(function(){
//             console.log(this);
            
//         }.bind(this), 1000);
//     }
// }
// obj.print();

// ES6 stayl
const obj = {
    name: 'Tanvir Hasan',
    print: function(){
        setTimeout(() => {
            console.log(this.name);
            
        }, 1000);
    }
}
obj.print();
