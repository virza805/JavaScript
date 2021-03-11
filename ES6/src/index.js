// ES6-11 video-42 # 8:36 pm # 26/3/2020 # Module System
//import * math from './ES6-11-13.js'
// import {add, mod} from './ES6-11-13'

// console.log(mod(12, 4));

// ES6-12 video-43 # 10:10 pm # 26/3/2020 # Module System
// import Person from './person'

// let p1 = new Person('Tanvir Hasan', 24);

// console.log(p1.name);
// p1.print();


// ES6-12 video-43 # 10:10 pm # 26/3/2020 # Module System
// import Person from './ES6-11-13.js';
// import Student from './ES6-11-13.js';

// let st1 = new Student('Onamica Tanvir', '24','564.505');

// st1.print();
import './index.css'

window.onload = function(){

    const taskField = document.querySelector('#taskField');
    const addTaskBtn = document.querySelector('#addTaskBtn');
    const allTasksParent = document.querySelector('#allTasks');

    taskField.addEventListener('keypress', function(event){
        if (event.keyCode ===13){
            creatNewTask(allTasksParent, event.target.value)
            this.value = ''
        }
         
     });

}

function creatNewTask(parent, task){
    let col = create({'class': 'col-sm-3'})

    let singleTask = create({'class': 'single-task d-flex'})

    let singleTaskP= create('p')
    singleTaskP.innerHTML = task
    singleTask.appendChild(singleTaskP)

    let span = create('span', {'class': 'ml-auto'})
    span.innerHTML = `<i class="fa fa-edit"></i>`
    span.addEventListener('click', function(){
        parent.removeChild(col)
    })
    singleTask.appendChild(span)
    
    let taskControler = createTaskController(singleTask)
    taskControler.style.visibility = 'hidden'
    singleTask.appendChild(taskControler)

    singleTask.onmouseenter = function(){
        taskControler.style.visibility = 'visible'
    }

    singleTask.onmouseleave = function(){
        taskControler.style.visibility = 'hidden'
    }

    col.appendChild(singleTask)
    parent.appendChild(col)
    
}

function createTaskController(parent){
    let controlPannel = create({'class': 'task-control-panel d-flex align-items-center'})

    let colorPallete = createColorPallete(parent)
    controlPannel.appendChild(colorPallete)

    let editBtn = createEditBtn(parent)
    controlPannel.appendChild(editBtn)

    return controlPannel
}

function createEditBtn(){
    let span = create('span', {'class': 'ml-auto mr-2'})
    span.innerHTML = `<i class="fa fa-edit"></i>`
    span.style.color = '#fff'
    span.addEventListener('click', function(){
        let p = parent.querySelector('p')
        let textArea = create('textarea', {'class': 'inner-textarea'})
        textArea.style.width = parent.offsetWidth + 'px'
        textArea.style.height = parent.offsetHeight + 'px'
        textArea.style.innerHTML = p.innerHTML

        if(event.keyCode ===13 ){
            event.stopPropagation()

            if (this.value){
                p.innerHTML = this.value
                parent.removeChild(this)
            } else {
                alert ('Please put Some Data')
            }
        }

        parent.appendChild(textArea)
    })

    return span
}

function createColorPallete(parent){
    const colors = ['palegreen', 'skyblue', 'powerblue', 'salmon', 'gray', 'red', 'yellow']

    let colorDiv = create({'class': 'd-flex'})

    colors.forEach(color => {
        let div = create({'class': 'color-circle ml-1'})
        div.style.background =color
        div.addEventListener('click', function(){
            parent.style.background = color
        })
        colorDiv.appendChild(div)
    })
    return colorDiv

}


window.create = function(){

    if (arguments.length === 0){
        return document.createElement('div');
    }
    if (arguments.length === 1 && typeof arguments[0] != 'object'){
        return document.createElement(arguments[0]);
    }
    var tag = arguments[0];
    var attr = arguments[1] || arguments[0];

    if (arguments.length === 1 && typeof arguments[0] = 'object'){
        tag = 'div';
    }

    var element = document.createElement(tag);

    for (var i in attr){
        element.setAttribute(i, attr[i]);
    }

return element;

}