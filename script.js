// Shuru mein, hum ek khali to-do list banaenge.
let todoList = [];
const todoListElement = document.getElementById('todoList');

// Ab, hum ek function banayenge jisme hum naye tasks ko to-do list mein add karenge.
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    
    if (task !== '') {
        todoList.push(task);
        taskInput.value = '';
        displayTasks();
    }
}

// Fir, hum ek function banayenge jisme hum to-do list ka pura content dekhenge.
function displayTasks() {
    todoListElement.innerHTML = '';
    todoList.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${task}`;
        todoListElement.appendChild(li);
    });
}
