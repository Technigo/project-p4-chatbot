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
    setTimeout(() => showDrinkTypes(message), 1000)
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
  botReply(`Hey, my name is Ben. I'll help you placing your order. What is your name?`)
}

const showDrinkTypes = (msg) => {
  questionNumber++
  botReply(
    `Great, so let's start! What kind of beer are you looking for, ${msg}?`
  )

  inputWrapper.innerHTML = `
    <button id="lagerBtn">Lager</button>
    <button id="palealeBtn">Pale Ale</button>
    <button id="ipaBtn">IPA</button>
  `

  document
    .getElementById('lagerBtn')
    .addEventListener('click', () => nextQuestion('Lager'))
  document
    .getElementById('palealeBtn')
    .addEventListener('click', () => nextQuestion('Pale Ale'))
  document
    .getElementById('ipaBtn')
    .addEventListener('click', () => nextQuestion('IPA'))
}

const showMenu = (type) => {
  questionNumber++

  botReply(
    `Perfect choice! ${type} is always good.`
  )

  if (type === 'Lager' || 'Pale Ale' || 'IPA') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>➡️ Select what crate size you'd like</option>
        <option value="s">6 bottles</option>
        <option value="m">12 bottles</option>
        <option value="l">24 bottles</option>
      </select>
    `
  }

const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value))
}

const showPrice = (select) => {
  questionNumber++

  let price
    if (select === 's') {
      price = '24.00 CHF .-' 
    } else if (select === 'm') {
      price = '40.00 CHF'
    } else  if (select === 'l') {
      price = '75.00 CHF'
    } else if (select === 'other') {
      price = '30.00 CHF'
    } else {
      price = 'We are sorry, something went wrong. Please contact our customer service.'
    }

  botReply(
    `That'll be ${price}. Does that sound right?`
  )

  inputWrapper.innerHTML = `
    <button id="restart">Not sure yet. I'd rather try again.</button>
    <button id="confirm">Send me all the beer!</button>
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
  botReply(`Thanks for your order, we'll make sure to dispatch order as quickly as possible. It's already almost on its way!`)
  inputWrapper.innerHTML = ``
}

sendBtn.addEventListener('click', () => nextQuestion(input.value))
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})

// When website loaded, chatbot asks first question.
setTimeout(greeting, 1000)