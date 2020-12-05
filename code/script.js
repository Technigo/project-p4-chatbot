// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')

// Global variables, if you need any, declared here
const inputWrapper = document.getElementById('input-wrapper')

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
  showMessage(`Hey! Willkomen bei Nadelöhr! Mein Name ist Kira 👋 Wie heisst du?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}


setTimeout(greeting, 1000);

const handleNameInput = (event) => {
    event.preventDefault()

    const name = nameInput.value
    showMessage(nameInput.value, 'user')
    nameInput.value=''

    setTimeout(() => showWelcomeMessage(name), 1200)
}

const showWelcomeMessage = (userName) => {
    
  showMessage(`Toll das du hier bist ${userName}!!`, 'bot')

  setTimeout(() => showKursOptions(name), 2000)

}

const showKursOptions = (userName) => {

  showMessage(`Wie sind deine heutigen Nähskills ${userName}?`, 'bot')

  inputWrapper.innerHTML = `
  <button id="nähenBeginnerBtn">habe noch nie zuvor genäht</button>
  <button id="nähenFortgeschrittenBtn">ganz okay</button>
  <button id="nähenExpertenBtn">ziemlich gut!</button>
  `
    document.getElementById('nähenBeginnerBtn').addEventListener('click', handleBeginnerInput);
    document.getElementById('nähenFortgeschrittenBtn').addEventListener('click', handleFortgeschrittenInput);
    document.getElementById('nähenExpertenBtn').addEventListener('click', handleProInput);

}

const handleBeginnerInput = () => {
  showMessage("Beginner", 'user')

  setTimeout(() => showBeginnerMessage(), 1000)

}

const showBeginnerMessage = () => {
  showMessage("Cool. Ich freue mich sehr dir das Nähen beizubringen. Zusammen werden wir schnell zum Nähprofi!", 'bot')

  setTimeout(() => showKontaktMessage(), 1800)
}

const handleFortgeschrittenInput = () => {
  showMessage("Fortgeschritten", 'user')

  setTimeout(() => showFortgeschrittenMessage(), 1000)

}

const showFortgeschrittenMessage = () => {
  showMessage("Yes! Ich freue mich gemeinsam noch mehr zu lernen", 'bot')

  setTimeout(() => showKontaktMessage(), 1800)
}

const handleProInput = () => {
  showMessage("Experte", 'user')

  setTimeout(() => showProMessage(), 1000)

}

const showProMessage = () => {
  showMessage("Cool, ich freue mich sehr auf herausfordernde Projekte", 'bot')

  setTimeout(() => showKontaktMessage(), 1800)
}

const showKontaktMessage = () => {
  showMessage("Wie kann ich dich am besten erreichen?", 'bot')

  inputWrapper.innerHTML = `
  <button id="telBtn">Telefon</button>
  <button id="instagramBtn">Instagram</button>
  <button id="facebookBtn">Facebook</button>
  `
    document.getElementById('telBtn').addEventListener('click', handleTelInput);
    document.getElementById('instagramBtn').addEventListener('click', handleInstagramInput);
    document.getElementById('facebookBtn').addEventListener('click', handleFacebookInput);
}

const handleTelInput = () => {
  showMessage("Telefon", 'user')

  setTimeout(() => showTelefonMessage(), 1800)
 }

const handleInstagramInput = () => {
  showMessage("Instagram", 'user')

  setTimeout(() => showInstagramMessage(), 1800)
}

const handleFacebookInput = () => {
  showMessage("Facebook", 'user')

  setTimeout(() => showFacebookMessage(), 1800)
}

const showTelefonMessage = () => {
  showMessage("Das ist meine Telefonnummer, bitte ruf mich einfach an oder schreib mir eine Nachricht", 'bot')

  setTimeout(() => showByeMessage(), 2000)
}

const showInstagramMessage = () => {
  showMessage("Das ist der Link zu meiner Instagramseite www.instagram/nadelöhr.ch, bitte schreib mir doch eine kurze Nachricht", 'bot')

  setTimeout(() => showByeMessage(), 2000)
}

const showFacebookMessage = () => {
  showMessage("Das ist der Link zu meiner Facebookseite www.facebook/nadelöhr.ch, bitte schreib mir doch eine kurze Nachricht", 'bot')

  setTimeout(() => showByeMessage(), 2000)
}

const showByeMessage = () => {
  showMessage("Schön haben wir uns kennengelernt. Ich freue mich sehr auf den Kurs mit dir! Bis dahin wünsche ich dir alles Gute und bis bald! 👋", 'bot')

}

// Set up your eventlisteners here
document.getElementById('name-form').addEventListener('submit', handleNameInput);