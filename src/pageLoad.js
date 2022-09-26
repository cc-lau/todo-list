import inbox from './inbox.png';
import today from './calendar-today.png';
import important from './calendar-star-outline.png'
import week from './calendar-week.png';
import project from './package.png';


export default function pageLoad() {

    //HEADER
    const header = document.createElement("div")
    header.classList.add("header")
    document.body.appendChild(header)

    const headerText = document.createElement("h1")
    headerText.classList.add("header-text")
    headerText.innerHTML = "Best To-Do App Ever"
    header.appendChild(headerText)
    /****************************/

    //MAIN CONTAINER
    const mainContainer = document.createElement("div")
    mainContainer.classList.add("main-container")
    document.body.appendChild(mainContainer)
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
    sideBarList.appendChild(inboxSelect)
    const inboxIcon = new Image();
    inboxIcon.src = inbox;
    inboxSelect.appendChild(inboxIcon);
    const inboxTitle = document.createElement("p")
    inboxTitle.innerHTML = "Inbox"
    inboxSelect.appendChild(inboxTitle)


    const todaySelect = document.createElement("li")
    sideBarList.appendChild(todaySelect)
    const todayIcon = new Image();
    todayIcon.src = today;
    todaySelect.appendChild(todayIcon);
    const todayTitle = document.createElement("p")
    todayTitle.innerHTML = "Today"
    todaySelect.appendChild(todayTitle)


    const weekSelect = document.createElement("li")
    sideBarList.appendChild(weekSelect)
    const weekIcon = new Image();
    weekIcon.src = week;
    weekSelect.appendChild(weekIcon);
    const weekTitle = document.createElement("p")
    weekTitle.innerHTML = "Week"
    weekSelect.appendChild(weekTitle)


    const importantSelect = document.createElement("li")
    sideBarList.appendChild(importantSelect)
    const importantIcon = new Image();
    importantIcon.src = important;
    importantSelect.appendChild(importantIcon);
    const importantTitle = document.createElement("p")
    importantTitle.innerHTML = "Important"
    importantSelect.appendChild(importantTitle)





    const projectSelect = document.createElement("li")
    sideBarList.appendChild(projectSelect)
    const projectIcon = new Image();
    projectIcon.src = project;
    projectSelect.appendChild(projectIcon);
    const projectTitle = document.createElement("p")
    projectTitle.innerHTML = "Projects"
    projectSelect.appendChild(projectTitle)
    /****************************/


    //CONTENT CONTAINER
    const contentContainer = document.createElement("div")
    contentContainer.classList.add("content-container")
    mainContainer.appendChild(contentContainer)
    /****************************/

    //FOOTER
    const footer = document.createElement("div")
    footer.classList.add("footer")
    document.body.appendChild(footer)

    const footerText = document.createElement("p")
    footer.classList.add("footer-text")
    footer.innerHTML = "&#169; cc-lau 2022"
    footer.appendChild(footerText)

}