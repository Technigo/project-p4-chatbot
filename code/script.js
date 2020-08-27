const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

let clientName = ''
let orderName = ''
let orderQuantity = ''
let orderTotal = ''
let cookingTime = ''

const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
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
    nameInput.value = ''
    setTimeout(() => showFoodTypes(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => showMenu(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => showDishSize(message), 1000)
  } else if (questionNumber === 4) {
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
  botReply(`Hello there, What's your name?`)
}

const showFoodTypes = (msg) => {
  clientName = msg
  questionNumber++
  botReply(
    `Nice to meet you ${msg}. What type of pizza would you like to order?`
  )

  inputWrapper.innerHTML = `
    <button id="vegetarianBtn">${vegetarian}</button>
    <button id="hawaiianBtn">${hawaiian}</button>
    <button id="pepperoniBtn">${pepperoni}</button>
  `

  document
    .getElementById('vegetarianBtn')
    .addEventListener('click', () => nextQuestion(vegetarian))
  document
    .getElementById('hawaiianBtn')
    .addEventListener('click', () => nextQuestion(hawaiian))
  document
    .getElementById('pepperoniBtn')
    .addEventListener('click', () => nextQuestion(pepperoni))
}

const showMenu = (type) => {
  questionNumber++

  orderName = type

  botReply(
    `Oh so you're in the mood for ${type}? Great choice. How many would you like to order?`
  )
  inputWrapper.innerHTML = `
  <input id="order-quantity" type="number"/>
  <button id="send-order-btn" class="send">Send</button>
  `
  orderQuantity = document.getElementById('order-quantity')

  document.getElementById("send-order-btn").addEventListener('click', () => {
    if (orderQuantity.value < 1) {
      botReply(
        `You can't order ${orderQuantity.value} pizzas, silly!`
      )
    } else if (orderQuantity.value > 10) {
      botReply(
        `You can only order 10 pizzas at a time at this popular pizzeria`
      )
    } else {
      nextQuestion(orderQuantity.value)
    }
  })

}

const showDishSize = (dish) => {
  questionNumber++

  orderTotal = orderQuantity.value * pizzaPrice
  
  cookingTime = () => {
    if (orderQuantity <= 2) {
      return 10
    }
    else if (orderQuantity >= 3 && orderQuantity <= 5) {
        return 15
    }
    else {
        return 20
    }
  }

  botReply(`${orderQuantity.value} ${orderName} coming up! That will be ${orderTotal} kr, and it will take ${cookingTime()} minutes.`)

  inputWrapper.innerHTML = `
    <button id="restart">Order more</button>
  `
  document.getElementById('restart').addEventListener('click', () => {
    location.reload()
    return false
  })
}

sendBtn.addEventListener('click', () => nextQuestion(nameInput.value))
nameInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && nameInput.value) nextQuestion(nameInput.value)
})

setTimeout(greeting, 1000)
