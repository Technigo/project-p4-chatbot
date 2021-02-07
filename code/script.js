// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const nameForm = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')

const exitHTML = `
<button id='yes' type='submit'>✔ Yes</button>
<button id='no' type='submit'>❌ No</button>
`
const paymentHTML = `
<button id='card' type='submit'>💳 By card</button>
<button id='cash' type='submit'>💸 With cash</button>
<button id='dishes' type='submit'>🍽 I'll do the dishes</button>
`
const selectPizza = `
<select id='select'>
<option value='' selected disabled>Which one will it be?</option>
<option value='pizza blanco'>Pizza Blanco</option>
<option value='svennebananpizza'>Svennebanan</option>
<option value='honey and chevre pizza'>Honey Chevre</option>
</select>
`
const selectPasta = `
<select id='select'>
<option value='' selected disabled>Which one would you like?</option>
<option value='salsiccia bolognese pasta'>Salsiccia bolognese</option>
<option value='shrimp and saffron pasta'>Shrimp & saffron</option>
<option value='creamy fungi pasta'>Creamy fungi</option>
</select>
`
const selectSalad = `
<select id='select'>
<option value='' selected disabled>Which one will clench your thirst?</option>
<option value='cobb salad'>Cobb salad</option>
<option value='caesar salad'>Caesar salad</option>
<option value='feta and beetroot salad'>Feta & beetroot</option>
</select>
`
const buttonSelectMain = `
<button id='pizza' type='submit'>🍕 Pizza</button>
<button id='pasta' type='submit'>🧆 Pasta</button>
<button id='salad' type='submit'>🥗 Salad</button>
`

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

// Interaction 7, win-win.
// As bot, hand over food item to user and wish them a happy meal (what's the English phrase?)
const buonAppetito = () => {
  showMessage('Here you go, buon appetito! Welcome back anytime you want!', 'bot')
}

// Interaction 6, final confirmation.
// As bot, tell user they've chosen how to pay and that it's time to confirm wether to go through with order (if so: define, store & pass on decision), or to start over (go back to the beginning).
const askForConfirmation = choiceOfPayment => {
  showMessage(
    `Okay, once payment by ${choiceOfPayment} is done, we'll have your meal ready in no time. You ready to go through?`,
    'bot')
  inputWrapper.innerHTML = exitHTML
  document
  .getElementById('yes')
  .addEventListener('click', () => {
    showMessage('Yup, GET IN MY BELLY!', 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => buonAppetito(), 1000)
  })
  document
  .getElementById('no')
  .addEventListener('click', () => {
    showMessage(`Let's start over, I need to change my order...'`, 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => window.location.reload(), 1000)
  })
}

// Interaction 5, food decision has been made.
// As bot, reinforce choice. Ask user for payment, and present options the user may choose from. Pass the choice of payment on.
const paymentOptions = choiceOfDish => {
  showMessage(
    `Pristine choice! It'll be 100 SEK for your ${choiceOfDish}. How would you like to pay?`,
    'bot')
  inputWrapper.innerHTML = paymentHTML
  document
  .getElementById('card')
  .addEventListener('click', () => {
    showMessage('Plastic (not so) fantastic.', 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => askForConfirmation('card'), 1000)
  })
  document
  .getElementById('cash')
  .addEventListener('click', () => {
    showMessage('I have a mint bill here for you... 🤑', 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => askForConfirmation('cash'), 1000)
  })
  document
  .getElementById('dishes')
  .addEventListener('click', () => {
    showMessage(`See, I can't... But I'll do the dishes! Please?`, 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => askForConfirmation('doing the dishes'), 1000)
  })
}

// Interaction 4, choose what to eat.
// As bot, confirm choice. Depending on choice, show specific menu the user may select as a drop-down. Pass the value of this choice on.
const showSpecificOptions = finalChoice => {
  if (finalChoice === 'pizza') {
  showMessage(`Excellent, pizza's always a winner! Make your choice below.`, 'bot')
  inputWrapper.innerHTML = selectPizza
  } else if (finalChoice === 'pasta') {
  showMessage(`Can't go wrong with a pasta! Make your choice below.`, 'bot')
  inputWrapper.innerHTML = selectPasta
  } else {
  showMessage('Fresh, clean and tasty! Make your choice below.', 'bot')
  inputWrapper.innerHTML = selectSalad
  }
  const dish = document.getElementById('select')
  addEventListener('change', () => {
    showMessage(`Okay. I'll go with a ${dish.value}, thanks.`, 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => paymentOptions(dish.value), 1000)
  })
}

// Interaction 3, looking at the menu.
// As bot, greet the user with their name. Then present the choices the user may select. Store choice and pass it on.
const showMainOptions = userName => {
  showMessage(
    `Nice to meet you, ${userName}. Which of our lovely main options would you like to choose?`,
    'bot')
  inputWrapper.innerHTML = buttonSelectMain
  document
  .getElementById('pizza')
  .addEventListener('click', () => {
    showMessage(`Let's see which pizzas you have!`, 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => mainChoice('pizza'), 1000)
  })
  document
  .getElementById('pasta')
  .addEventListener('click', () => {
    showMessage(`I'd love me some pasta!`, 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => mainChoice('pasta'), 1000)
  })
  document
  .getElementById('salad')
  .addEventListener('click', () => {
    showMessage(`Today I'll go with a salad.`, 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => showSpecificOptions('salad'), 1000)
  })
}

// Interaction 2, exchange names.
// Use the stored name, and as user reply with name. Pass stored name on.
const handleNameInput = event => {
  event.preventDefault()
  const name = nameInput.value
  showMessage(`My name is ${nameInput.value}.`, 'user')
  nameInput.value = ''
  setTimeout(() => showMainOptions(name), 1000)
}

// Interaction 1, initial greeting.
// Ask user for name, and store name. Wait 1 second before greeting user.
const greeting = () => {
  showMessage(`Hello and welcome to Ziko's joint. What's your name?`, 'bot')
  nameForm.addEventListener('submit', handleNameInput)
}
setTimeout(greeting, 1000)