var day ='friday';

switch(day){
    case 'sanday':
    console.log('This is Sanday');
    break;

    case 'monday':
    console.log('This is Monday');
    break;

    case 'friday':
    console.log('This is Holiday');
    break;

    default:
        console.log("This is my default day");
}
// Function RRF

function pluse(a,b){
    var sum = a + b;
    return sum;
}

var xy = pluse(40,20);
console.log (xy);