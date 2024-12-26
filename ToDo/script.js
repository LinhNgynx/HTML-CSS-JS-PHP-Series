document.addEventListener("DOMContentLoaded", () => {
    const form=document.querySelector(".addForm");
    const taskList=document.getElementById("list-task");
    const handleSubmit = (e) =>{
        e.preventDefault();
        const task=document.getElementById("task").value.trim();
        const description= document.getElementById("description").value.trim();
        const status= document.getElementById("status").value;
        if(!task||!description){
            alert("Please enter task and description");
            return;
        }
        const taskElement = document.createElement("div");
        taskElement.innerHTML=`<h3>${task}</h3>
        <h3>${description}</h3>
        <h3 >${status}</h3>
        <button class="delete-btn">Delete</button>`;
        taskList.appendChild(taskElement);
        form.reset();
    }
    const handleDelete = (e) => {
        if (e.target.classList.contains("delete-btn")) {
            e.target.parentElement.remove(); // Remove the task item
        }
        else{
            e.target.parentElement.classList.toggle("crossed");
        }
    };
    form.addEventListener("submit", (e)=>handleSubmit(e));
    taskList.addEventListener("click", (e)=>handleDelete(e))
});
