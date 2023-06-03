const TaskInput = document.getElementById("TaskInput");
const addButton = document.getElementById("addButton");
const List = document.getElementById("List");

addButton.addEventListener('click', addTask)

document.addEventListener('DOMContentLoaded',loadTasks)

function addTask() {
    const Task = TaskInput.ariaValueMax.trim();
if (Task === '') {
    return
}

    const listItem = document.createElement('li');
    listItem.textContent = Task;

    List.appendChild(listItem)

    saveTasks()

    TaskInput.value=''
}

function saveTasks() {
    const task =Array.from(List.children).map((item) => item.textContent);

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function loadTasks() {
    const saveTasks = localStorage.getItem('tasks')

    if (!saveTasks) {
        return
    }

    const tasks = JSON.parse(saveTasks)
    tasks.forEach((task) => {
        const List = document.createElement('li');
        listItem.textContent= task;
        List.appendChild(listItem)
    })
}
