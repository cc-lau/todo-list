import closeWindow from './close.png';
import {
	formatDistance,
	subDays
} from 'date-fns'
import {
	taskContainer,
	popUpContainer
} from "./index.js";
import {
	addTask
} from './task.js';
import {
	userProjects
} from './projects';
export default function loadForm() {
	const formContainer = document.createElement("div")
	formContainer.classList.add("form-container")
	popUpContainer.appendChild(formContainer)
	const closeDiv = document.createElement("div")
	closeDiv.classList.add("close-div")
	formContainer.appendChild(closeDiv)
	const closeIcon = new Image();
	closeIcon.classList.add("close-icon")
	closeIcon.src = closeWindow;
	closeDiv.appendChild(closeIcon)
	closeIcon.addEventListener('click', closeForm)
	const taskForm = document.createElement("form")
	taskForm.classList.add("task-form")
	formContainer.appendChild(taskForm)
	const titleDiv = document.createElement("div")
	taskForm.appendChild(titleDiv)
	const titleLabel = document.createElement("label")
	titleLabel.setAttribute("for", "title")
	titleLabel.innerHTML = "Title: "
	const titleInput = document.createElement("input")
	titleInput.setAttribute("type", "text")
	titleInput.setAttribute("id", "title")
	titleInput.setAttribute("name", "title")
	titleDiv.appendChild(titleLabel)
	titleDiv.appendChild(titleInput)
	const descDiv = document.createElement("div")
	taskForm.appendChild(descDiv)
	const descLabel = document.createElement("label")
	descLabel.setAttribute("for", "description")
	descLabel.innerHTML = "Description: "
	const descText = document.createElement("textarea")
	descText.setAttribute("type", "text")
	descText.setAttribute("id", "description")
	descText.setAttribute("name", "description")
	descDiv.appendChild(descLabel)
	descDiv.appendChild(descText)
	const dateDiv = document.createElement("div")
	taskForm.appendChild(dateDiv)
	const dateLabel = document.createElement("label")
	dateLabel.setAttribute("for", "dueDate")
	dateLabel.innerHTML = "Due Date: "
	const dateInput = document.createElement("input")
	dateInput.setAttribute("type", "date")
	dateInput.setAttribute("id", "dueDate")
	dateInput.setAttribute("name", "dueDate")
	dateDiv.appendChild(dateLabel)
	dateDiv.appendChild(dateInput)
	const priorityDiv = document.createElement("div")
	priorityDiv.setAttribute("id", "priority")
	taskForm.appendChild(priorityDiv)
	const priorityLabel = document.createElement("label")
	priorityLabel.setAttribute("for", "priority")
	priorityLabel.innerHTML = "Priority: "
	priorityDiv.appendChild(priorityLabel)
	const buttonDiv = document.createElement("div")
	buttonDiv.classList.add("button-div")
	priorityDiv.appendChild(buttonDiv)
	const lowButton = document.createElement("button")
	lowButton.setAttribute("type", "button")
	lowButton.classList.add("low-button")
	lowButton.innerHTML = "Low"
	buttonDiv.appendChild(lowButton)
	const medButton = document.createElement("button")
	medButton.setAttribute("type", "button")
	medButton.classList.add("med-button")
	medButton.innerHTML = "Medium"
	buttonDiv.appendChild(medButton)
	const highButton = document.createElement("button")
	highButton.setAttribute("type", "button")
	highButton.classList.add("high-button")
	highButton.innerHTML = "High"
	buttonDiv.appendChild(highButton)
	lowButton.addEventListener('click', function() {
		priorityDiv.setAttribute("data-value", "Low")
		lowButton.classList.toggle("low-button-focus")
		medButton.classList.remove("med-button-focus")
		highButton.classList.remove("high-button-focus")
	})
	medButton.addEventListener('click', function() {
		priorityDiv.setAttribute("data-value", "Medium")
		medButton.classList.toggle("med-button-focus")
		lowButton.classList.remove("low-button-focus")
		highButton.classList.remove("high-button-focus")
	})
	highButton.addEventListener('click', function() {
		priorityDiv.setAttribute("data-value", "High")
		highButton.classList.toggle("high-button-focus")
		lowButton.classList.remove("low-button-focus")
		medButton.classList.remove("med-button-focus")
	})
	const projectSelectDiv = document.createElement("div")
	taskForm.appendChild(projectSelectDiv)
	const projectSelectLabel = document.createElement("label")
	projectSelectLabel.setAttribute("for", "project-select")
	projectSelectLabel.innerHTML = "Project: "
	const projectSelectInput = document.createElement("select")
	projectSelectInput.setAttribute("type", "select")
	projectSelectInput.setAttribute("id", "project-select")
	projectSelectInput.setAttribute("name", "project-select")
	projectSelectDiv.appendChild(projectSelectLabel)
	projectSelectDiv.appendChild(projectSelectInput)
	const defaultProjectOption = document.createElement("option")
	defaultProjectOption.setAttribute("value", "none")
	defaultProjectOption.setAttribute("data-value", "none")
	defaultProjectOption.setAttribute("id", "project-option")
	defaultProjectOption.innerHTML = "-"
	projectSelectInput.appendChild(defaultProjectOption)
	const submitDiv = document.createElement("div")
	submitDiv.classList.add("submit-container")
	taskForm.appendChild(submitDiv)
	const subButton = document.createElement("button")
	subButton.innerHTML = "Add"
	subButton.classList.add("submit-button")
	subButton.setAttribute("type", "button")
	submitDiv.appendChild(subButton)
	subButton.addEventListener('click', function() {
		lowButton.classList.remove("low-button-focus")
		medButton.classList.remove("med-button-focus")
		highButton.classList.remove("high-button-focus")
		addTask()
		document.querySelector(".task-form").reset()
	})

	function closeForm() {
		document.querySelector(".pop-up-container").style.display = "none";
	}
}