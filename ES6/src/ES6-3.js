// ES6-3 video-34 # 1:47 pm # 26/3/2020

const arr = [];

arr.push(12);
arr.push(14);
console.log(arr);

// Dafination in var vs let/const
// let/const is a block element function also...to cheek replase let/const To var

let a = 10;

if (true){
    let a = 20;
    console.log(a);
}
console.log(a);
// another example...

function demo(){
    {
        let x = 10;

        {
            const x = 15;
            console.log(x);
            
        }

        x = 20;
        console.log(x);
        
    }
    //console.log(x);
    
}

demo();

