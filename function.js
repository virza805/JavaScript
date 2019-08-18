function sayHi (name = "vaiza", age="unknown"){
    console.log("Hello "+ name + " You are "+ age +" years old");
}
sayHi("Tanvir", 26);
sayHi("Hasan",21);
sayHi();

function reverseString(data){
    var reverseString = data.split('').reverse().join('');
    return reverseString;
}
var a = "virza zavir";
var b = reverseString(a);
console.log(b);

// spread oparator 

function addStudents(storage, ...people){
    for (i=0; i<people.length; i++){
        storage.push(people[i]);
    }
}
var students = [];
var virza = [];
var zavir = [];
addStudents(students,"Tanvri","Hasan","Al-Amin",564.505,"Onamica");
console.log(students);
addStudents(students,"Afroza","Anica","Nitu",564.505,);
console.log(students.length);
addStudents(students,"Janat","Fatema","Tonni",0,9531805,"Nilima");
console.log(students.length);


addStudents(virza,"Afroza","Anica","Nitu",564.505,);
console.log(virza);
console.log(virza.length);
addStudents(zavir,"Janat","Fatema","Tonni",0,9531805,"Nilima");
console.log(zavir.length);
