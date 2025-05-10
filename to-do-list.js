let tasks = [];
function addlist() {
        let taskInput = document.getElementById("tasklist");
        if(taskInput.value.trim() === ""){
            alert("please enter something");
            return
        }

    
    
    let task = {

        id: Date.now(),
        text : taskInput.value,
        completed : false

    };

    tasks.push(task);
    taskInput.value="";
    renderTask();
}
 function renderTask() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks. forEach(task => { 
        let li = document.createElement("li");
        li.innerHTML = `
        <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
        <button onclick = "toggleTask(${task.id})">✔</button>
        <button onclick = "deleteTask(${task.id})">❌</button>
        `;
        taskList.appendChild(li);
    });
 }

 function toggleTask(taskId){
    tasks = tasks.map(task =>
        task.id === taskId ?{ ...task , completed:!task.completed} : task
    );
    renderTask();
 }
 function deleteTask(taskId){
    tasks = tasks.filter(task => task.id !== taskId);
    renderTask();
 }

 document.getElementById("addlist").addEventListener("click",addlist);