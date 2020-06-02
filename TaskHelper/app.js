//Selectors
const taskInput = document.querySelector('.task-input');
const taskButton = document.querySelector('.task-button');
const taskList = document.querySelector('.task-list');
const filterOption = document.querySelector('.filter-task');
//Event Listeners


taskButton.addEventListener('click', addtask);
taskList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click',filterTask);

//Functions


function addtask(event){
	//prevents form from submitting
	event.preventDefault();
	const taskDiv = document.createElement('div');
	taskDiv.classList.add('task');
	// Create LI
	const newtask = document.createElement('li');
	newtask.innerText = taskInput.value;
	newtask.classList.add('task-item');
	taskDiv.appendChild(newtask);
	//Checkmark Button
	const completedButton = document.createElement('button');
	completedButton.innerHTML = '<i class="fas fa-check"></i>';
	completedButton.classList.add("complete-btn");
	taskDiv.appendChild(completedButton);
	
	//trash Button
	const trashButton = document.createElement('button');
	trashButton.innerHTML = '<i class="fas fa-trash"></i>';
	trashButton.classList.add('trash-btn');
	taskDiv.appendChild(trashButton);
	
	//append to list
	taskList.appendChild(taskDiv);
	//clear textbox
	taskInput.value= "";
}

function deleteCheck(event){
	const item = event.target;
	//delete task
	if(item.classList[0] === 'trash-btn'){
		const task = item.parentElement;
		
		//animation
		task.classList.add('fall');
		task.addEventListener('transitionend',function(){
			task.remove();
		})
	}
	if(item.classList[0] === 'complete-btn'){
		const task = item.parentElement;
		task.classList.toggle('completed');
	}
}

function filterTask(e){
	const tasks = taskList.childNodes;
	tasks.removeChild(tasks.childNodes[0]);
	tasks.forEach(function(task){
		switch(e.target.value){
			case "all":
				task.style.display ="flex";
				break;
			case "completed":
				if(task.classList.contains('completed')){
					task.style.display = "flex";
				}else{
					task.style.display = 'none';
				}
		}
	});
	//48.13*/
}




