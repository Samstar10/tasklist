// Get a reference to the task input element.
const taskInput = document.querySelector('#task-input')

// Get a reference to the add task button element.
const addTaskButton = document.querySelector('#add-task-button')

// Get a reference to the task list element.
const taskList = document.querySelector('#task-list')

// Add an event listener to the add task button element.
addTaskButton.addEventListener('Click', () => {
    // Get the value of the task input element.
    const task = taskInput.value
    // Create a new task list item element.
    const taskItem = document.createElement('li')
    // Add the task text to the task list item element.
    taskItem.textContent = task
    // Add the task list item element to the task list element.
    taskList.appendChild(taskItem)
    // Clear the task input element.
    taskInput.value = ''
})

// Add an event listener to the task list element.
taskList.addEventListener('click', (e) => {
    // Get the target element of the event.
    const target = e.target
    // If the target element is a task list item element, toggle its completed class.
    if(target.tagName === 'LI'){
        target.classList.toggle('completed')
    }
})