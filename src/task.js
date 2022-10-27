import {
	isToday,
	isThisWeek,
	parseISO
} from 'date-fns'
import edit from './pencil.png'
import trash from './delete.png';
import {
	taskContainer,
	popUpContainer,
	contentTitle,
	inboxSelect,
	todaySelect,
	weekSelect,
	importantSelect,
	addPlus,
} from "./index.js";
import loadForm from './loadForm';
export {
	addTask,
	userTasks,
}
const userTasks = []

/* localStorage.setItem("tasks", JSON.stringify(userTasks))
let storedTasks = JSON.parse(localStorage.getItem("tasks"))
function displayLocalStorage() {
displayTask(storedTasks)
} */

function addTask() {
	//TASK OBJECT
	const Task = (() => {
		const title = document.getElementById("title").value
		const description = document.getElementById("description").value
		const dueDate = document.getElementById("dueDate").value
		const priority = document.getElementById("priority").dataset.value
		const projectOption = document.getElementById("project-select").value
		const id = Math.floor(Math.random() * 1000000)
		return {
			title,
			description,
			dueDate,
			priority,
			id,
			projectOption
		};
	})();
	//ADD TASK TO ARRAY
	userTasks.push(Task);
	closeForm();
	displayTask();
	console.log(Task)
	console.log(userTasks)

	function displayTask(index) {
		//CREATE CARD
		const card = document.createElement("div")
		card.setAttribute("id", index)
		card.setAttribute("data-value", Task.projectOption)
		card.classList.add("card", "task-card")
		card.style.display = "flex"
		taskContainer.appendChild(card);
		const card2 = document.createElement("div")
		card2.classList.add("card-2")
		card.appendChild(card2)
		//CREATE TASK DOT
		const taskDot = document.createElement("span")
		taskDot.classList.add("default-task-dot")
		card2.appendChild(taskDot)
		//DISPLAY TASK CONTENTS
		const titlePara = document.createElement("p");
		titlePara.textContent = (`${Task.title}`);
		card2.appendChild(titlePara)
		titlePara.classList.add("title-para")
		/* 		const descPara = document.createElement("p");
		descPara.textContent = (`${Task.description}`);
		card.appendChild(descPara) */
		const dueDatePara = document.createElement("p");
		dueDatePara.textContent = (`${Task.dueDate}`);
		card2.appendChild(dueDatePara)
		dueDatePara.classList.add("due-date-para")
		const priorityPara = document.createElement("p")
		priorityPara.textContent = (`${Task.priority}`);
		card2.appendChild(priorityPara)
		priorityPara.classList.add("priority-para")
/* 		//FOR TESTING PURPOSES
		const projectPara = document.createElement("p")
		projectPara.textContent = (`${Task.projectOption}`);
		card.appendChild(projectPara) */
		//RESET PRIORITY
		addPlus.addEventListener('click', function() {
			document.getElementById("priority").dataset.value = "none"
		})
		//CREATE EDIT ICON
		const editIcon = new Image();
		editIcon.src = edit;
		editIcon.classList.add("edit-icon")
		card2.appendChild(editIcon);
		//CREATE REMOVE ICON
		const removeTaskIcon = new Image();
		removeTaskIcon.src = trash;
		removeTaskIcon.classList.add("remove-icon")
		card2.appendChild(removeTaskIcon);
		//REMOVE TASK
		removeTaskIcon.addEventListener('click', function() {
			card.remove();
			userTasks.splice(index, 1);
			console.log(userTasks)
		})
		//POPULATE FORM FOR EDIT
		function populateForm() {
			document.getElementById("title").value = Task.title
			document.getElementById("description").value = Task.description
			document.getElementById("dueDate").value = Task.dueDate
			document.getElementById("priority").value = Task.priority
		}
		//EDIT TASK
		editIcon.addEventListener('click', function() {
			popUpContainer.style.display = "flex";
			document.querySelector(".submit-button").textContent = "Edit"
			card.remove();
			userTasks.splice(index, 1);
			populateForm(Task)
		})
		//TASK STRIKETHROUGH TOGGLE		
		taskDot.addEventListener('click', function() {
			taskDot.classList.toggle("focus-task-dot")
			card.classList.toggle("card-strike")
		})
		inboxSelect.addEventListener('click', function() {
			card.style.display = "flex"
		})
		todaySelect.addEventListener('click', function() {
			const parseDueDate = parseISO(Task.dueDate)
			if (isToday(parseDueDate) === true) {
				console.log("is today")
				card.style.display = "flex"
			} else if (isToday(parseDueDate) != true) {
				card.style.display = "none"
			} {}
		})
		weekSelect.addEventListener('click', function() {
			const parseDueDate = parseISO(Task.dueDate)
			if (isThisWeek(parseDueDate) === true) {
				console.log("is this week")
				card.style.display = "flex"
			} else if (isThisWeek(parseDueDate) != true) {
				card.style.display = "none"
			} {}
		})
		importantSelect.addEventListener('click', function() {
			if (Task.priority === "High") {
				card.style.display = "flex"
			} else {
				card.style.display = "none"
			}
		})
		const projectCard = document.querySelectorAll(".project-card-select")
		if (projectCard) {
			projectCard.forEach(project => {
				project.addEventListener('click', function() {
					const projectValue = document.getElementById("project-value").dataset.value
					if (projectValue !== Task.projectOption || Task.projectOption === "none") {
						card.style.display = "none"
					} else if (projectValue === Task.projectOption) {
						card.style.display = "flex"
					}
				})
			})
		}
	}
}

function closeForm() {
	document.querySelector(".pop-up-container").style.display = "none";
	document.querySelector(".task-form").reset();
}