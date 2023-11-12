
const menuButton = document.querySelector("#menu__itemActive")
menuButton.classList.add(".menu__item.active");

const menuButtonLink = document.querySelector("#menu__linkActive")
menuButtonLink.classList.add(".menu__link.active");



//Validace údajů - email, telefonní číslo
    const button = document.querySelector("#booking-button")
    const form = document.querySelector(".booking__form")
    const emailInput = document.getElementById("email")
    const telInput = document.getElementById("tel")
    const warningMail = document.querySelector(".form__warning-email")
    const warningPhone = document.querySelector(".form__warning-phone")
   

    form.addEventListener("submit", (event) => {
        if (!validovatEmail(emailInput.value)) {
            warningMail.style.display = "block"
            event.preventDefault()
        } else if (!validovatTelefon(telInput.value)) {
            warningPhone.style.display = "block"
            event.preventDefault()
        } else {
            button.innerHTML = "Děkujeme! Vaše rezervace byla úspěšně odeslána.";
            event.preventDefault()
        }
    });


    
emailInput.addEventListener("input", function () {
    if (validovatEmail(emailInput.value)) {
        warningMail.style.display = "none"
    } else {
        warningMail.style.display = "block"
    }
})


telInput.addEventListener("input", function () {
    if (validovatTelefon(telInput.value)) {
        warningPhone.style.display = "none"
    } else {
        warningPhone.style.display = "block"
    }
})





    function validovatEmail(email) {
        const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        return emailRegex.test(email)
    }

    function validovatTelefon(telefon) {
        const telefonRegex = /^\+\d{3}\d{9}$/
        return telefonRegex.test(telefon)
    }