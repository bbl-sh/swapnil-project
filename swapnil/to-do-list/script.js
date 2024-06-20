let taskList = document.getElementById("task-list");
let addTaskButton = document.getElementById("add-task");
let taskInput = document.getElementById("task");

addTaskButton.addEventListener("click", addTask);

function addTask() {
    let task = taskInput.value.trim();
    if (task !== "") {
        let listItem = document.createElement("li");
        listItem.textContent = task;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}