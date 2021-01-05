// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const nameForm = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')

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
        <img src="assets/smileyface.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/Food4cure.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message 
  //when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here 
const greeting = () => {
  showMessage(`Hi there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

//Question 1
const handleNameInput = event => {
  event.preventDefault()
  const userName = nameInput.value
  nameInput.value = ''
  showMessage(userName, 'user')
  setTimeout(() => askForKnowledge(userName), 1000)
}

//Question 2
const askForKnowledge = userName => {
  showMessage(`Lovely to meet you ${userName}! What would you like to learn about today?`, 'bot')

  inputWrapper.innerHTML = `
  <button id='zincButton'>Zinc</button>
  <button id='proteinButton'>Protein</button>
  <button id='vitaminDButton'>VitaminD</button>
`
document
    .getElementById('zincButton')
    .addEventListener('click', () => {
      showMessage('zinc', 'user')
      setTimeout(() => askForThings('zinc'), 1000)
    })

document
    .getElementById('proteinButton')
    .addEventListener('click', () => {
      showMessage('protein', 'user')
      setTimeout(() => askForThings('protein'), 1000)
    })
document
    .getElementById('vitaminDButton')
    .addEventListener('click', () => {
      showMessage('vitaminD', 'user')
      setTimeout(() => askForThings('vitaminD'), 1000)
    })

}

//Question 3
const askForThings = information => {
  showMessage(`Great`, 'bot')
  
  if (information === "zinc") {
    showMessage(`Zinc as a supplement if taken at onset of the first symptoms of respiratory 
    viral diseases may half its symptoms and duration.
    Best doses to be effective? Between 50 and 100 mg per day, 
    to be taken after a main meal to avoid stomach upset.`, 'bot')
    setTimeout(() => askForMore('zinc'), 2000)

  } else if (information === "protein") {
    showMessage(`Protein is found throughout the body. It makes up the enzymes that power many chemical reactions 
    and the hemoglobin that carries oxygen in your blood. Protein is made from twenty-plus 
    basic building blocks called amino acids. Because we do not store amino acids, 
    our bodies make them in two different ways: either from scratch, 
    or by modifying others`, 'bot')
    setTimeout(() => askForMore('protein'), 2000)

  } else {
    showMessage(`Few foods naturally contain vitamin D₃. But at the same time, a handful of diverse foods 
    and techniques can give you a boost.
    Vitamin D2 (ergocalciferol) is derived from plant sources typically harvested 
    from yeast or mushrooms exposed to UV rays so always suitable for vegans.
    Vitamin D3 (cholecalciferol) is usually derived from fish oil or from lanolin (from sheep’s wool) 
    or vegan forms more recently developed from lichen.
    Mushrooms have the unique ability to make vitamin D2 when exposed to ultraviolet light 
    under controlled conditions. This makes them the only edible plant source of vitamin D. 
    `, 'bot')
    setTimeout(() => askForMore('vitaminD'), 2000)
  }
}

//Question 4
const askForMore = _food => {
  showMessage(`Fantastic, would you like some bonus information about Vitamin C?`, 'bot')

  inputWrapper.innerHTML = `
  <button id='YesButton'>Yes</button>
  <button id='NoButton'>No</button>
`
document
    .getElementById('YesButton')
    .addEventListener('click', () => {
      showMessage('Great, Vitamin C is a water-soulable vitamin which means that you have to refill to prevent shortage', 'bot')
    })

document
    .getElementById('NoButton')
    .addEventListener('click', () => {
      showMessage('Thank you for your time, have a great day!', 'user')
    })
}

// Set up your eventlisteners here
nameForm.addEventListener('submit', handleNameInput)

          // When website loaded, chatbot asks first question.
          // normally we would invoke a function like this:
          // greeting()
          // But if we want to add a little delay to it, we can wrap it in a setTimeout:
          // setTimeout(functionName, timeToWaitInMilliSeconds)
          // This means the greeting function will be called one second after the website is loaded.
          setTimeout(greeting, 1000)
         

