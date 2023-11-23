const menuButton = document.querySelector("#menu__itemActive")
menuButton.classList.add(".menu__item.active");

const divWrapper = document.querySelectorAll(".events_news-group-hide-show-wrapper")
const displayMenu = document.querySelectorAll(".events__news-group-display")
const menuToDisplay = document.querySelectorAll(".events__news-group--img-menu")
const menuToHide = document.querySelectorAll(".events__news-group-hide")


divWrapper.forEach((menu, index) => {

    menu.addEventListener("click", () => {
    
    displayMenu.forEach((toshow, showIndex) => {
        toshow.classList.add("hidden-button")
        if(showIndex != index){
            toshow.classList.remove("hidden-button")
        }
    })
    
    menuToDisplay[index].classList.toggle("hidden")

    menuToHide.forEach((tohide, hideIndex) =>{
        tohide.classList.remove("hidden-button")
         if (hideIndex != index){
            tohide.classList.add("hidden-button")
         }

       
    })

    
    displayMenu[indexHide].classList.remove("hidden")
    menuToDisplay[indexHide].classList.add("hidden")
   

    })
})



