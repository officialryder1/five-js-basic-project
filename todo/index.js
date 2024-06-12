// Get DOM Element

const input = document.getElementById('input');
const addButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');
const addedItem = []

// Load tasks from localStorage
const loadTask = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const element = document.createElement('li');
        element.innerHTML = `${task} <button class="delete">Delete</button>`;
        todoList.appendChild(element);
    });
};

// Save todoList to localStorage

const saveTasks = () => {
    const tasks = [];
    todoList.querySelectorAll('li').forEach(item => {
        tasks.push(item.firstChild.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Define Function
const addTask = () => {
    const valueTask = input.value.trim();
    if(!addedItem.includes(valueTask)){
        addedItem.push(valueTask);
        const element = document.createElement('li');
        element.textContent = valueTask;
        element.innerHTML  += '<button class="delete" id=delete >Delete</button>';
        todoList.appendChild(element);
        input.value = "";
        
        saveTasks()
    } else{
        input.value = "";
        console.log("already exists")
        
    }
    
    
    
}


const deleteTodo = (event) => {
    if(event.target.classList.contains('delete')){
        event.target.parentElement.remove();
        saveTasks()
    }

}

// add EventListener
addButton.addEventListener("click", addTask);
todoList.addEventListener("click", deleteTodo)

// Load tasks when the page is loaded
window.addEventListener('DOMContentLoaded', loadTask)
