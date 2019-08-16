var factorial = 1;
for (var i=1; i<=10; i++){
    factorial *= i;
    console.log("Factorial of",i,"is",factorial);
} 

console.log("\n");

var series = "";
var n;
for(var i=1;i<10;i++){
    n = i*2;
    series = series + n + "+";
}
console.log(series);

series ="";
for(var i=1;i<10;i++){
    n = i;
    if( n%2==0){
        n = i*2;
    }
    series = series + n + "+";
}
console.log("Series 4 = ",series);
// fibonacci Seres 
//  0 1 1 2 3 5 8 13 21 34 55 

series = "0 1 ";
n = 0;
var x = 0;
var y = 1;

for(var i = 1; i<10; i++){
    n= x+y;
    x=y;
    y=n;
    series = series + n + " ";
}
console.log("fibonacci Series = ",series);

// 1 to 20 গুণের নামতা
var series;
for(var i =1; i<=20; i++){
    series = i + " = ";
    for(var j=1; j<=10; j++){
        //series = series + i*j + " ";
        series += i*j + " ";
    }
    console.log("গুণের নামতা "+ series);
}