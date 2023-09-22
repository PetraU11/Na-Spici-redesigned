const menuButton = document.querySelector("#menu__itemActive")
menuButton.classList.add(".menu__item.active");

const menuButtonLink = document.querySelector("#menu__linkActive")
menuButtonLink.classList.add(".menu__link.active");


const showButton = document.getElementById("showList")
const hideButton = document.getElementById("hideList")
const listPartTwo = document.getElementById("listSecondPart")

showButton.addEventListener("click", () => {
listPartTwo.style.display = "inline-block"
showButton.style.display = "none"
hideButton.style.display = "inline-block"
})

hideButton.addEventListener("click", () => {
    listPartTwo.style.display = "none"
    hideButton.style.display = "none"
    showButton.style.display = "inline-block"

})