const menuButton = document.querySelector("#menu__itemActive")
menuButton.classList.add(".menu__item.active");

const divWrapper = document.querySelectorAll(".events_news-group-hide-show-wrapper")
const displayMenu = document.querySelectorAll(".events__news-group-display")
const menuToDisplay = document.querySelectorAll(".events__news-group--img-menu")
const menuToHide = document.querySelectorAll(".events__news-group-hide")
const arrowDown = document.querySelectorAll(".button-arrow")


divWrapper.forEach((menu, index) => {

    menu.addEventListener("click", () => {
    
    displayMenu.forEach((toshow, showIndex) => {
        if(toshow.classList.contains("hidden-button")){
            toshow.classList.remove("hidden-button")
           } else { toshow.classList.add("hidden-button")}

        if(showIndex != index){
            toshow.classList.remove("hidden-button")
        }
    })
    
    menuToDisplay[index].classList.toggle("hidden")

    menuToHide.forEach((tohide, hideIndex) =>{
       if(tohide.classList.contains("hidden-button")){
        tohide.classList.remove("hidden-button")
       } else {tohide.classList.add("hidden-button")}

        if (hideIndex != index){
            tohide.classList.add("hidden-button")
         } 


         arrowDown.forEach((hideArrow, hideArrowIndex) => {
            if(hideArrow.classList.contains("hidden-button")){
                hideArrow.classList.remove("hidden-button")
               } else {hideArrow.classList.add("hidden-button")}

            if (hideArrowIndex != index){
                hideArrow.classList.remove("hidden-button")
             } 
        })
    })

    



    })

})



