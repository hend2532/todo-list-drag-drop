let tasks=document.querySelectorAll(".task")
let boxes=document.querySelectorAll(".box")

tasks.forEach(task=>{
  task.addEventListener("dragstart",()=>{
    task.classList.add("is-dragging")
  })
  task.addEventListener("dragend",()=>{
    task.classList.remove("is-dragging")
  })
})
boxes.forEach(box=>{
  box.addEventListener("dragover",(e)=>{
    e.preventDefault();
    let currentTask=document.querySelector(".is-dragging")
    box.appendChild(currentTask);
  })
})

let input=document.querySelector("input");
let button=document.querySelector("button");
let todo=document.querySelector(".box-todo")
let form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  let newTaskText=input.value;
  if(!newTaskText)return;
  let newTask=document.createElement("p");
  newTask.classList.add("task")
  newTask.setAttribute("draggable","true")
  newTask.innerHTML=newTaskText;

  newTask.addEventListener("dragstart",()=>{
    newTask.classList.add("is-dragging")
  })
  newTask.addEventListener("dragend",()=>{
    newTask.classList.remove("is-dragging")
  })

  todo.appendChild(newTask)
  input.value="";
})