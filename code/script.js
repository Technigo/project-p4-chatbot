// All the DOM selectors stored as short variables
const chat = document.getElementById("chat")
const nameForm = document.getElementById("name-form")
const nameInput = document.getElementById("name-input")

// Vi hämtar input-wrapper från HTML:en för att kunna byta ut innehåller
const inputWrapper = document.getElementById("input-wrapper")

// Menyer
// Jag lade till selected och disabled som attribut till det första valet
// för att det första alternativet inte ska vara valbar
const pizzaMenu = `
  <select>
    <option value="" selected disabled>Välj en pizza...</option>
    <option value="Margerita">Margerita</option>
    <option value="Vesuvio">Vesuvio</option>
    <option value="Pepperoni">Pepperoni</option>
  </select>
`

const pastaMenu = `
  <select>
    <option value="" selected disabled>Välj en pasta...</option>
    <option value="Carbonara">Pasta Carbonara</option>
    <option value="Pomodoro">Pasta Pomodoro</option>
    <option value="Frutti Di Mare">Frutti Di Mare</option>
  </select>
`

const saladMenu = `
  <select>
    <option value="" selected disabled>Välj en sallad...</option>
    <option value="Grekisk sallad">Grekisk sallad</option>
    <option value="Pomodoro">Pasta Pomodoro</option>
    <option value="Frutti Di Mare">Frutti Di Mare</option>
  </select>
`

// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

//Fråga 3

// Vi definierar foodChoice som en parameter för att kunna ta emot
// mat-valet som ett argument ("pizza", "pasta" eller "sallad")
const askForDish = foodChoice => {
  showMessage(`Jag vill ha ${foodChoice}`, "user")
  setTimeout(() => showMessage(`Vilken typ av ${foodChoice} vill du ha?`, "bot"), 1000)

  // Vi skriver ett villkor för om användaren valt pizza
  if (foodChoice === "pizza") {
    // Vi definierade menyerna som variabler högst upp i dokumentet
    // Vi byter ut innehållet i inputWrapper från knappar till en rullgardinsmeny
    inputWrapper.innerHTML = pizzaMenu

  } else if (foodChoice === "pasta") {
    // Visa pastameny
    inputWrapper.innerHTML = pastaMenu

  } else {
    // Visa salladsmeny
    inputWrapper.innerHTML = saladMenu
  }
}

// Fråga 2
// Vi definierar userName som parameter för att kunna skicka med
// den från vår förra funktion.
const askForFood = userName => {
  showMessage(`Trevligt att träffas, ${userName}! Vad vill du äta idag?`, "bot")
  
  // Vi byter ut innehållet i inputWrapper från text-input till knappar
  inputWrapper.innerHTML=`
    <button id="pizzaButton">Pizza</button>
    <button id="pastaButton">Pasta</button>
    <button id="saladButton">Sallad</button>
  `
  // Vi hämtar knapparna med hjälp av dess id:n.
  // Vi lyssnar på klick-händelsen och kallar då på funktionen som styr nästa fråga (askForDish)
  // Vi skickar med valet av mat som ett argument i form av en sträng
  // PS. Man kan skriva document.getElementById("pizzaButton").addEventListener("click", () => askForDish("pizza"))
  // på en rad, men för att göra det mer läsbart kan man formattera det som nedan
  document
    .getElementById("pizzaButton")
    .addEventListener("click", () => askForDish("pizza"))
  document
    .getElementById("pastaButton")
    .addEventListener("click", () => askForDish("pasta"))
  document
    .getElementById("saladButton")
    .addEventListener("click", () => askForDish("sallad"))
}


// Fråga 1
// Vi definierar händelsen som en parameter för att kunna förhindra
// formulärets standardbeteende (som är att ladda om sidan)
const handleNameInput = event => {
  event.preventDefault()
  const userName = nameInput.value
  nameInput.value = ""
  showMessage(userName, "user")

  // Med 1 sekunds fördröjning kallar vi på askForFood-funktionen
  // och skickar med userName-variabeln som argument.
  setTimeout(() => askForFood(userName), 1000)
}

// Starts here
const greeting = () => {
  showMessage("Hej, vad heter du?", "bot")
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
// När formuläret skickas anropas handleNameInput-funktionen.
nameForm.addEventListener("submit", handleNameInput)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
