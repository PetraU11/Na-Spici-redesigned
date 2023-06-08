
const button = document.querySelector("#booking-button")
button.addEventListener("click", () => {
    button.textContent = "Děkujeme! Vaše rezervace byla úspěšně odeslána."
}
)

const menuButton = document.querySelector("#menu__itemActive")
menuButton.classList.add(".menu__item.active");

const menuButtonLink = document.querySelector("#menu__linkActive")
menuButtonLink.classList.add(".menu__link.active");
