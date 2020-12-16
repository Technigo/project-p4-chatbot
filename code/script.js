// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const ageForm = document.getElementById('name-form')
const ageInput = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')

// Global variables, if you need any, declared here

// Functions declared here

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
  showMessage(`Hi, I'm Glenn. I have understood that in Sweden all the pun masters are named Glenn. 
  But since my employers were instructed to cheer people up in english – They hired me.`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
  setTimeout(() => showMessage(`Anyway, I'm Glenn Close.`, 'bot'), 3000)
  setTimeout(() => showMessage(`How old are you?`, 'bot'), 5000)
}

// Question 2
const grapeQuestion = (event) => {
  showMessage("Have you heard about the baby grape that didn't want to be made into wine?", 'bot')
  inputWrapper.innerHTML = `
  <button id="yesButton">YES</button>
  <button id="noButton">NO</button>
`
  document.getElementById("yesButton").addEventListener('click', () => showMessage("Yes", 'user'))
  document.getElementById("noButton").addEventListener('click', () => showMessage("No", 'user'))

}

// Question 1
const handleAgeInput = (event) => {
event.preventDefault()
const userAge = ageInput.value
showMessage(userAge, 'user')
ageInput.value = ""
setTimeout(() => showMessage(`Ah ok, ${userAge} and getting older huh. Well here's a wine joke that only gets better with age...`, 'bot'), 2000)
setTimeout(() => grapeQuestion(event), 5000)
}

// Set up your eventlisteners here

ageForm.addEventListener('submit', handleAgeInput)



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
