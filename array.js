var virza = ["tan","vir","af","ro","za"];
console.log(virza.length);

var lastElement = virza.length-1;
console.log(virza[lastElement]);

// Add Element in Array 

virza.push("Onamica"); //add for last 
virza.pop("mica"); //Delate for last
virza.unshift("Hasan"); //add for first
virza.shift("Hasan");//Delate for first
console.log("\n",virza,"\n");

// Decoration of inside array 

var vowel = ["i","a","o","u","e"];
vowel.sort();
console.log("\n",vowel);

// String Decoration of inside array 
var list = [1,1,52,5,3,6,7,20,48,45,9,33,38,42,12];

var length = list.length-1;
for(var i=0; i<length; i++){
    for(var j=0; j<length; j++){
        if(list[j] > list[j+1]){
            [ list[j], list[j+1] ] = [ list[j+1], list[j] ];
        }
    }
}
console.log(list);

//String to Array And count word

var s = "Quick brown fox jumps over the lazy dog";
var a = s.split(" ");
console.log(a);
console.log(a.length-1);
var count = s.split("o");
console.log(count.length-1);
