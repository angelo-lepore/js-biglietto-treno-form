// Select the dom elements infide the form

const formEl = document.getElementById ("recipe-userData")
const cancelButtonEl = document.querySelector(".cancelButton")
const imputlastNameEl = document.getElementById ("lastName")
const imputkmsEl = document.getElementById ("kms")
const selectuserAgeEl = document.getElementById ("userAge")

console.log(formEl, imputlastNameEl, imputkmsEl, selectuserAgeEl)

// Select the dom elements for the card

const cardlastNamePassengerEl = document.getElementById ("lastName-passenger")
const cardseatNumberEl = document.getElementById ("seat-number")
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
    console.log("Nome e Cognome passeggero: " + lastNameValue)
    const kmsValue = imputkmsEl.value
    console.log("Km da percorre: " + kmsValue + "km")
    const userAgeValue = selectuserAgeEl.value
    console.log("Fascia d'età: " + userAgeValue)

    // I create a variable based on km (0.21€/km)

    const price_perkms = 0.21;
    const ticket_price = price_perkms * kmsValue

    // A 20% discount applies to minors
    // A 40% discount applies to those over 65 

    let discounted_price = ticket_price;

    const percentage_discount20 = 20;
    const percentage_discount40 = 40;

    if (userAgeValue === "underage") {
    const amount_discount = (ticket_price * percentage_discount20) / 100;
    discounted_price = ticket_price - amount_discount;
    console.log("Costo biglietto: " + discounted_price.toFixed(2) + " €");
    message = ("Biglietto sconto 20%");
    console.log(message);
    } else if (userAgeValue === "over") {
    const amount_discount = (ticket_price * percentage_discount40) / 100;
    discounted_price = ticket_price - amount_discount;
    console.log("Costo biglietto: " + discounted_price.toFixed(2) + " €");
    message = ("Biglietto sconto 40%");
    console.log(message);
    } else {
    console.log("Costo biglietto: " + discounted_price.toFixed(2) + " €")
    message = ("Biglietto Standard");
    console.log(message);
    }

    // I create a random generator for the carriage number and the cp code

    function generateRandomCarriage(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let RandomCarriage = generateRandomCarriage(1, 12);
    console.log("N. carrozza: " + RandomCarriage);

    function padWithZeros(number) {
        return number.toString().padStart(5, '0');
    }

    function generateRandomCodeCp(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let RandomCodeCp = generateRandomCodeCp(1, 99999);
    let zeroRandomCodeCp = padWithZeros(RandomCodeCp);
    console.log("Codice CP: " + zeroRandomCodeCp);

    // I create a random place generator

    function seatNumber() {
        const numberSeat = Math.floor(Math.random() * 20) + 1;
        const lettersSeat = ['A', 'B', 'C', 'D'];
        const letterSeat = lettersSeat[Math.floor(Math.random() * 4)];
        return numberSeat + letterSeat;
    }
    console.log("Posto N. " + seatNumber());
    let seat_Number = seatNumber()

    // Update the dom card

    cardlastNamePassengerEl.innerHTML = lastNameValue + " (" + userAgeValue + ")"
    cardofferEl.innerText = message
    cardseatNumberEl.innerText = seat_Number
    cardcarriageEl.innerText = RandomCarriage
    cardcodecpEl.innerText = zeroRandomCodeCp
    cardpriceEl.innerText = discounted_price.toFixed(2) + " €";
})

// Cancel button set to reload page

cancelButtonEl.addEventListener("click", () => location.reload());
