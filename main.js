let addTaskButton = document.getElementsByClassName("addtask-btn")[0],
    newTaskTextField = document.getElementById('new-task');

console.log('1');

addTaskButton.addEventListener('click', function(){
    let newTask = document.getElementById('new-task').value,
        newTaskMinified = newTask.replace(/\s/g,'');
    console.log(newTask);
    if (newTaskMinified == "" || newTaskMinified == null){
        alert("field cannot be empty");
    } 
    else {
        let request = new XMLHttpRequest();
        request.open('POST', '', 1);
    }
    
})