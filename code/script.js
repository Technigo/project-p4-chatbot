// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const nameForm = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')
const pizzaBtn = document.getElementById('pizzaBtn')
const pastaBtn = document.getElementById('pastaBtn')
const saladBtn = document.getElementById('saladBtn')
// Global variables, if you need any, declared here

// Functions declared here



// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += 
    `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += 
    `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Ziko" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Question 3
const mainChoice = (specificChoice) => {
  if (specificChoice === 'pizza') {
  showMessage(`Excellent! We have three different styles.`)
  inputWrapper.innerHTML = `
  <select class='select' id='pizza'>
  <option value='' selected disabled>Which one will it be?</option>
  <option value='blanco'>Pizza Blanco.</option>
  <option value='svennebanan'>Svennebanan.</option>
  <option value='nut2sweet'>Honey Chevre.</option>
  </select>
  `
  } else if (specificChoice === 'pasta') {
  showMessage(`Can't go wrong with a pasta.`)
  inputWrapper.innerHTML = `
  <select class='select' id='pasta'>
  <option value='' selected disabled>Which one would you like?</option>
  <option value='salsiccia'>Salsiccia bolognese.</option>
  <option value='shrimp'>Shrimp & saffron.</option>
  <option value='fungi'>Creamy fungi.</option>
  </select>
  `
  } else {
  showMessage(`Fresh, clean and tasty.`)
  inputWrapper.innerHTML = `
  <select class='select' id='salad'>
  <option value='' selected disabled>Which one will clench your thirst?</option>
  <option value='cobb'>Cobb salad.</option>
  <option value='caesar'>Caesar salad.</option>
  <option value='feta'>Feta & redbeet.</option>
  </select>
  `
  }
}


// Question 2
const showMainOptions = (userName) => {
  showMessage(`Nice to meet you, ${userName}. Which of our lovely main options would you like to choose?`, 'bot')
  inputWrapper.innerHTML = `
    <button id='pizza' type='submit'>Pizza</button>
    <button id='pasta' type='submit'>Pasta</button>
    <button id='salad' type='submit'>Salad</button>
  `
  document.getElementById('pizza').addEventListener('click', () => {
    showMessage(`Let's see which pizzas you have!`, 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => mainChoice('pizza'), 1000)
  })
  document.getElementById('pasta').addEventListener('click', () => {
    showMessage(`I'd love some pasta.`, 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => mainChoice('pasta'), 1000)
  })
  document.getElementById('salad').addEventListener('click', () => {
    showMessage(`Let's go for a salad`, 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => mainChoice('salad'), 1000)
  })
}

// Question 1
const handleNameInput = (event) => {
  event.preventDefault()
  const name = nameInput.value
  showMessage(`My name is ${nameInput.value}`, 'user')
  nameInput.value = ''
  setTimeout(() => showMainOptions(name), 1000)
}

// Introduction

const greeting = () => {
  showMessage(`Hello and welcome to Ziko's joint. What's your name?`, 'bot')
}

setTimeout(greeting, 1000)

nameForm.addEventListener('submit', handleNameInput)





// Set up your eventlisteners here:


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
