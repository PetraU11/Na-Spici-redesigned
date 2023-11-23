const menuButton = document.querySelector("#menu__itemActive")
menuButton.classList.add(".menu__item.active");


const displayMenu = document.querySelectorAll(".events__news-group-display")
const menuToDisplay = document.querySelectorAll(".events__news-group--img-menu")
const menuToHide = document.querySelectorAll(".events__news-group-hide")


displayMenu.forEach((menu, index) => {
    menu.addEventListener("click", () => {
    menu.classList.add("hidden")
    menuToDisplay[index].classList.toggle("hidden")

    menuToHide.forEach((tohide, hideIndex) =>{
        tohide.classList.remove("hidden-button")
         if (hideIndex != index){
            tohide.classList.add("hidden-button")
         }
    })

    })
})

menuToHide.forEach((hideMenu, indexHide) => {
    hideMenu.addEventListener("click", () => {
        hideMenu.classList.add("hidden-button")
        displayMenu[indexHide].classList.remove("hidden")
        menuToDisplay[indexHide].classList.add("hidden")
    })

})

