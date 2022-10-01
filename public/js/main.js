//const projects = require("../../controllers/personal/projects")

document.querySelector('.add-project').addEventListener('click', async () =>{
    document.querySelector('.addingProject').classList.toggle('false')
})

document.getElementById('add-subtasks').addEventListener('click', async () =>{
    addSubTasks()
})

let temporarySubTasks = []

function addSubTasks(){
    //Add the subtask to the array
    let subtask = {
        name:'',
        description:''
    }
    subtask.name = document.getElementById('taskName').value
    subtask.description = document.getElementById('taskDescrip').value
    temporarySubTasks.push(subtask)
         let ul =  document.createElement('ul'),
             li = document.createElement('li'),
             name = document.createElement('span'),
             descr = document.createElement('p')
            document.getElementById('temporaryTasks').appendChild(ul)
            ul.appendChild(li)
            li.appendChild(name)
            li.appendChild(descr)
            li.classList += 'flex flex-row flex-spaceEnd gap-12 showLi'
            li.setAttribute('name', 'tasks')
            descr.classList += 'italic text-slate-400'
        name.innerHTML+= subtask.name
        descr.innerHTML+= subtask.description
}