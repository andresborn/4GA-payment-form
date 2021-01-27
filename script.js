const form = document.getElementById("form1")
const creditCard = document.getElementById("credit-card")
const ccDate = document.getElementById("cc-date")
const amount = document.getElementById("amount")
const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const city = document.getElementById("city")
const postalCode = document.getElementById("postal-code")
const cardTypes = document.getElementsByName("card-types")
const error = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (creditCard.value === "" || creditCard.value.length < 16) {
        messages.push("Your card must be at least 16 digits")
        creditCard.style.borderColor = "red"
        error.style.display = "flex"
    }
    if (ccDate.value === "" || ccDate.value.length < 5) {
        messages.push("Your date must include day and month in format dd/mm")
        ccDate.style.borderColor = "red"
        error.style.display = "flex"
    }
    if (amount.value === "") {
        messages.push("Amount must not be empty")
        amount.style.borderColor = "red"
        error.style.display = "flex"
    }
    if (firstName.value === "") {
        messages.push("Please provide your name")
        firstName.style.borderColor = "red"
        error.style.display = "flex"
    }
    if (lastName.value === "") {
        messages.push("Please provide your last name")
        lastName.style.borderColor = "red"
        error.style.display = "flex"
    }
    if (city.value === "") {
        messages.push("Please provide your city")
        city.style.borderColor = "red"
        error.style.display = "flex"
    }
    if (postalCode.value === "") {
        messages.push("Please provide your zip code")
        postalCode.style.borderColor = "red"
        error.style.display = "flex"
    }
    if (card.Types.value === undefined || cardTypes.value === "visa" || cardTypes.value === "master-card" || cardTypes.value === "amex") {
        messages.push("Please select your brand of card")
        cardTypes.style.borderColor = "red"
        error.style.display = "flex"
    }
    if (messages.length > 0) {
        e.preventDefault();
        error.textContent = messages.join(', ')
    }
})