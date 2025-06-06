// Select the dom elements infide the form

const formEl = document.getElementById ("recipe-userData")
const imputlastNameEl = document.getElementById ("lastName")
const imputkmsEl = document.getElementById ("kms")
const selectuserAgeEl = document.getElementById ("userAge")

console.log(formEl, imputlastNameEl, imputkmsEl, selectuserAgeEl)

// Select the dom elements for the card

const cardlastNamePassengerEl = document.getElementById ("lastName-passenger")
const cardofferEl = document.getElementById ("offer")
const cardcarriageEl = document.getElementById ("carriage")
const cardcodecpEl = document.getElementById ("code-cp")
const cardpriceEl = document.getElementById ("price")

console.log(cardlastNamePassengerEl, cardofferEl, cardcarriageEl, cardcodecpEl, cardpriceEl)


// Implementation

formEl.addEventListener("submit", (e) => {

    // Prevent the default behavour

    e.preventDefault()

    // Read the input values

    const lastNameValue = imputlastNameEl.value
    console.log(lastNameValue)
    const kmsValue = imputkmsEl.value
    console.log(kmsValue)
    const userAgeValue = selectuserAgeEl.value
    console.log(userAgeValue)

    // Update the dom card

    cardlastNamePassengerEl.innerHTML = lastNameValue
    //cardofferEl.innerHTML =
    //cardcarriageEl =
    //cardcodecpEl =
    cardpriceEl.innerHTML = discounted_priceValue

    // I create a variable based on km (0.21€/km)

    const price_perkms = 0.21;
    const ticket_price = price_perkms * kmsValue

    // A 20% discount applies to minors
    // A 40% discount applies to those over 65 

    let discounted_price = ticket_price;

    const percentage_discount20 = 20;
    const percentage_discount40 = 40;

    if (userAgeValue < 18) {
    const amount_discount = (ticket_price * percentage_discount20) / 100;
    discounted_price = ticket_price - amount_discount;
    } else if (userAgeValue >= 65) {
    const amount_discount = (ticket_price * percentage_discount40) / 100;
    discounted_price = ticket_price - amount_discount;
    }

})