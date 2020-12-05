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
    setTimeout(() => ovenQuestion(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => chocolateLevel(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => howMuchTime(message), 1000)
  } else if (questionNumber === 4) {
    userReply(message)
    setTimeout(() => suggestRecipe(message), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}

// Starts here
const greeting = () => {
  questionNumber = 1
  botReply(`Welcome! I can't wait to find the perfect dessert for you &#128523 What's your name?`)
}

const ovenQuestion = (msg) => {
  questionNumber++
  botReply(
    `Nice to meet you, ${msg}. Do you feel like turning up the heat and baking something?`
  )

  inputWrapper.innerHTML = `
    <button id="yesBtn">Yes, that's hot!</button>
    <button id="noBtn">No, let's keep it cool.</button>
    <button id="maybeBtn">I don't know yet...</button>
  `

  document
    .getElementById('yesBtn')
    .addEventListener('click', () => nextQuestion(`Yes, that's hot!`))
  document
    .getElementById('noBtn')
    .addEventListener('click', () => nextQuestion(`Let's keep it cool`))
  document
    .getElementById('maybeBtn')
    .addEventListener('click', () => nextQuestion(`Don't know yet...`))
}

const chocolateLevel = (oven) => {
  questionNumber++

  botReply(
    `${oven}? Alright! How much chocolate do you want in your dessert?`
  )

  if (oven === `Yes, that's hot!`) {
    inputWrapper.innerHTML = `
    <button id="aLotBtn">Obviously A LOT!</button>
    <button id="alittleBtn">Just the regular dose</button>
    `
  } else if (oven === `Let's keep it cool`) {
    inputWrapper.innerHTML = `
    <button id="aLotBtn">Obviously A LOT!</button>
    <button id="aLittleBtn">Just the regular dose</button>
    `
  } else {
    inputWrapper.innerHTML = `
    <button id="aLotBtn">Obviously A LOT!</button>
    <button id="aLittleBtn">Just the regular dose</button>
    `
  }

document
.getElementById('aLotBtn')
.addEventListener('click', () => nextQuestion(`Obviously A LOT`))
document
.getElementById('aLittleBtn')
.addEventListener('click', () => nextQuestion(`Just the regular dose`))
}

const howMuchTime = (chocolate) => {
  questionNumber++

  botReply(`Ok, ${chocolate}, well noted. How much time do you have?`)

  if (chocolate === `Obviously A LOT`) {
  inputWrapper.innerHTML = `
    <button id="alittleTimeBtn">All the time in the world, my schedule is cleared!</button>
    <button id="muchTimeBtn">Not much, give me something quick & easy</button>
  `
} else {
  inputWrapper.innerHTML = `
  <button id="alittleTimeBtn">All the time in the world, my schedule is cleared!</button>
  <button id="muchTimeBtn">Not much, give me something quick & easy</button>
  `
}

  document
    .getElementById('alittleTimeBtn')
    .addEventListener('click', () => nextQuestion('all the time in the world'))
  document
    .getElementById('muchTimeBtn')
    .addEventListener('click', () => nextQuestion('not much time'))
}

const suggestRecipe = (time) => {
  questionNumber++

  botReply(`If you have ${time} I suggest this recipe for you:`)


const botReply = (userValue) =>{
  if (oven === `Let's keep it cool` && time === `not much time`) {  
    showMessage (`This is the recipe for you: <a href =https://cherry-on-top.netlify.app/r_tiramisu.html' target="_blank">Tiramisu</a>`, 'bot')} 
  else if (oven === `Let's keep it cool` && time === `all the time in the world`) 
    {showMessage (`This is the recipe for you: <a href =https://cherry-on-top.netlify.app/r_toblernemousse.html' target="_blank">Toblerone Mousse</a>`, 'bot')} 
  else if (oven === `Yes, that's hot!` && time === `not much time`)
    {showMessage (`This is the recipe for you: <a href =https://cherry-on-top.netlify.app/r_lavacake.html' target="_blank">Chocolate Lava Cakes</a>`, 'bot')} 
  else if (userValue ==="Artwork")
    {showMessage (`This is the recipe for you: <a href =https://cherry-on-top.netlify.app/r_brownies.html' target="_blank">Brownies</a>`, 'bot')}
  }

  botReply(
    `One ${size} sized dish will be prepared for you. That'll be ${price}. 
    Are you happy with your recipe?`
  )

  inputWrapper.innerHTML = `
    <button id="restart">No, I'll try again</button>
    <button id="confirm">Yes, let's do it!</button>
  `

  document.getElementById('restart').addEventListener('click', () => {
    location.reload()
    return false
  })
  document
    .getElementById('confirm')
    .addEventListener('click', () => nextQuestion(`Yes, let's do it!`))
}

const thankYou = () => {
  botReply(`Sweet! Have fun and enjoy your dessert!`)
  inputWrapper.innerHTML = ``
}

sendBtn.addEventListener('click', () => nextQuestion(input.value))
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})

// When website loaded, chatbot asks first question.
setTimeout(greeting, 1000)

