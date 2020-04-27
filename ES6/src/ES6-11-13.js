// export const add = (a, b) => a+b;
// export const sub = (a, b) => a-b;
// export const times = (a, b) => a*b;
// export const div = (a, b) => a/b;
// export const mod = (a, b) => a%b;

// ES6-13 video-44 # 10:12 pm # 26/3/2020 # Inheritance in Data

import Person from './person'
class Student extends Person{
    constructor(name, age, id){
        super(name, age)
        this.id= id;
    }
    welcome(){
        super.print();
        console.log(`ID: ${this.id}`);
        
    }
}
export default Student;