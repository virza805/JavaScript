// ES6-1 video-45 # 10:25 pm # 26/3/2020 # Promise
let myFirstPromise = new Promise((resolve, reject) => {
    let name = 'Hasan';

    setTimeout(() => resolve(name),3000);
})

myFirstPromise
    .then((name) => {
        console.log('Tanvir ' + name);
        
    })

// Now use promise from fetch api
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((body) => {
         //body.map(data => console.log(data.name));
       // console.log(body)
       // TO USE PROMISE-DOM-AJIEX

       const lis = body.map(data => {
           let li = document.createElement('li');
           let text = `userName: ${data.username}, City: ${data.city}, Website: ${data.website}`
           let textNode = document.createTextNode(text);

           li.appendChild(textNode);

           return li;
       });

       lis.forEach((li) =>{
           document.getElementById('mylist').appendChild(li);
       })
    })
    .catch((err) => console.log(err));