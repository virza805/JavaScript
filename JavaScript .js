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

// সংখ্যার গুননীয়ক

var n =144;
var range = Math.ceil(Math.sqrt(n));
var divisors="";
for (var i=1;i<=range;i++){
    if(n%i==0){
        divisors += i + " "+ (n/i) + " ";
    }
}
console.log(divisors);

console.log("\nসংখ্যার গুননীয়ক last dabul not show" + "\n");
var n =144;
var range = Math.ceil(Math.sqrt(n));
var divisors="";
for (var i=1;i<=range;i++){
    if(n%i==0){
        if(i==n/i){
            divisors += i + " ";
        }else{
            divisors += i + " "+ (n/i) + " ";
        }
        
    }
}
console.log(divisors);

// Clander print
var monthName = "August - 2019";
var days = 31;
var startingDay = 5;

console.log("\n\nCalendar of",monthName,"\n")
console.log("Sat   Sun   Mon   Tue   Wed   Thu   Fri \n");

for(var i=0;i<6;i++){
    var dayRow = "";
    for(var j=1;j<=7;j++){
        var currentDay = 7*i +j -startingDay;

        if(currentDay>days){
            break;
        }else if(currentDay<1){
            currentDay = " ";
        }

        if(currentDay>9){
            dayRow += currentDay + "    ";
        }else{
            dayRow += currentDay + "     ";
        }
        
    }
    console.log(dayRow);
}
