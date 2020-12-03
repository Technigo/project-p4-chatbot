// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')

const name = nameInput.value

// Global variables, if you need any, declared here
const inputWrapper = document.getElementById('input-wrapper')

// Functions declared here
const handleNameInput = (event) => {
  event.preventDefault ()

  const name = nameInput.value

  showMessage(nameInput.value, 'user')
  nameInput.value=''

  setTimeout(() => showMoodOptions(name), 1000)
}

const showMoodOptions = (userName) => {
  showMessage(`Freut mich, ${userName}. Wie fühlst du dich denn heute?`, 'bot')

  inputWrapper.innerHTML = `
   <button id="motivatedBtn">Topmotiviert</button>
   <button id="tiredBtn">Müde und ausgelaugt</button>
   <button id="okayBtn">Ganz okay</button>
  `
  document.getElementById('motivatedBtn').addEventListener('click', handleMotivatedInput);  
  document.getElementById('tiredBtn').addEventListener('click', handleTiredInput);
  document.getElementById('okayBtn').addEventListener('click', handleOkayInput);
}

const handleMotivatedInput = (motivation) => { 
  console.log("motivated")

  showMessage("Topmotiviert", 'user')

  setTimeout(() => showMotivatedOptions(), 1000)
}

const showMotivatedOptions = (interest) => {

  showMessage(`Topmotiviert? Wunderbar! 😃 Dann geb ich mein Bestes, dass das auch so bleibt! 
  Warum interessierst du dich denn für jobsurfing.ch?`, 'bot') 

  inputWrapper.innerHTML = `
  <button id="jobsurferBtn">Ich möchte gerne Jobsurfer werden und Erfahrungen in neuen Berufsfelder sammeln.</button>
  <button id="companyBtn">Mein Unternehmen möchte Quereinsteigern Joberfahrungen ermöglichen.</button>
  <button id="justBtn">Ich möchte mich nur mal umschauen.</button>
  `
  document.getElementById('jobsurferBtn').addEventListener('click', handleJobsurferInput);  
  document.getElementById('companyBtn').addEventListener('click', handleCompanyInput);
  document.getElementById('justBtn').addEventListener('click', handleJustInput);
}

const handleTiredInput = (motivation) => {
  console.log("tired")
  showMessage("Müde und ausgelaugt", 'user')

  setTimeout(() => showTiredOptions(), 1000)
}

const showTiredOptions = (interest) => {

  showMessage(`Müde und ausgelaugt? Das kenn ich. Na dann geb ich mein Bestes, dass du dich besser fühlst! 😄
  Warum interessierst du dich denn für jobsurfing.ch?`, 'bot')

  inputWrapper.innerHTML = `
  <button id="jobsurferBtn">Ich möchte gerne Jobsurfer werden und Erfahrungen in neuen Berufsfelder sammeln.</button>
  <button id="companyBtn">Mein Unternehmen möchte Quereinsteigern Joberfahrungen ermöglichen.</button>
  <button id="justBtn">Ich möchte mich nur mal umschauen.</button>
  `
  document.getElementById('jobsurferBtn').addEventListener('click', handleJobsurferInput);  
  document.getElementById('companyBtn').addEventListener('click', handleCompanyInput);
  document.getElementById('justBtn').addEventListener('click', handleJustInput);

}

const handleOkayInput = (motivation) => {
  console.log("okay")
  showMessage("Ganz okay", 'user')

  setTimeout(() => showOkayOptions(), 1000)
}

const showOkayOptions = (interest) => {  
  showMessage(`Ganz okay? Na da geht doch noch was. 😉 Ich gebe mein Bestes, deine Stimmung noch etwas anzuheben!
  Warum interessierst du dich denn für jobsurfing.ch?`, 'bot')

  inputWrapper.innerHTML = `
  <button id="jobsurferBtn">Ich möchte gerne Jobsurfer werden und Erfahrungen in neuen Berufsfeldern sammeln.</button>
  <button id="companyBtn">Mein Unternehmen möchte Quereinsteigern Joberfahrungen ermöglichen.</button>
  <button id="justBtn">Ich möchte mich nur mal umschauen.</button>
  `
  document.getElementById('jobsurferBtn').addEventListener('click', handleJobsurferInput);  
  document.getElementById('companyBtn').addEventListener('click', handleCompanyInput);
  document.getElementById('justBtn').addEventListener('click', handleJustInput);
}

const handleJobsurferInput = (reason) => {
  console.log("jobsurfer")
  showMessage("Ich möchte gerne Jobsurfer werden und Erfahrungen in neuen Berufsfelder sammeln.", 'user')

  setTimeout(() => showJobsurferOptions(), 1000)
}

const showJobsurferOptions = (reason) => {
  showMessage(`👏So toll, dass du neue berufliche Erfahrungen sammeln willst. Welcher Grund ist ausschlaggebend dafür?`, 'bot')

  inputWrapper.innerHTML = `
    <select id="select"> 
      <option value="" selected disabled>👇Wähle einen Grund aus.</option>
      <option value="Ich will mich beruflich neurorientieren.">Ich will mich beruflich neurorientieren.</option>
      <option value="Ich bin in meinem jetzigen Job nicht so zufrieden und möchte mich inspirieren lassen.">Ich bin in meinem jetzigen Job nicht so zufrieden und möchte mich inspirieren lassen.</option>
      <option value="Bevor ich ein Studium beginne, möchte ich einen direkten Einblick in den Zielberuf erhalten">Bevor ich ein Studium beginne, möchte ich einen direkten Einblick in den Zielberuf erhalten.</option>
      <option value="Anderer Grund">Anderer Grund</option>
    </select>
  `
  document.getElementById('select').addEventListener('change', handleJobsurferSelectInput);  
}

