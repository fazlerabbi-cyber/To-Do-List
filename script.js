const addTask = ()  => {
   const taskInput = document.getElementById("taskInput");
   const taskInputValue = taskInput.value;

   if(taskInputValue !== ""){
     const taskListUl = document.getElementById("taskList");
     const li = document.createElement("li");
     li.innerHTML = '<input type="checkbox">'  + taskInputValue +  '  <button onclick="deleteTask(this)"> Delete </button>';
     taskListUl.appendChild(li);

     taskInput.value = "";
   }
   else{
    alert("please Add a Task")
   }
    
}


const deleteTask = (btn) => {
   const li = btn.parentNode;
   li.parentNode.removeChild(li);
    
   
}