// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const nameForm = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')

let userName =''

//Menu choices
const veggieBurgerMenu =`
<select id='select'>
  <option>Veggie Patty Burger</option>
  <option>Portobello Burger</option>
  <option>Oat Burger</option>
</select>
`
const cheeseBurgerMenu =`
<select id='select'>
  <option>Goat Cheese Burger</option>
  <option>Cheedar Cheese Burger</option>
  <option>Halloumi Cheese Burger</option>
</select>
`
const chilliBurgerMenu =`
<select id='select'>
  <option>Pimientos Burger 🌶</option>
  <option>Jalapenos Burger 🌶🌶</option>
  <option>Serrano Burger 🌶🌶🌶 </option>
</select>
`

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
// Chat boten hamnar i vänster kolumnen. 
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

//Fråga 7 
const prepareFood = () => {
 inputWrapper.innerHTML = `
 <img src="https://media.giphy.com/media/l0K4lPx8bvdbFMdGM/giphy.gif" alt="This will display an animated GIF" />
 `
}

//Fråga 6 Prepare food
const askForFries = ()=> {
inputWrapper.innerHTML =`
<button id="yes"> Yes </button>
<button id="no"> No </button>`

document.getElementById('yes').addEventListener('click', () => {
  inputWrapper.innerHTML = ''
  showMessage('Yes🥳', 'no', 'user')
  setTimeout(() => showMessage (`Thank you, your food will be right with you`, 'bot'), 1000)
  setTimeout(() => prepareFood(), 4000)
})
}


// Fråga 5 Sammanfatta (två parametrar) amount och selected
const askForConfirmation = (amount, selectedDish) => {
inputWrapper.innerHTML =''
showMessage(`Alright, we have recived your order for ${amount} ${selectedDish}! Please confirm, that you would like to order`)
inputWrapper.innerHTML = `
<button id='restart'> Nej✋ </button>
<button id='confirm'> Yes👍 </button>
`
document.getElementById('restart').addEventListener('click', () => location.reload())
document.getElementById('confirm').addEventListener('click', () => {
  inputWrapper.innerHTML = ''
  showMessage('Yes🥳', 'user')
  setTimeout(() => showMessage (`Thank you ${userName} for your order of ${amount} ${selectedDish}. Do you want fries for free?`, 'bot'), 1000)
  setTimeout(() => askForFries(), 2000)
})
}


//Fråga 4
const askForAmount = selectedDish => {
  showMessage(`How many ${selectedDish} do you want?`, 'bot')
  inputWrapper.innerHTML = `
  <input type="number" id="amount"/>
  <button id="amount-btn" class="send-btn">
  Skicka
  </button>
  `
  const amountInput = document.getElementById('amount')

  document.getElementById('amount-btn').addEventListener('click', () => {
    showMessage(amountInput.value, 'user')
    setTimeout(() => askForConfirmation(amountInput.value, selectedDish), 1000)
  })
}


//Fråga 3 Vilken mat användaren vill ha
//show message funktionen, 

const askForDish = foodChoice => {
  
  showMessage(`What kind of ${foodChoice} do you want?`, 'bot')

  if (foodChoice === 'original') {
  //Orginal Burger choices In drop down
  inputWrapper.innerHTML = veggieBurgerMenu

  } else if (foodChoice ==='cheese'){
  //visa burger meny
  inputWrapper.innerHTML = cheeseBurgerMenu

  } else {
  //visa burger meny
  inputWrapper.innerHTML = chilliBurgerMenu
  }

  const selectedDish = document.getElementById('select')
  selectedDish.addEventListener('change', () =>{
    showMessage(selectedDish.value, 'user')
    setTimeout(() => {
    inputWrapper.innerHTML =''
    askForAmount(selectedDish.value)
    }, 1000)
  })
}


//Fråga 2 Svarar usern med valuet från deras input, som sedan van välja vad hen vill beställa
//Besvarar användaren med function och message. 
//Lägger till HTML element för val i knappar. 
//lägger till klick event för meny val som skickar vidare till nästa funktion "askForDish"
const askForFood = (userName) =>{
  showMessage(`Hi ${userName}👋 Nice to meet you! What would you like to order?`,'bot')
  inputWrapper.innerHTML=`
  <button id="originalButton">Original Burger</button>
  <button id="cheeseButton">Cheese Burger</button>
  <button id="chilliButton">Chilli Burger</button>
  `
  
  document
  .getElementById("originalButton")
  .addEventListener('click', () => 
  {
    showMessage(`I want a original burger`, 'user')
    setTimeout(() => askForDish('original'), 1000)
  })

  document
  .getElementById("cheeseButton")
  .addEventListener('click', () =>{
    showMessage(`I want a cheese burger`, 'user')
    setTimeout(() => askForDish('cheese'), 1000)
  })
  
  document
  .getElementById("chilliButton")
  .addEventListener('click', () =>
  {
    showMessage(`I want a chilli burger`, 'user')
    setTimeout(() => askForDish('chilli'), 1000)
  })

}


//Fråga 1. Vill att användaren skriver in sitt namn. 
//Skapar en funktion som sparar user name som ett value. 
//Sen skickas vidare till fråga tre "askForFood", (med fördröjning)
const handleNameInput = (event) =>
{
  event.preventDefault()
  userName = nameInput.value
  console.log(nameInput.value)
  nameInput.value = ""
  showMessage(userName, 'user')
  setTimeout(() => askForFood(userName), 1000)
}

// Starts here
const greeting = () => {
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here. 
//Förhindrar att sidan laddas om. När formuläret skickas
//Den sparar också userName som ett value. 
nameForm.addEventListener('submit', handleNameInput)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)





function updateTransition() {
  var el = document.querySelector("div.box");
   
  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }
   
  return el;
}

var intervalID = window.setInterval(updateTransition, 1000);
