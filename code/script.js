// All the DOM selectors stored as short variables
const chat = document.getElementById("chat")
const nameForm = document.getElementById("name-form")
const nameInput = document.getElementById("name-input")
const inputWrapper = document.getElementById("input-wrapper")

// Global variables, if you need any, declared here

let userName = ""

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

    //#1. Vi ger sektionen med klassnam user-msg ett till klassnamn
    //    som vi döper till fade-in
    chat.innerHTML += `
      <section class="user-msg fade-in">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === "bot") {
    //#2. Vi ger sektionen med klassnam bot-msg samma
    chat.innerHTML += `
      <section class="bot-msg fade-in">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  //#3. Med 3 sekunders fördröjning hämtar vi alla sektioner som har
  //    klassnamnet "fade-in". Glöm inte punkten - det är så
  //    querySelectorAll-metoden förstår att den ska hämta med hjälp
  //    av klass.
  setTimeout(() => {
    document
      .querySelectorAll(".fade-in")

      //#4. För varje sektion (chatbubbla) ber vi sedan om att ta bort
      //    klassnamnet fade-in. Detta för att inte alla meddelanden
      //    ska ha "fade-in", så fort det kommer ett nytt meddelande.
      //    Bara den nyaste ska ha den effekten. Nästa steg hittar du i
      //    CSS-filen!
      .forEach((chatBubble) => {
        chatBubble.classList.remove('fade-in')
      })
  }, 1000)

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

//Sammanfattning
const askForConfirmation = (amount, selectedDish) => {
  inputWrapper.innerHTML = ""
  showMessage(`Okej, vi har tagit emot din order på ${amount} ${selectedDish}! Är du säker på att du vill beställa detta?`, "bot")
  inputWrapper.innerHTML = `
    <button id="restart">Nej ✋</button>
    <button id="confirm">Ja 😋</button>
  `
  document.getElementById("restart").addEventListener("click", () => location.reload())
  document.getElementById("confirm").addEventListener("click", () => {
    inputWrapper.innerHTML = ""
    showMessage("Ja 😋", "user")
    setTimeout(() => showMessage(`Tack ${userName} för din beställning av ${amount} ${selectedDish}!`, "bot"), 1000)
  })
}

//Fråga 4
const askForAmount = selectedDish => {
  showMessage(`Hur många ${selectedDish} vill du ha?`, "bot")

  inputWrapper.innerHTML = `
    <input type="number" id="amount"/>
    <button id="amount-btn" class="send-btn">
      Skicka
    </button>
  `
  const amountInput = document.getElementById("amount")

  document.getElementById("amount-btn").addEventListener("click", () => {
    showMessage(amountInput.value, "user")
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

  const selectedDish = document.getElementById("select")

  selectedDish.addEventListener("change", () => {
    showMessage(selectedDish.value, "user")
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
