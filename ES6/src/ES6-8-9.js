// ES6-8 video-39 # 7:47 pm # 26/3/2020 # Enhance Object

let name = 'Tanvir Hasan';
let email = 'virza805@gmail.com';

const Cat = {
    name,
    email,

    print(){
        console.log(this.name, this.email);
        
    }
}

Cat.print();
console.dir(Cat);

// ES6-9 video-39 # 7:57 pm # 26/3/2020 # Destructuring Array & Object

const arr = [19, 20, 32];
let [a, b, c] = arr;

console.log(a);
console.log(c);

const obj = {
    name:  'Tanvir Hasan',
    email: 'virza@gmial.com'
}

let {name, email} = obj;
console.log(name, email);
function print(name, email){
    console.log(`Hello ${name}; Email: ${email}`);
    
}
print({email, name});

