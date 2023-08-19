const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <button class="editButton">Edit</button>
            <button class="deleteButton">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
        attachTaskListeners(li);
    }
}

function attachTaskListeners(taskItem) {
    const editButton = taskItem.querySelector(".editButton");
    const deleteButton = taskItem.querySelector(".deleteButton");

    editButton.addEventListener("click", editTask);
    deleteButton.addEventListener("click", deleteTask);
}

function editTask(event) {
    const taskItem = event.target.parentNode;
    const taskText = taskItem.firstChild.textContent;
    const newText = prompt("Edit task:", taskText);
    if (newText !== null) {
        taskItem.firstChild.textContent = newText;
    }
}

function deleteTask(event) {
    const taskItem = event.target.parentNode;
    taskList.removeChild(taskItem);
}

// Attach listeners to existing tasks on page load
const existingTasks = document.querySelectorAll("li");
existingTasks.forEach(attachTaskListeners);
