const drink = document.querySelector("#carte__drink")
const drinkDiv = document.querySelector(".carte__buttons-drink")

drinkDiv.addEventListener("click", () => {
    if (drink.style.display === "inline-block"){
 drink.style.display = "none"}
    else{ 
    drink.style.display = "inline-block"
 }
})


const food = document.querySelector("#carte__food")
const foodDiv = document.querySelector(".carte__buttons-food")

foodDiv.addEventListener("click", () => {
    if (food.style.display === "inline-block"){
    food.style.display = "none"}
    else {
        food.style.display = "inline-block"
    }
   })






