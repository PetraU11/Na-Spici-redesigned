const drink = document.querySelector("#carte__drink")
const drinkDiv = document.querySelector(".carte__buttons-drink")

drinkDiv.addEventListener("click", () => {
 drink.style.display = "inline-block"
})



const food = document.querySelector("#carte__food")
const foodDiv = document.querySelector(".carte__buttons-food")

foodDiv.addEventListener("click", () => {
    food.style.display = "inline-block"
   })


const menuButton = document.querySelector("#menu__itemActive")
menuButton.classList.add(".menu__item.active");
   
const menuButtonLink = document.querySelector("#menu__linkActive")
menuButtonLink.classList.add(".menu__link.active");