const handleCompanyInput = (reason) => {
  console.log("company")
  showMessage("Mein Unternehmen möchte Quereinsteigern Joberfahrungen ermöglichen.", 'user')

  setTimeout(() => showCompanyOptions(), 1000)
}

const showCompanyOptions = (reason) => {
  showMessage(`👏So toll, dass dein Unternehmen Jobsurfern Einblicke in andere Berufe ermöglichen will! Was ist deine Hauptmotivation dahinter?`, 'bot')

  inputWrapper.innerHTML = `
    <select id="select"> 
      <option value="" selected disabled>👇Wähle einen Grund aus.</option>
      <option value="Tolle Gelegenheit neue Talente zu entdecken.">Tolle Gelegenheit neue Talente zu entdecken.</option>
      <option value="Freude, andere Menschen auf ihrem Weg zu unterstützen">Freude, andere Menschen auf ihrem Weg zu unterstützen.</option>
      <option value="Möglichkeit, potentielle neue Mitarbeiter finden.">Möglichkeit, potentielle neue Mitarbeiter finden.</option>
      <option value="Anderer Grund">Anderer Grund</option>
    </select>
  `
  document.getElementById('select').addEventListener('change', handleCompanySelectInput);  
}

const handleJustInput = (reason) => {
  console.log("just")
  showMessage("Ich möchte mich nur mal umschauen.", 'user')

  setTimeout(() => showJustOptions(), 1000)
}

const showJustOptions = (reason) => {
  showMessage(`Schön, dass du dich auf unserer Webseite umschaust. Gefällt dir, was du bis jetzt entdeckt hast?`, 'bot')

  inputWrapper.innerHTML = `
  <select id="select"> 
    <option value="" selected disabled>👇 Wähle das entsprechende Emoji aus.</option>
    <option value="👍👍😍">👍👍😍</option>
    <option value="👍">👍</option>
    <option value="😐">😐</option>
    <option value="👎e">👎</option>
  </select>
  `
  document.getElementById('select').addEventListener('change', handleJustSelectInput);  
}

const handleJobsurferSelectInput = () => {
  console.log("jobsurferselect")
  showMessage(select.value, 'user')

  setTimeout(() => ThankYouJobsurfer1(), 2000)
}

const ThankYouJobsurfer1 = () => {
  showMessage("Ich bin mir sicher, dass der Einblick in andere Berufsfelder sehr bereichernd ist und dir Klarheit verschaffen wird.", 'bot')
  setTimeout(() => ThankYouJobsurfer2(), 4000)
}

const ThankYouJobsurfer2 = () => {
    showMessage("Uns von jobsurfing.ch liegt es am Herzen, dass Du einen Job findest, der dich erfüllt und glücklich macht. 💜", 'bot')
  setTimeout(() => showYesOrNo(), 3000)
}

const handleCompanySelectInput = () => {
  console.log("companyselect")
  showMessage(select.value, 'user')

  setTimeout(() => ThankYouCompany1(), 2000)
}

const ThankYouCompany1 = () => {
  showMessage("Wie du siehst, profitiert auch das Unternehmen von Jobsurfing. Einige Gründe findest du auf unserer Startseite.", 'bot')
  setTimeout(() => ThankYouCompany2(), 3000)
}

const ThankYouCompany2 = () => {
  showMessage("Uns von jobsurfing.ch liegt es am Herzen, Jobsurfer und Unternehmen miteinander so zu vernetzen, damit die Jobsurfing Erfahrung für beide bereichernd ist. 💜", 'bot')
setTimeout(() => showYesOrNo(), 4000)
}

const handleJustSelectInput = () => {
  console.log("justselect")
  showMessage(select.value, 'user')

  setTimeout(() => ThankYouJust(), 2000)
}

const ThankYouJust= () => {
  showMessage("Vielen Dank für deine Rückmeldung! Das hilft uns dabei, unsere Webseite zu optimieren.", 'user')
  setTimeout(() => showYesOrNo(), 2000)
}

const showYesOrNo = () => {
  showMessage("Hast du noch Fragen, Anregungen oder Feedbacks?", 'bot')
  
  inputWrapper.innerHTML = `
  <button id="yes">Ja</button>
  <button id="no">Nein, im Moment nicht</button>
  `
  document.getElementById('yes').addEventListener('click', handleYesInput); 
  document.getElementById('no').addEventListener('click', handleNoInput); 

}

const handleYesInput = () => {
  showMessage("Ja", 'user')
  setTimeout(() => answerYesInput(), 2000)
  inputWrapper.innerHTML = ''
}

const answerYesInput = () => {
  showMessage("Dann melde dich gerne über das Kontaktformular bei uns.", 'bot')
  setTimeout(() => ByeMessage(), 3000)
}

const handleNoInput = () => {
  showMessage("Nein, im Moment nicht", 'user')
  setTimeout(() => ByeMessage(), 2000)
  inputWrapper.innerHTML = ''
}

const ByeMessage = () => {
  showMessage("Ich wünsche dir alles Liebe. Bis bald, Niri 👋 ", 'bot')
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
  showMessage(`Hey! 👋 Schön, dass du hier bist. Ich bin Niri. Wie heisst du?`, 'bot')
}



// Set up your eventlisteners here

document.getElementById('name-form').addEventListener('submit', handleNameInput);

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)$


// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting(), 1000)