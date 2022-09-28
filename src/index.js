import './style.css'
/* import loadPage from './loadPage.js'


loadPage() */








import inbox from './inbox.png';
import today from './calendar-today.png';
import important from './calendar-star-outline.png'
import week from './calendar-week.png';
import project from './package.png';
import downArrow from './chevron-down.png';
//import upArrow from './chevron-up.png';
import loadToday from './loadToday.js'
import loadImportant from './loadImportant.js';
import loadWeek from './loadWeek.js';
import loadInbox from './loadInbox.js';

export { contentTitle }


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
    inboxSelect.addEventListener('click', function () {
        loadInbox();
    })


    const todaySelect = document.createElement("li")
    sideBarList.appendChild(todaySelect)
    const todayIcon = new Image();
    todayIcon.src = today;
    todaySelect.appendChild(todayIcon);
    const todayTitle = document.createElement("p")
    todayTitle.innerHTML = "Today"
    todaySelect.appendChild(todayTitle)
    todaySelect.addEventListener('click', function () {
        loadToday();
    })


    const weekSelect = document.createElement("li")
    sideBarList.appendChild(weekSelect)
    const weekIcon = new Image();
    weekIcon.src = week;
    weekSelect.appendChild(weekIcon);
    const weekTitle = document.createElement("p")
    weekTitle.innerHTML = "Week"
    weekSelect.appendChild(weekTitle)
    weekSelect.addEventListener('click', function () {
        loadWeek();
    })


    const importantSelect = document.createElement("li")
    sideBarList.appendChild(importantSelect)
    const importantIcon = new Image();
    importantIcon.src = important;
    importantSelect.appendChild(importantIcon);
    const importantTitle = document.createElement("p")
    importantTitle.innerHTML = "Important"
    importantSelect.appendChild(importantTitle)
    importantSelect.addEventListener('click', function () {
        loadImportant();
    })

    const projectSelect = document.createElement("li")
    projectSelect.classList.add("project-select")
    sideBarList.appendChild(projectSelect)
    const projectIcon = new Image();
    projectIcon.src = project;
    projectSelect.appendChild(projectIcon);
    const projectTitle = document.createElement("p")
    projectTitle.innerHTML = "Projects"
    projectSelect.appendChild(projectTitle)
    
    const downArrowIcon = new Image();
    downArrowIcon.src = downArrow;
    projectSelect.appendChild(downArrowIcon);
    downArrowIcon.classList.add("down-arrow")
    
    
/*     const upArrowIcon = new Image();
    upArrowIcon.src = upArrow;
    projectSelect.appendChild(upArrowIcon ); */
    /****************************/


    //CONTENT CONTAINER 
    const contentContainer = document.createElement("div")
    contentContainer.classList.add("content-container")
    mainContainer.appendChild(contentContainer)

    const contentTitle = document.createElement("div")
    contentTitle.classList.add("content-title")
    contentTitle.innerHTML = "Inbox"
    contentContainer.appendChild(contentTitle)


    /****************************/

    //FOOTER
    const footer = document.createElement("div")
    footer.classList.add("footer")
    document.body.appendChild(footer)

    const footerText = document.createElement("p")
    footer.classList.add("footer-text")
    footer.innerHTML = "&#169; cc-lau 2022"
    footer.appendChild(footerText)






















/* const test = document.createElement("div")
test.classList.add("test")
test.innerHTML = "HELLO"
document.body.appendChild(test);
 */