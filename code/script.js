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
        <img src="assets/user.jpg" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.jpg" alt="Bot" />
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
    setTimeout(() => showMoods(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => showType(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => showGIF(message), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}

// Starts here
const greeting = () => {
  questionNumber = 1
  botReply(`Hello there, what's your name?`)
}

const showMoods = (msg) => {
  questionNumber++
  botReply(
    `Nice to meet you ${msg}. How do you feel?`
  )

  inputWrapper.innerHTML = `
    <button id="goodBtn">Good</button>
    <button id="mehBtn">Meh</button>
    <button id="badBtn">Bad</button>
  `

  document
    .getElementById('goodBtn')
    .addEventListener('click', () => nextQuestion('good'))
  document
    .getElementById('mehBtn')
    .addEventListener('click', () => nextQuestion('meh'))
  document
    .getElementById('badBtn')
    .addEventListener('click', () => nextQuestion('bad'))
}

const showType = (type) => {
  questionNumber++

  botReply(
    `Oh so you're in a ${type} mood? Can I help you with something?`
  )

 inputWrapper.innerHTML = `
    <button id="Help me">Help me</button>
    <button id="Maybe">Maybe</button>
  `
  document
    .getElementById('Help me')
    .addEventListener('click', () => nextQuestion('Help me'))
  document
    .getElementById('Maybe')
    .addEventListener('click', () => nextQuestion('Maybe'))
}

const showGIF = (size) => {
  questionNumber++

  let gift
  if (size === 'Help me') {
    gift = 'hug  <iframe src="https://giphy.com/embed/f6y4qvdxwEDx6" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hug-cat-cute-f6y4qvdxwEDx6"></a></p>'
  } else {
    gift = 'surprise <iframe src="https://giphy.com/embed/YQAdA99SV4DElB2b4z" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/netflix-tiger-king-joe-exotic-carole-baskin-YQAdA99SV4DElB2b4z"></a></p>'
  }

  botReply(
    `I send you a ${gift} Did you like that? `
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
  botReply(`Thank you for chating with me! Stay strong during these wierd times <iframe src="https://giphy.com/embed/uo5qr8sVIOniU" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/en-junio-sabado-uo5qr8sVIOniU"></a></p>`)
  inputWrapper.innerHTML = ``
}

sendBtn.addEventListener('click', () => nextQuestion(input.value))
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})

// When website loaded, chatbot asks first question.
setTimeout(greeting, 1000)