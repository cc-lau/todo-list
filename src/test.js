const importantSelect = document.createElement("li")
sideBarList.appendChild(importantSelect)
const importantIcon = new Image();
importantIcon.src = important;
importantSelect.appendChild(importantIcon);
const importantTitle = document.createElement("p")
importantTitle.innerHTML = "important"
importantSelect.appendChild(importantTitle)