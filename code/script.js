// All the DOM selectors stored as short variables
const chat = document.getElementById("chat")
const nameForm = document.getElementById("name-form")
const nameInput = document.getElementById("name-input")
const inputWrapper = document.getElementById("input-wrapper")

// Global variables, if you need any, declared here

// Vi deklarerar userName som en global variabel för att sedan
// ge den ett nytt värde i fråga 1, samt för att kunna använda
// den i sammanfattningen från boten
let userName = ""

// Här lägger vi till id="select" för att kunna hämta dem senare
// och lyssna på dem.
const pizzaMenu = `
  <select id="select">
    <option value="" selected disabled>Välj en pizza...</option>
    <option value="Margerita">Margerita</option>
    <option value="Vesuvio">Vesuvio</option>
    <option value="Pepperoni">Pepperoni</option>
  </select>
`

const pastaMenu = `
  <select id="select">
    <option value="" selected disabled>Välj en pasta...</option>
    <option value="Carbonara">Pasta Carbonara</option>
    <option value="Pomodoro">Pasta Pomodoro</option>
    <option value="Frutti Di Mare">Frutti Di Mare</option>
  </select>
`

const saladMenu = `
  <select id="select">
    <option value="" selected disabled>Välj en sallad...</option>
    <option value="Grekisk sallad">Grekisk sallad</option>
    <option value="Pomodoro">Pasta Pomodoro</option>
    <option value="Frutti Di Mare">Frutti Di Mare</option>
  </select>
`

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

//Sammanfattning

// Vi deklarerar vår sista funktion med två parametrar
const askForConfirmation = (amount, selectedDish) => {
  
  // Vi tömmer input-fältet
  inputWrapper.innerHTML = ""

  // Vi skickar ett meddelande från botten med hjälp av parametrarna
  showMessage(`Okej, vi har tagit emot din order på ${amount} ${selectedDish}! Är du säker på att du vill beställa detta?`, "bot")
  
  // Vi byter ut HTML:en till två knappar och ger dem varsitt id
  inputWrapper.innerHTML = `
    <button id="restart">Nej ✋</button>
    <button id="confirm">Ja 😋</button>
  `
  
  // Vi hämtar knapparna för att sedan kunna lyssna på knapptryck
  // Nej-knappen har id="restart" och då kallar vi på en inbyggd
  // JavaScript-funktion för att ladda om sidan.
  document.getElementById("restart").addEventListener("click", () => location.reload())
  
  // Ja-knappen har id="confirm"
  document.getElementById("confirm").addEventListener("click", () => {
    
    // Vi tömmer då input-fältet
    inputWrapper.innerHTML = ""

    // Vi skickar ett meddelande från användaren
    showMessage("Ja 😋", "user")

    // Vi skickar vårt sista meddelande från boten och använder dels
    // parametrarna amount och selectedDish, men också den globala
    // variabeln userName
    setTimeout(() => showMessage(`Tack ${userName} för din beställning av ${amount} ${selectedDish}!`, "bot"), 1000)
  })
}

//Fråga 4

// Vi deklarerar askForAmount-funktionen med selectedDish som parameter
const askForAmount = selectedDish => {
  
  // Vi skickar ett meddelande från boten och hämtar då upp parametern
  showMessage(`Hur många ${selectedDish} vill du ha?`, "bot")

  // Vi byter ut input-fältets HTML för att visa en numerisk input och
  // en knapp. Vi ger dem varsitt id för att kunna använda dem nedan.
  inputWrapper.innerHTML = `
    <input type="number" id="amount"/>
    <button id="amount-btn" class="send-btn">
      Skicka
    </button>
  `
  
  // Vi sparar den numeriska inputten i en variabel
  const amountInput = document.getElementById("amount")

  // Vi hämtar knappen för att kunna lyssna på knapptrycket.
  document.getElementById("amount-btn").addEventListener("click", () => {
    
    // Vid knapptryck skickar vi först ett meddelande från användaren
    // med värdet av den numeriska inputten
    showMessage(amountInput.value, "user")

    // Därefter kallar vi på nästa funktion med en fördröjning. Vi skickar
    // med både värdet av den numeriska inputten och den valda maträtten
    // som argument.
    setTimeout(() => askForConfirmation(amountInput.value, selectedDish), 1000)
  })
}

//Fråga 3
const askForDish = foodChoice => {
  showMessage(`Vilken typ av ${foodChoice} vill du ha?`, "bot")

  if (foodChoice === "pizza") {
    inputWrapper.innerHTML = pizzaMenu
  } else if (foodChoice === "pasta") {
    inputWrapper.innerHTML = pastaMenu
  } else {
    inputWrapper.innerHTML = saladMenu
  }

  // Vi hämtar rullgardins-menyn från HTML:en med hjälp av dess id
  const selectedDish = document.getElementById("select")

  // Vi lyssnar på en förändring i rullgardinmenyn
  selectedDish.addEventListener("change", () => {
    
    // Vi skickar värdet av rullgardinsvalet som ett meddelande från
    // användaren.
    showMessage(selectedDish.value, "user")

    // Vi kallar på askForAmount-funktionen med fördröjning. Vi skickar
    // med värdet av rullgardinsmenyn som ett argument.
    setTimeout(() => askForAmount(selectedDish.value), 1000)
  })
}

// Fråga 2
const askForFood = userName => {
  showMessage(`Trevligt att träffas, ${userName}! Vad vill du äta idag?`, "bot")
  
  inputWrapper.innerHTML=`
    <button id="pizzaButton">Pizza</button>
    <button id="pastaButton">Pasta</button>
    <button id="saladButton">Sallad</button>
  `

  document
    .getElementById("pizzaButton")
    .addEventListener("click", () => {
      // Vi definierar vad som ska hända när användaren klickar på en
      // av matknapparna inuti måsvingar för att kunna skriva flera
      // rader. Vi skickar först ett meddelande från användaren och
      // sedan fördröjer vi hela anropet av askForDish-funktionen med
      // hjälp av setTimeout-funktionen. På samma sätt för alla tre knappar.
      showMessage(`Jag vill ha pizza`, "user")
      setTimeout(() => askForDish("pizza"), 1000)
    })
  document
    .getElementById("pastaButton")
    .addEventListener("click", () => {
      showMessage(`Jag vill ha pasta`, "user")
      setTimeout(() => askForDish("pasta"), 1000)
    })
  document
    .getElementById("saladButton")
    .addEventListener("click", () => {
      showMessage(`Jag vill ha sallad`, "user")
      setTimeout(() => askForDish("sallad"), 1000)
    })
}


// Fråga 1
const handleNameInput = event => {
  event.preventDefault()

  // Här tog vi bort const-deklarationen eftersom vi istället
  // deklarerar userName som en global variabel högst upp. Vi
  // deklarerade den med let på rad 12 - för att kunna ge den
  // ett nytt värde på raden nedan
  userName = nameInput.value
  nameInput.value = ""
  showMessage(userName, "user")

  setTimeout(() => askForFood(userName), 1000)
}

// Starts here
const greeting = () => {
  showMessage("Hej, vad heter du?", "bot")
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
nameForm.addEventListener("submit", handleNameInput)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
