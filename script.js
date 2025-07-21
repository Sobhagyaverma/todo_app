document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.onclick = function() {
        listItem.classList.toggle('completed');
    };
    listItem.appendChild(taskSpan);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(listItem);
    };
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    taskInput.value = "";
});