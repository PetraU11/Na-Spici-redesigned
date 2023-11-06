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


const header = document.querySelectorAll(".carte__drink-header-list")
const drinkList = document.querySelectorAll(".carte__drink-list")

header.forEach((h3, index) => {
    h3.addEventListener('click', () => {
        drinkList.forEach((list, listIndex) => {
            if (listIndex !== index) {
                list.classList.remove("shown")
            }
        })
    drinkList[index].classList.toggle("shown")
})})

drinkList.forEach((list) => {
    list.addEventListener("click",() => {
        list.classList.remove("shown")
    } )
})





