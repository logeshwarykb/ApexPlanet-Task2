let tasks = [];
let taskIdCounter = 0;

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');
const taskCounter = document.getElementById('taskCounter');

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        taskInput.focus();
        return;
    }

    const task = {
        id: taskIdCounter++,
        text: taskText,
        completed: false
    };

    tasks.push(task);
    taskInput.value = '';
    renderTasks();
    updateCounter();
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
        updateCounter();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
    updateCounter();
}

function renderTasks() {
    if (tasks.length === 0) {
        todoList.innerHTML = '<div class="empty-state">No tasks yet. Add one above to get started! 🚀</div>';
        return;
    }

    todoList.innerHTML = tasks.map(task => `
        <li class="todo-item ${task.completed ? 'completed' : ''}">
            <div class="checkbox ${task.completed ? 'checked' : ''}" onclick="toggleTask(${task.id})"></div>
            <span class="task-text">${task.text}</span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        </li>
    `).join('');
}

function updateCounter() {
    const remainingTasks = tasks.filter(task => !task.completed).length;
    taskCounter.textContent = `${remainingTasks} task${remainingTasks !== 1 ? 's' : ''} remaining`;
}

// Event listeners
addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Focus on input when page loads
taskInput.focus();
