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