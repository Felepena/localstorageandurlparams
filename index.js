let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
function addTask() {
    const taskNameInput = document.getElementById('taskName');
    const pointsInput = document.getElementById('points');

    const taskName = taskNameInput.value.trim();
    const points = pointsInput.value.trim();

    const task = {
        name: taskName,
        points: points
    };

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    taskNameInput.value = '';
    pointsInput.value = '';

    renderTasks();

}
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = `${task.name} - ${task.points}`;
        taskList.appendChild(li);
    });
}

document.getElementById('addTaskBtn').addEventListener('click', addTask);

renderTasks();

localStorage.setItem("clearKey", "clearThisValue");

undefined;