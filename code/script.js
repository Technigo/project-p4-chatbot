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



const exitStrategy = (trade) => {
  showMessage(`Okay, once payment by ${trade} is done, we'll have your meal ready in no time. You ready to go through?`, 'bot')
  inputWrapper.innerHTML = `
  <button id='yes' type='submit'>Yes, GET IN MY BELLY!</button>
  <button id='no' type='submit'>Hold on, let me change my order...</button>
`
  document.getElementById('yes').addEventListener('click', () => {
    showMessage('There you go, buon appetito!', 'bot')
    inputWrapper.innerHTML = ''
  })
  document.getElementById('no').addEventListener('click', () => window.location.reload())
}

const payment = (dish) => {
  showMessage(`Pristine choice! It'll be 100 SEK for your ${dish}. How would you like to pay?`, 'bot')
  inputWrapper.innerHTML = `
  <button id='card' type='submit'>By card</button>
  <button id='cash' type='submit'>With cash</button>
  <button id='dishes' type='submit'>I'll do the dishes</button>
`
  document.getElementById('card').addEventListener('click', () => {
    showMessage(`Plastic (not so) fantastic.`, 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => exitStrategy('card'), 1000)
  })
  document.getElementById('cash').addEventListener('click', () => {
    showMessage(`I have a mint bill here for you.`, 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => exitStrategy('cash'), 1000)
  })
  document.getElementById('dishes').addEventListener('click', () => {
    showMessage(`See, I can't... But I'll do the dishes! Please?`, 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => exitStrategy('doing the dishes'), 1000)
  })
}


// Question 3
const mainChoice = (specificChoice) => {
  if (specificChoice === 'pizza') {
  showMessage(`Excellent, pizza's always a winner!`, 'bot')
  inputWrapper.innerHTML = `
  <select id='select'>
  <option value='' selected disabled>Which one will it be?</option>
  <option value='pizza blanco'>Pizza Blanco</option>
  <option value='svennebananpizza'>Svennebanan</option>
  <option value='honey and chevre pizza'>Honey Chevre</option>
  </select>
  `
  } else if (specificChoice === 'pasta') {
  showMessage(`Can't go wrong with a pasta!`, 'bot')
  inputWrapper.innerHTML = `
  <select id='select'>
  <option value='' selected disabled>Which one would you like?</option>
  <option value='salsiccia bolognese pasta'>Salsiccia bolognese</option>
  <option value='shrimp and saffron pasta'>Shrimp & saffron</option>
  <option value='creamy fungi pasta'>Creamy fungi</option>
  </select>
  `
  } else {
  showMessage(`Fresh, clean and tasty!`, 'bot')
  inputWrapper.innerHTML = `
  <select id='select'>
  <option value='' selected disabled>Which one will clench your thirst?</option>
  <option value='cobb salad'>Cobb salad</option>
  <option value='caesar salad'>Caesar salad</option>
  <option value='feta and beetroot salad'>Feta & beetroot</option>
  </select>
  `
  }
  const dish = document.getElementById('select')
  addEventListener('change', () => {
    showMessage(`I'll go with a ${dish.value}, thanks.`, 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => payment(dish.value), 1000)
  })
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
