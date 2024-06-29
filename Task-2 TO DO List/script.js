function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() === '' || taskDate.value.trim() === '') {
        alert('Please enter both a task and a date');
        return;
    }
    
    const li = document.createElement('li');
    
    const taskInfo = document.createElement('div');
    const taskText = document.createElement('span');
    taskText.textContent = `${taskInput.value} - ${taskDate.value}`;
    taskInfo.appendChild(taskText);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };
    
    taskInfo.appendChild(deleteButton);
    li.appendChild(taskInfo);
    taskList.appendChild(li);
    
    taskInput.value = '';
    taskDate.value = '';
}
