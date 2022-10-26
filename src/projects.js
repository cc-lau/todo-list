import closeWindow from './close.png';
import projectImage from './list-box-outline.png'
import {
	taskContainer,
	popUpContainer,
	projectPopUpContainer,
	selectionContainer,
	sideBarList,
	contentTitle,
	projectSelect,
} from "./index.js";
export {
	userProjects,
}
const userProjects = []
export default function loadProjectForm() {
	projectPopUpContainer.style.display = "none";
	const formContainer = document.createElement("div")
	formContainer.classList.add("pform-container")
	projectPopUpContainer.appendChild(formContainer)
	const closeDiv = document.createElement("div")
	closeDiv.classList.add("projectclose-div")
	formContainer.appendChild(closeDiv)
	const formHeader = document.createElement("div")
	formHeader.textContent = "Add Project"
	formHeader.classList.add("pform-header")
	closeDiv.appendChild(formHeader)
	const closeIcon = new Image();
	closeIcon.classList.add("close-icon")
	closeIcon.src = closeWindow;
	closeDiv.appendChild(closeIcon)
	closeIcon.addEventListener('click', closeForm)
	const projectForm = document.createElement("form")
	projectForm.classList.add("project-form")
	formContainer.appendChild(projectForm)
	const titleDiv = document.createElement("div")
	projectForm.appendChild(titleDiv)
	const titleLabel = document.createElement("label")
	titleLabel.setAttribute("for", "project-title")
	titleLabel.innerHTML = "Title: "
	const titleInput = document.createElement("input")
	titleInput.setAttribute("type", "text")
	titleInput.setAttribute("id", "project-title")
	titleInput.setAttribute("name", "project-title")
	titleDiv.appendChild(titleLabel)
	titleDiv.appendChild(titleInput)
	const submitDiv = document.createElement("div")
	submitDiv.classList.add("submit-container")
	projectForm.appendChild(submitDiv)
	const subButton = document.createElement("button")
	subButton.innerHTML = "Add"
	subButton.classList.add("submit-button")
	subButton.setAttribute("type", "button")
	submitDiv.appendChild(subButton)
	subButton.addEventListener('click', function() {
		addProject()
		closeForm()
	})

	function closeForm() {
		document.querySelector(".project-pop-up-container").style.display = "none";
		document.querySelector(".project-form").reset();
	}
}
export function addProject() {
	const project = (() => {
		const title = document.getElementById("project-title").value
		return {
			title,
		};
	})();
	userProjects.push(project);
	displayProject()

	function displayProject(index) {
		//CREATE CARD
		const card = document.createElement("li")
		card.setAttribute("id", "project-card-select")
		card.setAttribute("value", `${project.title}`)
		card.setAttribute("data-value", `${project.title}`)
		card.classList.add("selection", "project-card-select")
		sideBarList.appendChild(card);
		const projectIcon = new Image();
		projectIcon.src = projectImage;
		card.appendChild(projectIcon);
		//DISPLAY TASK CONTENTS
		const titlePara = document.createElement("p");
		titlePara.textContent = (`${project.title}`);
		card.appendChild(titlePara);
		console.log(userProjects)
		const projectOption = document.createElement("option")
		projectOption.setAttribute("value", (`${project.title}`))
		projectOption.setAttribute("id", "project-option")
		projectOption.innerHTML = (`${project.title}`)
		document.getElementById("project-select").appendChild(projectOption)
		card.addEventListener('click', function() {
			contentTitle.innerHTML = `${project.title}`
			projectSelect.setAttribute("data-value", `${project.title}`)
		})
	}
}