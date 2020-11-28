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
    setTimeout(() => showCodeTypes(message), 1000)

  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => showMenu(message), 1000)
  } else if (questionNumber === 3) {

    userReply(message)
    setTimeout(() => showLike(message), 1000)

  } else if (questionNumber === 4) {
    userReply(message)
    setTimeout(() => showFeeling(message), 1000)

  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}

// Starts here
const greeting = () => {
  questionNumber = 1
  botReply(`Hello! What's your name?`)
}

const showCodeTypes = (msg) => {
  questionNumber++
  botReply(
    `Nice to meet you ${msg}. What do you think the programming-beginners liked most about this course?`
  )

  inputWrapper.innerHTML = `
    <button id="htmlBtn">Html!</button>
    <button id="cssBtn">CSS</button>
    <button id="jsBtn">JavaScript</button>
  `

  document
    .getElementById('htmlBtn')
    .addEventListener('click', () => nextQuestion('Html!'))

  document
    .getElementById('cssBtn')
    .addEventListener('click', () => nextQuestion("CSS"))

  document
    .getElementById('jsBtn')
    .addEventListener('click', () => nextQuestion("Javascript"))
}

const showMenu = (type) => {
  questionNumber++
  botReply(
    `Oh interesting, that you picked ${type}.`
  )

  if (type === 'Html!') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Why did you pick it?</option>
        <option value="So easy to get started">So easy to get started</option>
        <option value="It's the base of everything!">It's the base of everything!</option>
      </select>
    `
  } else if (type === "CSS") {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Why did you pick it?</option>
        <option value="Styling is the best! Design over everything!">Styling is the best! Design over everything!</option>
        <option value="Very creative and shows individuality">Very creative and shows individuality</option>
      </select>
    `

  } else if (type === "Javascript") {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Why did you pick it?</option>
        <option value="Advanced skill">Advanced skill</option>
        <option value="Making every page interactive">Making every page interactive</option>
      </select>
    `
  }

  const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value))
}

const showLike = (like) => {
  questionNumber++
  botReply(`O cool! Find out what i felt about it.`)
  inputWrapper.innerHTML = `
    <button id="Html/CSS">Html/CSS</button>
    <button id="Javascript">Javascript</button>
  `

  document
    .getElementById('Html/CSS')
    .addEventListener('click', () => nextQuestion('Html/CSS'))

  document
    .getElementById('Javascript')
    .addEventListener('click', () => nextQuestion('Javascript'))
}

const showFeeling = (feeling) => {
  questionNumber++
  let gif
  if (feeling === 'Html/CSS') {
    gif = '<iframe src="https://giphy.com/embed/XreQmk7ETCak0" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/retro-thumbs-up-XreQmk7ETCak0"></a></p>'

  } else {
    gif = '<iframe src="https://giphy.com/embed/ySpxjJmsq9gsw" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ySpxjJmsq9gsw"></a></p>'
  }

  botReply(
    `This is how i felt about it: ${gif} Are you surprised? `
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
  botReply(`There were some up and downs, but it was amazing! THANK YOU SO MUCH!`)
  inputWrapper.innerHTML = ``
}

sendBtn.addEventListener('click', () => nextQuestion(input.value))

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})

// When website loaded, chatbot asks first question.

setTimeout(greeting, 1000)
