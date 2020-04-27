const inp = document.getElementById('inp');
const nameList = document.getElementById('name-list');
const display = document.getElementById('display');
const giveATry = document.getElementById('give-a-try');
const firstPosition = document.getElementById('first-position');
const secondPosition = document.getElementById('second-position');
const thirdPosition = document.getElementById('third-position');


// TODO Extract Text From Text Area and Store it to an Array
const participantNames = [];

inp.addEventListener('keypress', function(event){
    if(event.key = 'Enter'){
        let newNames = event.target.value.split(', ');
        if (newNames[0] != ''){
            newNames.forEach(name => {
                participantNames.push(name)
                 let item = createListItem(name)
                 nameList.appendChild(item)
                 event.target.value = ''
            })
        }
    }
});

giveATry.addEventListener('click', function(){
    if (participantNames.length == 0){
        alert('Ther is No Entry')
     }else{
        let shuffledNames = shuffle(participantNames);
        for (let i=1; i<shuffledNames.length; i++){
            (function (i, count){

                setTimeout(()=>{
                    let rand = Math.floor(Math.random() * (shuffledNames.length));
                    display.innerHTML = shuffledNames[rand];

                    if (count == shuffledNames.length -1){
                        if(!firstPosition.innerHTML){
                            firstPosition.innerHTML = shuffledNames[rand];
                            let ind = participantNames.indexOf(shuffledNames[rand]);
                            participantNames.splice(ind, 1);
                        } else if(!secondPosition.innerHTML){
                            secondPosition.innerHTML = shuffledNames[rand];
                            let ind = participantNames.indexOf(shuffledNames[rand]);
                            participantNames.splice(ind, 1);
                        } else if(!thirdPosition.innerHTML){
                            thirdPosition.innerHTML = shuffledNames[rand];
                            let ind = participantNames.indexOf(shuffledNames[rand]);
                            participantNames.splice(ind, 1);
                        } else {
                            alert('Raffle Draw Already Completed');
                        }
                    }


                }, i);
            })(i*100, i);
        }
    }
});
// TODO Render The Names Extracted From Text Array

// TODO Shuffle The Names Array for Better Result
// TODO Pick A Random Winner, Remove Him/Her from The Names Array
// TODO Display Winners Name
// TODO  virra, Tanvir hasan, Onamica Hasan, zavir, virza, Afroza

function createListItem(name){
let li = document.createElement('li');
//li.className = 'list-group-item';
li.innerHTML = name;
return li;
}

// https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/

function shuffle(arr){
let shuffledArr = [...arr];

for(let i = shuffledArr.length - 1; i>0; i--){
    let rand = Math.floor(Math.random() * (i + 1));
    let temp = shuffledArr[rand];
    shuffledArr[rand] = shuffledArr[i];
    shuffledArr[i] = temp;
}
return shuffledArr;
}

// If I wont to check any function to Excquat how many time

// console.time('loopcount');
//     for(var i =0; i<10000; i++){
//         console.log('Hello world');
        
//     }
// console.timeEnd('loopcount');

// -- js-project-DOM Working with Events # 31/3/2020 6:45 am Start --
let btn = document.querySelector('#click-me')
// make a function on work

let colors = ['red', 'green', 'yellow', 'blue']

let i= 0

btn.addEventListener('click', function(){
    
    heading.innerHTML = 'virza & zavir also love vir-za.com'
    heading.style.backgroundColor = colors[i]

    if(i >= colors.length){
        i=0
    }else{
        i++
    }
})

function $(vir){
    return document.querySelector(vir);
}
let heading = $('#my-h1');

// Show & Hide Event

let btnn = $('#btn')
let para = $('#para')

let isShow = false;

btnn.addEventListener('click', function(){
    if (isShow){
        para.style.visibility ='hidden'
        isShow = false;
        btnn.innerHTML = 'Show';
    }else{
        para.style.visibility ='visible'
        isShow = true;
        btnn.innerHTML = 'Hide';
    }
});
// -- js-project-DOM Create & Delate # 31/3/2020 7:35 am Start --

let rooted = document.querySelector('#roote');

let jumbotronDiv = document.createElement('div')

jumbotronDiv.className = 'jumbotron text-center'
jumbotronDiv.setAttribute('id', 'my-jmb')

let h1 = document.createElement('h1')
h1.className = 'display-2 py-5'
h1.innerHTML= 'vir-za.com'

jumbotronDiv.appendChild(h1)
rooted.appendChild(jumbotronDiv)

// js-project-DOM Create & Delate 

let nameField = document.querySelector('#nameField')
let ul = document.querySelector('#nameList')

nameField.addEventListener('keypress', function(event){
   if (event.keyCode ===13){
       let name = event.target.value;
       createLi(ul,name)
       event.target.value = ''
   }
    
})


function createLi(ul, name){
    let li = document.createElement('li')
    li.className = 'list-group-item d-flex'
    li.innerHTML = name

    let icon = document.createElement('span')
    icon.innerHTML = `<i class="fa fa-trash-alt"></i>`
    icon.className = 'ml-auto text-danger'
    icon.style.cursor = 'pointer'

    icon.addEventListener('click', function(){
       ul.removeChild(li)
    })
    li.appendChild(icon)

    ul.appendChild(li)
}