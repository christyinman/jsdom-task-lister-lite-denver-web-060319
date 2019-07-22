document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form')
  const taskList = document.querySelector('#tasks')
  const newTaskDescription = document.querySelector('#new-task-description')
  
  
  form.addEventListener('submit', addTaskToList)
  
  
  function addTaskToList(event) {
    event.preventDefault()
    const newTask = document.createElement('li')
    newTask.innerText = newTaskDescription.value
    appendNewTask(newTask)
    event.target.reset()
  }
  function appendNewTask(task) {
    taskList.appendChild(task)
  }
});