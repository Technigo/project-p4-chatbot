// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')

let questionNumber = 1

const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}

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
  chat.scrollTop = chat.scrollHeight
}

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => showFoodTypes(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => showMenu(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => showPrice(message), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}

// Starts here
const greeting = () => {
  questionNumber = 1
  botReply(`Hei. I'm Scandi - what is your name?`)
}

const showFoodTypes = (msg) => {
  questionNumber++
  botReply(
    `Lovely to meet you, ${msg}. Which delicious Scandinavian treat would you like to order?`
  )

  inputWrapper.innerHTML = `
    <button id="cinnamonBtn">Korvapuusti - Cinnamon Bun</button>
    <button id="cardamomBtn">Kardemummapulla - Cardamom Bun</button>
    <button id="quarkBtn">Rahkapulla - Quark-filled Bun</button>
  `

  document
    .getElementById('cinnamonBtn')
    .addEventListener('click', () => nextQuestion('Cinnamon Bun'))
  document
    .getElementById('cardamomBtn')
    .addEventListener('click', () => nextQuestion('Cardamom Bun'))
  document
    .getElementById('quarkBtn')
    .addEventListener('click', () => nextQuestion('Quark-filled Bun'))
}

const showMenu = (type) => {
  questionNumber++

  botReply(
    `Great choice! The ${type}s are just freshly out of the oven. How many would you like to order?`
  )

  if (type === 'Cinnamon Bun') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>➡️ Select how many treats you want ...</option>
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
      </select>
    `
  } else if (type === 'Cardamom Bun') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>➡️ Select how many treats you want ...</option>
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
      </select>
    `
  } else {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>➡️ Select how many treats you want ...</option>
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
      </select>
    `
  }

const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value))
}

const showPrice = (select) => {
  questionNumber++

  let price
    if (select === 'One') {
        price = 'CHF 3.-' 
    }   else if (select === `Two`) {
        price = `CHF 6.-`
    }   else {
        price = 'CHF 12.-'
  }

  botReply(
    `That'll be ${price} . Are you sure you want to order this?`
  )

  inputWrapper.innerHTML = `
    <button id="restart">NO</button>
    <button id="confirm">YES</button>
  `

  document.getElementById('restart').addEventListener('click', () => {
    location.reload()
    return false
  })
  document
    .getElementById('confirm')
    .addEventListener('click', () => nextQuestion('Yes!'))
}

const thankYou = () => {
  botReply(`Kiitos - Thank you for your order! Enjoy your treats! Moikka 👋🏼`)
  inputWrapper.innerHTML = ``
}

sendBtn.addEventListener('click', () => nextQuestion(input.value))
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})

// When website loaded, chatbot asks first question.
setTimeout(greeting, 1000)
