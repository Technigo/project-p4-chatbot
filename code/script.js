// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const send = document.getElementById('send')
const userInput = document.getElementById('input').value


// Global variables, if you need any, declared here
let currentQuestion = 0

// Functions declared here

const showUserInput = () => {
  const userInput = document.getElementById('input').value
  showMessage(userInput, 'user')
  nextQuestion(userInput)
}

const nextQuestion = (userInput) => {
  // if userinput är detta och currentquestion har detta nummer,
  // gör då detta, dvs if question 1 && userInput ===, do this etc.
  showMessage(`Hello ${userInput}! What would you like to do?`, 'bot')
  createButtons()
}

const createButtons = () => {
  let btnBook = document.createElement("BUTTON")
  btnBook.innerHTML = "Book appointment"
  document.getElementById('input-wrapper').appendChild(btnBook)

  let btnNurse = document.createElement("BUTTON")
  btnNurse.innerHTML = "Talk to a nurse"
  document.getElementById('input-wrapper').appendChild(btnNurse)

  
}

const nextStep = () => {
  // Vad ska göras härnäst?
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
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
  showMessage(`Welcome! Please enter your full name.`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
send.addEventListener("click", showUserInput)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
