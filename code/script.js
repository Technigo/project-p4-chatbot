// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const ageForm = document.getElementById('name-form')
const ageInput = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')
const nameForm = document.getElementById('name-form2')

const buttonSelectMain = `
<button id='feyonceButton' type='submit'>Feyoncé</button>
<button id='lazyButton' type='submit'>Sigh.. This pun is just Lay-Z</button>`


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
  showMessage(`Hi, I'm Glenn Close. I have understood that in Sweden all the pun masters are named Glenn.
  But since my employers were instructed to cheer people up in english – they hired me.`, 'bot')
  // Just to check it out, change 'bot' to 'user' here ðŸ‘†
  setTimeout(() => showMessage(`How old are you?`, 'bot'), 3000)
}



// QUESTION 3
const grapeResponse = (event) => {
showMessage("Such a sad story. He was later pressed into it anyway..", 'bot')
inputWrapper.innerHTML = `
<button id="omgButton">Omg, pour kid!</button>
<button id="riesling">I guess everything happens for a riesling</button>
`
document.getElementById("omgButton").addEventListener('click', () => showMessage("Omg, pour kid!", 'user'))
document.getElementById("riesling").addEventListener('click', () => showMessage("I guess everything happens for a riesling", 'user'))
setTimeout(() => titanicQuestion(event), 5000)
}


// Question 2
const grapeQuestion = (event) => {
  showMessage("Have you heard about the baby grape that didn't want to be made into wine?", 'bot')
  inputWrapper.innerHTML = `
  <button id="yesButton">YES</button>
  <button id="noButton">NO</button>
`
  document.getElementById("yesButton").addEventListener('click', () => showMessage("Yes", 'user'))
  document.getElementById("noButton").addEventListener('click', () => showMessage("No", 'user'))
setTimeout(() => grapeResponse(event), 5000)
}

// Question 1
const handleAgeInput = (event) => {
event.preventDefault()
const userAge = ageInput.value
showMessage(userAge, 'user')
ageInput.value = ""
setTimeout(() => showMessage(`Ah ok, ${userAge} and getting older huh. Well here's a wine joke that only gets better with age...`, 'bot'), 2000)
setTimeout(() => grapeQuestion(event), 5000)
}

//QUESTION 4
const titanicQuestion = (event) => {

  setTimeout(() => showMessage("Uhm... Yeah.. So what's your name? Titanic?", 'bot'), 1000)
  setTimeout(() => getNamething(event), 1000)

}

//INPUT FOR QUESTION 4
const getNamething = (event) => {
  inputWrapper.innerHTML = `
  <div class="input-wrapper2" id="input-wrapper2">
  <form id="name-form2">
    <input id="name-input2" type="text" />
    <button id="sendName" class="send-btn2" type="submit">
      Send
    </button>
  </form>
</div>
  `

  document.getElementById('name-form2').addEventListener('submit', handleNameInput)

}

// NAME INPUT HANDLING
const handleNameInput = (event) => {

  const nameInput = document.getElementById('name-input2')

  event.preventDefault();
  const userName = nameInput.value
  showMessage(userName, 'user')
  nameInput.value = ""
  setTimeout(() => showMessage
  (`So sorry ${userName}, that was a bad ice breaker.. I am a bit nervous about this job. I am just an actress after all.`, 'bot'), 2000)
  setTimeout(() => showMessage
  (`Anyway, now that we are talking about famous love stories.. Do you know what Jay-Z called Beyoncé after their engagement?`, 'bot'), 5000)
  setTimeout(() => beyonceResponse(event), 5000)
}

// QUESTION 5
const beyonceResponse = (event) => {
  inputWrapper.innerHTML = buttonSelectMain
  document
  .getElementById('feyonceButton')
  .addEventListener('click', () => {
    showMessage(`Feyoncé`, 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => showMessage(`Haha! Funny. Seems like you are better at this than I am. So I am just gonna give you the support material they gave me, and you can take over. Ok?`, 'bot'), 1000)
    setTimeout(() => showMessage(`Just click the Download button and you'll have it.`, 'bot'), 3000)
    setTimeout(() => punsT(event), 5000)
  })
  document
  .getElementById('lazyButton')
  .addEventListener('click', () => {
    showMessage(`Sigh.. This pun is just Lay-Z`, 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => showMessage(`I guess you are better at this than I am then.. So I am just gonna give you the support material they gave me, and you can take over. Ok?`, 'bot'), 1000)
    setTimeout(() => showMessage(`Just click the Download button and you'll have it.`, 'bot'), 3000)
    setTimeout(() => punsT(event), 5000)
  })
}

let mainChoice = () => {
  if (mainChoice === 'feyonceButton') {
    setTimeout(() => showMessage
  (`Haha! Funny. Seems like you are better at this than I am. So I am just gonna give you the support material they gave me, and you can take over. Ok?`, 'bot'), 3000)
  }
  else if (mainChoice === 'lazyButton') {
    setTimeout(() => showMessage
  (`I guess you are better at this than I am then.. So I am just gonna give you the support material they gave me, and you can take over. Ok?`, 'bot'), 3000)
  }
}

const punsT = () => {
  inputWrapper.innerHTML = `
  <a id="downloadtag" href="https://cdn.iwastesomuchtime.com/December-10-2012-20-12-11-61851310094279099942183677218n.jpg" hidden download></a>

  <button onclick="document.getElementById('downloadtag').click()">Download</button>`
}
// Set up your eventlisteners here

ageForm.addEventListener('submit', handleAgeInput)




// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)


// Interaction 3, looking at the menu.
// As bot, greet the user with their name. Then present the choices the user may select. Store choice and pass it on.
