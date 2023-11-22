const menuButton = document.querySelector("#menu__itemActive")
menuButton.classList.add(".menu__item.active");


const displayMenu = document.querySelectorAll(".events__news-group-display")
const menuToDisplay = document.querySelectorAll(".events__news-group--img-menu")
let selectedMenu = null

displayMenu.forEach((menu, index) => {
    menu.addEventListener("click", () => {
    menu.classList.add("hidden")
    menuToDisplay[index].classList.toggle("hidden")
    })
})



/*
displayMenu.forEach((menu, index) => {
    menu.addEventListener("click", () => {

        if (selectedMenu){
            selectedMenu.classList.remove("hidden")
        }

    menu.classList.add("hidden")
    selectedMenu = menu

    menuToDisplay.forEach((list, menuList) => {
        if (menuList != index) {
            list.classList.remove("hidden")
        }

    })

menuToDisplay[index].classList.toggle("hidden")

    })
})


*/

