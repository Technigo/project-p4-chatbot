// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')

const nameInput = document.getElementById('name-input')

const inputWrapper = document.getElementById('input-wrapper')

/*const FoodReply = document.getElementById('input-wrapper') ----> hier stimmt etwas nicht */

// Global variables, if you need any, declared here

// Functions declared here

const handleNameInput = (event) => {
  event.preventDefault()
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  const name = nameInput.value
  showMessage(name, 'user')
  nameInput.value = ''

  // After 1 second, show the next option, passing the name into it
  setTimeout(() => showTipOptions(name), 1000)
}


const showTipOptions = (userName) => {
  // Post a greeting to the user as the 'bot'
  showMessage(`Hi ${userName}. <br>
  <div class="gifhey">
    <iframe src="https://giphy.com/embed/l0ErUkqRz6Jug7RAI" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/obama-jimmy-fallon-michelle-obama-l0ErUkqRz6Jug7RAI">via GIPHY</a></p>
  </div>
    Schön hast du Lust was Neues zu entdecken. Worauf hast du Lust?`, 'bot')

  // Update the input wrapper with the next set of options
  inputWrapper.innerHTML = `
    <button id="videoBtn">Videos</button>
    <button id="buecherBtn">Bücher</button>
    <button id="podcastBtn">Podcasts</button>
  `

  // Next step here - add event listeners to the 3 new buttons we added above
  document.getElementById('videoBtn').addEventListener('click', handleVideoInput);
  document.getElementById('buecherBtn').addEventListener('click', handleBuecherInput);  
  document.getElementById('podcastBtn').addEventListener('click', handlePodcastInput);
}


const handleVideoInput = () => { 
  showMessage(`Videos`, 'user')

  setTimeout(() => showVideoOptions(), 1000)

}


const showVideoOptions = () => {
  showMessage(`Du willst Videos? Videos sollst du kriegen. In welche Richtung soll es gehen?`, 'bot') 

  inputWrapper.innerHTML = `
  <button id="gleichberechtigungBtn">Gleichberechtigung & Empowerment</button>
  <button id="techBtn">Future & Tech</button>
  <button id="popculture">Pop Culture</button>
  `
  document.getElementById('gleichberechtigungBtn').addEventListener('click', handleGleichberechtigungVideoInput);  
  document.getElementById('techBtn').addEventListener('click', handleTechVideoInput);
  document.getElementById('popcultureBtn').addEventListener('click', handlePopCultureVideoInput);
}


const handleGleichberechtigungVideoInput = () => {
  showMessage(`Gleichberechtigung & Empowerment`, 'user')

  setTimeout(() => showGleichberechtigungVideos(), 1000)
}

const showGleichberechtigungVideos = () => {
  showMessage (`Here you go:`, 'bot')

  inputWrapper.innerHTML = `
  <div class="VideoBot">
    <iframe src="https://www.youtube.com/embed/hg3umXU_qWc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe src="https://www.youtube.com/embed/KCxbl5QgFZw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe src="https://www.youtube.com/embed/rFVwUPgIcRA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe src="https://www.youtube.com/embed/lU8s9WOEHjA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `
}

const handleTechVideoInput = () => {
  showMessage(`Future & Tech`, 'user')

  setTimeout(() => showTechVideos(), 1000)
}

const showTechVideos = () => {
  showMessage (`Voilà`, 'bot')

  inputWrapper.innerHTML=`
  <div class="VideoBot">
  <iframe src="https://www.youtube.com/embed/5fHKK_YFUrw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `
}


const handlePopCultureVideoInput = () => {
  showMessage(`Pop Culture`, 'user')
}
/* why doesn't Pop Culture pop up?*/


const handleBuecherInput = () => { 
  showMessage(`Bücher`, 'user')

  setTimeout(() => showBuecherOptions(), 1000)

}

const showBuecherOptions = () => {
  showMessage (`Yes, Bücher, immer gut. In welche Richtung soll es gehen?`, 'bot')

  inputWrapper.innerHTML = `
  <button id="gleichberechtigungBtn">Gleichberechtigung & Empowerment</button>
  <button id="techBtn">Future, Tech & Politics</button>
  <button id="romaneBtn">Romane</button>
  `
  document.getElementById('gleichberechtigungBtn').addEventListener('click', handleGleichberechtigungBuecherInput);  
  document.getElementById('techBtn').addEventListener('click', handleTechBuecherInput);
  document.getElementById('romaneBtn').addEventListener('click', handleRomaneBuecherInput);
}

