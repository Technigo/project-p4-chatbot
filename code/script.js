// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const goodBtn = document.getElementById('good')


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
  showMessage(`Hello there, how are you feeling?`, 'bot')
  greeting ()
}
// the user should choose between these 3 options (buttons)
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

// after choosing a button the bot asks a question and the user should choose between 3 options
botReply(
      `Oh so you're in a ${type} mood. Let me help you! What do you need?`
)

inputWrapper.innerHTML = `
    <select id="select">
      <option value="" selected disabled>👇 Select what you need...</option>
      <option value="a hug">a hug</option>
      <option value="a laugh">a laugh</option>
      <option value="Surprise me!">Surprise me!</option>
    </select>
  `
  document
    .getElementById('hugBtn')
    .addEventListener('click', () => nextQuestion('a hug'))
  document
    .getElementById('laughhBtn')
    .addEventListener('click', () => nextQuestion('a laugh'))
  document
    .getElementById('surpriseBtn')
    .addEventListener('click', () => nextQuestion('surprise me!'))  
    
const showMenu = (type) => {
  questionNumber++

// the user gets a different gif, dependig on what he needs/chooses

if (type === 'a hug') {
  inputWrapper.innerHTML = `
  <div style="width:100%;height:0;padding-bottom:65%;position:relative;">
  <iframe src="https://giphy.com/embed/f6y4qvdxwEDx6" 
  width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen>
  </iframe>
  </div><p><a href="https://giphy.com/gifs/hug-cat-cute-f6y4qvdxwEDx6">via GIPHY</a></p>
  `
} else if (type === 'a laugh') {
  inputWrapper.innerHTML = `
  <div style="width:100%;height:0;padding-bottom:53%;position:relative;">
  <iframe src="https://giphy.com/embed/uo5qr8sVIOniU" 
  width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen>
  </iframe>
  </div><p><a href="https://giphy.com/gifs/en-junio-sabado-uo5qr8sVIOniU">via GIPHY</a></p> 
  `
} else {
  inputWrapper.innerHTML = `
  <div style="width:100%;height:0;padding-bottom:56%;position:relative;">
  <iframe src="https://giphy.com/embed/YQAdA99SV4DElB2b4z" 
  width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen>
  </iframe></div><p><a href="https://giphy.com/gifs/netflix-tiger-king-joe-exotic-carole-baskin-YQAdA99SV4DElB2b4z">via GIPHY</a></p>
  `
}


// Set up your eventlisteners here
