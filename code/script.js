// All the DOM selectors stored as short variables
const chat = document.getElementById("chat")
const nameForm = document.getElementById("name-form")
const inputwrapper = document.getElementById("input-wrapper")

// Global variables, if you need any, declared here

// Functions declared here

const nameInput = document.getElementById("name-input")

const handleNameInput = (event) => {
  event.preventDefault()

  showMessage(nameInput.value, "user")

  nameInput.value = ""

  setTimeout(()=> question1(), 1000)

  

  }

  const question1 = () => {
    showMessage("Hur ofta vill du spara?", "bot")
    inputwrapper.innerHTML = `
    <button id="button1">Lite varje månad</button>
    <button id="button2">Ett engångsbelopp</button>`
    document.getElementById("button1")
    .addEventListener("click", () => question2())
    document.getElementById("button2")
    .addEventListener("click", () => answer1())

  }

  const question2 = () => {
    showMessage("Strålande! Att spara lite varje månad gör att du sprider riskerna. Hur mycket vill du spara i månaden?", "bot")
    inputwrapper.innerHTML = `
    <button id="button3">Över 500 kr</button>
    <button id="button4">Under 500 kr</button>`
    document.getElementById("button3")
    .addEventListener("click", () => question3())
    document.getElementById("button4")
    .addEventListener("click", () => answer1())
  }

  const question3 = () => {
    showMessage("Så den sista och kanske viktigaste frågan! Vad brinner du mest för?", "bot")
    inputwrapper.innerHTML = `
    <button id="button5">Miljö & klimat</button>
    <button id="button6">Sociala frågor</button>
    <button id="button7">Jämställdhet</button>`
    document.getElementById("button5")
    .addEventListener("click", () => answer2())
    document.getElementById("button6")
    .addEventListener("click", () => answer2())
    document.getElementById("button7")
    .addEventListener("click", () => answer3())
  }

  const answer1 = () => {
    showMessage("Hållbara aktier kanske passar dig!", "bot")
    inputwrapper.innerHTML = `
    <button onclick="window.location.href=('https://www.aktieinvest.se/hallbart-sparande/hallbara-aktier')">Läs mer om hållbara aktier!</button>`
  }

  const answer2 = () => {
    showMessage("Hållbarhetsboxen kanske passar dig!", "bot")
    inputwrapper.innerHTML = `
    <button onclick="window.location.href=('https://www.aktieinvest.se/hallbarhetsboxen')">Läs mer om hållbarhetsboxen!</button>`
  }

  const answer3 = () => {
    showMessage("Framtidsfeministens sparbox kanske passar dig!", "bot")
    inputwrapper.innerHTML = `
    <button onclick="window.location.href=('https://www.aktieinvest.se/framtidsfeministen')">Läs mer om Framtidsfeministens sparbox!</button>`
  }

// This function will add a chat bubble in the correct place based on who the sender is
function showMessage(message, sender) {
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
        <img src="assets/aiv-bot_400x400.jpg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Hej på dig! Vad heter du?`, "bot")
  // Just to check it out, change "bot" to "user" here 👆
}

// Set up your eventlisteners here

document.getElementById("name-form").addEventListener("submit", handleNameInput)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