const handleGleichberechtigungBuecherInput = () => {
  showMessage(`Gleichberechtigung & Empowerment`, 'user')

  setTimeout(() => showGleichberechtigungBuecher(), 1000)
}

const showGleichberechtigungBuecher = () => {
  showMessage(`Gute Wahl! Klick dich durch:`, 'bot')

  setTimeout(() => showAuswahlGBuecher(), 1000)
}

const showAuswahlGBuecher = () => {
  showMessage(`- Kübra Gümüsay: Sprache und Sein <br>
- Caroline Criado-Perez: Unsichtbare Frauen
- Alok Vaid-Menon: Beyond the gender binary
- Alice Hasters: Was weisse Menschen nicht über Rassismus hören wollen`, 'bot')
}

const handleTechBuecherInput = () => {
  showMessage(`Future, Tech & Politics`, 'user')

  setTimeout(() => showTechBuecherAntwort(), 1000)
}

const showTechBuecherAntwort = () => {
  showMessage(`Tech-Fans this way:`, 'bot')

  setTimeout(() => showAuswahlTBuecher(), 1000)
}

const showAuswahlTBuecher = () => {
  showMessage(`- Bernard Marr: Tech Trends In Practice`, 'bot')
}

const handleRomaneBuecherInput = () => {
  showMessage(`Romane`, 'user')

  setTimeout(() => showRomaneBuecher(), 1000)
}

const showRomaneBuecher = () => {
  showMessage(`Wir hoffen, du findest etwas passendes :`, 'bot')

  setTimeout(() => showAuswahlRBuecher(), 1000)
}

const showAuswahlRBuecher = () => {
  showMessage (`- Elena Ferante: Meine geniale Freundin <br>
  - Gail Honeyman: Elenaor Oliphant is completely fine`, 'bot')
}


const handlePodcastInput = () => { 
  showMessage(`Podcasts`, 'user')

  setTimeout(() => showPodcastOptions(), 1000)

}


const showPodcastOptions = () => {
  showMessage (`Podcasts it is! In welche Richtung soll es gehen?`, 'bot')

  inputWrapper.innerHTML = `
  <button id="gleichberechtigungBtn">Gleichberechtigung & Empowerment</button>
  <button id="newsBtn">Future, News, Business & Politics</button>
  <button id="entertainmentBtn">Pure Entertainment</button>
  `
  document.getElementById('gleichberechtigungBtn').addEventListener('click', handleGleichberechtigungPodcastInput);  
  document.getElementById('newsBtn').addEventListener('click', handleNewsPodcastInput);
  document.getElementById('entertainmentBtn').addEventListener('click', handleEntertainmentInput);
}


const handleGleichberechtigungPodcastInput = () => {
  showMessage(`Gleichberechtigung & Empowerment`, 'user')

  setTimeout(() => showGleichberechtigungPodcast(), 1000)
}

const showGleichberechtigungPodcast = () => {
  showMessage(`Voilà: <br>
  - Kafi am Freitag <br>
  - Brillantes <br>
  - i weigh with Jameela Jamil <br>
  - Relitäter*innen`, 'bot')
}

const handleNewsPodcastInput = () => {
  showMessage(`Future, News, Business & Politics`, 'user')

  setTimeout(() => showNewsPodcastOptions(), 1000)
}

const showNewsPodcastOptions = () => {
  showMessage(`Bleib immer up to date mit diesen Podcasts:`, 'bot')

  setTimeout(() => showNewsPodcastAuswahl(), 1000)
}

const showNewsPodcastAuswahl = () => {
  showMessage(`-The Daily <br>
  - Echo der Zeit <br>
  - New York Magazine: Pivot <br>
  - WDR 5 Das Philosophische Radio`, 'bot')
}

const handleEntertainmentInput = () => {
  showMessage(`Pure Entertainment!`, 'user')

  setTimeout(() => showEntertainmentPodcastAntwort(), 1000)
}

const showEntertainmentPodcastAntwort = () => {
  showMessage(`Viel Spass hiermit!`, 'bot')

  setTimeout(() => showEntertainmentPodcastOptions(), 1000)
}

const showEntertainmentPodcastOptions = () => {
  showMessage(`- Podkinski <br>
  - Fest & Flauschig <br>
  - Freakonomics Radio`, 'bot')
}



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
  showMessage(`Hey Chefin, wie heisst du?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

document.getElementById('name-form').addEventListener('submit', handleNameInput)


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
