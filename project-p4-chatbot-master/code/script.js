// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')

// Global variables, if you need any, declared here

let questionNumber = 1

const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}

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

// Question Sequence
const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => foodOptions(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => ambianceOptions(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => showRecommendation(message), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}

// Starts here
const greeting = () => {
  questionNumber = 1
  botReply(`Welcome! What's your name?`)
}

const foodOptions = (msg) => {
  questionNumber++
  botReply(
    `Hello ${msg}! What are you in the mood to eat today?`
  )

  inputWrapper.innerHTML = `
    <button id="pizzaBtn">Pizza</button>
    <button id="mexicanBtn">Mexican</button>
    <button id="sushiBtn">Sushi</button>
  `
  document
  .getElementById('pizzaBtn')
  .addEventListener('click', () => nextQuestion('Pizza'))
  document
  .getElementById('mexicanBtn')
  .addEventListener('click', () => nextQuestion('Mexican'))
  document
  .getElementById('sushiBtn')
  .addEventListener('click', () => nextQuestion('Sushi'))
}

const ambianceOptions = (type) => {
  questionNumber++

  botReply(`${type}, sounds yummy! What ambiance are you in the mood for?`)
  
  if (type === 'pizza') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Ambiance Options</option>
        <option value="quickLunch">Quick Lunch</option>
        <option value="dateNight">Date Night</option>
        <option value="outWithFriends">Out With Friends</option>
      </select>
    `
  } else if (type === 'mexican') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Ambiance Options</option>
        <option value="quickLunch">Quick Lunch</option>
        <option value="dateNight">Date Night</option>
        <option value="outWithFriends">Out With Friends</option>
      </select>
    `
  } else {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Ambiance Options</option>
        <option value="quickLunch">Quick Lunch</option>
        <option value="dateNight">Date Night</option>
        <option value="outWithFriends">Out With Friends</option>
      </select>
    `
  }
  
  const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value))
}

const showRecommendation = (type) => {
  questionNumber++

  let recommendation
  if (type === 'pizza') {
    recommendation = 'Rosso'
  } else if (type === 'Mexican') {
    recommendation = 'La Brea'
  } else {
    recommendation = 'Negishi'
  }

  botReply(
    ` We'd recommend ${recommendation} for you! Are you happy with your result or would you like to try again?`
  )

  inputWrapper.innerHTML = `
    <button id="confirm">I'd love to eat at ${recommendation}</button>
    <button id="restart">I want to try again</button>
  `

  document.getElementById('restart').addEventListener('click', () => {
    location.reload()
    return false
  })
  document
    .getElementById('confirm')
    .addEventListener('click', () => nextQuestion('I am happy with my recommendation!'))
}

const thankYou = () => {
  botReply(`Enjoy your food!`)
  inputWrapper.innerHTML = ``
}

sendBtn.addEventListener('click', () => nextQuestion(input.value))
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})


// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
