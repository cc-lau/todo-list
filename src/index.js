import './style.css'
import inbox from './inbox.png';
import today from './calendar-today.png';
import important from './calendar-star-outline.png'
import week from './calendar-week.png';
import project from './package.png';
import downArrow from './chevron-down.png';
//import upArrow from './chevron-up.png';
import plus from './plus.png'
import loadToday from './loadToday.js'
import loadImportant from './loadImportant.js';
import loadWeek from './loadWeek.js';
import loadInbox from './loadInbox.js';
import loadForm from './loadForm.js';
import loadProjectForm from './projects.js'
import {
	userProjects
} from './projects.js';
export {
	contentTitle,
	contentContainer,
	taskContainer,
	mainContainer,
	popUpContainer,
	projectPopUpContainer,
	selectionContainer,
	sideBarList,
	inboxSelect,
	todaySelect,
	weekSelect,
	importantSelect,
	projectSelect,
	addPlus,
}
const godContainer = document.createElement("div")
godContainer.classList.add("god-container")
document.body.appendChild(godContainer)
//HEADER
const header = document.createElement("div")
header.classList.add("header")
godContainer.appendChild(header)
const headerText = document.createElement("h1")
headerText.classList.add("header-text")
headerText.innerHTML = "Best To-Do App Ever"
header.appendChild(headerText)
/****************************/
//MAIN CONTAINER
const mainContainer = document.createElement("div")
mainContainer.classList.add("main-container")
godContainer.appendChild(mainContainer)
/****************************/
//SIDEBAR
const sideBar = document.createElement("div")
sideBar.classList.add("side-bar")
mainContainer.appendChild(sideBar)
const selectionContainer = document.createElement("div")
selectionContainer.classList.add("selection-container")
sideBar.appendChild(selectionContainer)
const sideBarList = document.createElement("ul")
selectionContainer.appendChild(sideBarList)
//SIDEBAR SELECTIONS
const inboxSelect = document.createElement("li")
inboxSelect.classList.add("selection", "inbox")
sideBarList.appendChild(inboxSelect)
const inboxIcon = new Image();
inboxIcon.src = inbox;
inboxSelect.appendChild(inboxIcon);
const inboxTitle = document.createElement("p")
inboxTitle.innerHTML = "Inbox"
inboxSelect.appendChild(inboxTitle)
inboxSelect.addEventListener('click', function() {
	loadInbox();
})
const todaySelect = document.createElement("li")
todaySelect.classList.add("selection", "today")
sideBarList.appendChild(todaySelect)
const todayIcon = new Image();
todayIcon.src = today;
todaySelect.appendChild(todayIcon);
const todayTitle = document.createElement("p")
todayTitle.innerHTML = "Today"
todaySelect.appendChild(todayTitle)
todaySelect.addEventListener('click', function() {
	loadToday();
})
const weekSelect = document.createElement("li")
weekSelect.classList.add("selection", "week")
sideBarList.appendChild(weekSelect)
const weekIcon = new Image();
weekIcon.src = week;
weekSelect.appendChild(weekIcon);
const weekTitle = document.createElement("p")
weekTitle.innerHTML = "Week"
weekSelect.appendChild(weekTitle)
weekSelect.addEventListener('click', function() {
	loadWeek();
})
const importantSelect = document.createElement("li")
importantSelect.classList.add("selection", "important")
sideBarList.appendChild(importantSelect)
const importantIcon = new Image();
importantIcon.src = important;
importantSelect.appendChild(importantIcon);
const importantTitle = document.createElement("p")
importantTitle.innerHTML = "Important"
importantSelect.appendChild(importantTitle)
importantSelect.addEventListener('click', function() {
	loadImportant();
})
const projectSelect = document.createElement("li")
projectSelect.classList.add("selection")
projectSelect.classList.add("project-select")
projectSelect.setAttribute("id", "project-value")
sideBarList.appendChild(projectSelect)
const projectIcon = new Image();
projectIcon.src = project;
projectSelect.appendChild(projectIcon);
const projectTitle = document.createElement("p")
projectTitle.innerHTML = "Projects"
projectSelect.appendChild(projectTitle)
const projectPlus = new Image();
projectPlus.src = plus;
projectSelect.appendChild(projectPlus);
projectPlus.classList.add("project-plus")
const projectPopUpContainer = document.createElement("div")
projectPopUpContainer.classList.add("project-pop-up-container")
godContainer.appendChild(projectPopUpContainer);
projectSelect.addEventListener('click', function() {
	projectPopUpContainer.style.display = "flex";
})
/****************************/
//CONTENT CONTAINER 
const contentContainer = document.createElement("div")
contentContainer.classList.add("content-container")
mainContainer.appendChild(contentContainer)
const titleAndAddContainer = document.createElement("div")
titleAndAddContainer.classList.add("title-add-container")
contentContainer.appendChild(titleAndAddContainer)
const contentTitle = document.createElement("div")
contentTitle.classList.add("content-title")
contentTitle.innerHTML = "Inbox"
titleAndAddContainer.appendChild(contentTitle)
const addPlus = document.createElement("div")
addPlus.classList.add("add-plus-container", "selection")
titleAndAddContainer.appendChild(addPlus)
const addTitle = document.createElement("h1")
addTitle.innerHTML = "Add Task"
addTitle.classList.add("add-title")
addPlus.appendChild(addTitle)
const plusIcon = new Image();
plusIcon.classList.add("plus-icon")
plusIcon.src = plus;
addPlus.appendChild(plusIcon);
const taskContainer = document.createElement("div")
taskContainer.classList.add("task-container")
contentContainer.appendChild(taskContainer)
const popUpContainer = document.createElement("div")
popUpContainer.classList.add("pop-up-container")
godContainer.appendChild(popUpContainer);
addPlus.addEventListener('click', function() {
	document.querySelector(".submit-button").textContent = "Add"
	popUpContainer.style.display = "flex";
})
/****************************/
//FOOTER
const footer = document.createElement("div")
footer.classList.add("footer")
godContainer.appendChild(footer)
const footerText = document.createElement("p")
footer.classList.add("footer-text")
footer.innerHTML = "&#169; cc-lau 2022"
footer.appendChild(footerText)
loadForm();
loadProjectForm();