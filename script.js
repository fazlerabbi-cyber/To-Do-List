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

const deleteTaskCheck = () => {
  const taskList = document.getElementById("taskList" );
  const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");


   checkboxes.forEach(checkbox => {
          const li = checkbox.parentNode;
          li.parentNode.removeChild(li);
   });
}