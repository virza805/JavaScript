const people = [
    { name: 'Tanvir Hasan', year: 1998 },
    { name: 'Onamica', year: 1952 },
    { name: 'virza', year: 1971 },
    { name: 'zavir', year: 2020 },
];

const comments = [
    { text: 'Love this!', id: 9531805 },
    { text: 'Love it!', id: 564505 },
    { text: 'Super Good', id: 814805 },
    { text: 'Your are the best', id: 5640505 },
    { text: 'Sweet in my fav food ever', id: 523423 },
    { text: 'Nice Nice Nice.....!', id: 823423 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19?

// const isAdult = people.some(function(person){
//     const currentYear = (new Date()).getFullYear();
//     if(currentYear - person.year >= 19){
//         return true;
//     }
// }); // This same code below 1 line
const isAdult = people.some(person => (new Date()).getFullYear() - person.year >= 19 );

console.log({isAdult});

// Array.prototype.every() // is everyone 19?
const allAdult = people.every(person => (new Date()).getFullYear() - person.year >= 19 );

console.log({allAdult});
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423 
// const comment = comments.find(function(comment){
//     if(comment.id === 823423){
//         return true;
//     }
// });
// This same code below 1 line
const comment = comments.find(comment => comment.id === 823423);
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

// comments.splice(index, 1);

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];

