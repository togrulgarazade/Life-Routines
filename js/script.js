function addTask() {
    var taskInput = document.getElementById('new-task');
    var taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        var taskList = document.getElementById('task-list');
        
        var li = document.createElement('li');
        li.textContent = taskText;
        
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };
        
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        
        taskInput.value = '';
    }
}
