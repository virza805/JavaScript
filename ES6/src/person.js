// ES6-12 video-42 # 8:36 pm # 26/3/2020 # Class

class Person {
    constructor(name, age){
        this.name = name
        this.age  = age
    }
// get name(){
//     return this.name
// }
// set name(name){
//     this.name= name
// }
    print(){
        console.log(`Name: ${this.name}, Email: ${this.age}`);
        
    }
}

export default Person;