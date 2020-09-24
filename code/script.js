// All the DOM selectors stored as short variables
const chat = document.getElementById("chat")
const nameForm = document.getElementById("name-form")
const nameInput = document.getElementById("name-input")

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

// Starts here
const greeting = () => {
  showMessage("Hej, vad heter du?", "bot")
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
nameForm.addEventListener("submit", (event) => {
  //event.preventDefault() funktion förhindrar att sidan laddas om när formuläret skickas
  event.preventDefault()

  //Sparar input-värdet i en variabel
  const userName = nameInput.value

  //Loggar till konsollen för att se att variabeln innehåller det vi vill
  console.log(userName)

  //Tömmer input-fältet i browsern
  nameInput.value = ""

  //Kallar på showMessage-funktionen och skickar med userName-variabeln som meddelande,
  //och "user" som avsändare
  showMessage(userName, "user")
})

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
