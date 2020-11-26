// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')

// Global variables, if you need any, declared here

// Functions declared here
const handleNameInput = (event) => {
event.preventDefault()

  const name = nameInput.value
  showMessage (name, 'user')
  nameInput.value = ''

  setTimeout(()=> showWebsiteOptions (name), 1000)
}

const showWebsiteOptions = (userName) => {
  //Post a greeting to the user as the bot
  showMessage (`Nice to meet you, ${userName}. My name is Dave, and I am here to help you navigate this 
  website. Which pages would you be most interested in visiting?`, 'bot')
//Update the input wrapper with the next set of options
inputWrapper.innerHTML = `
<select id="Dropdown">
<option value="">So, what are you interested in? </option>
<option value="Children's Decor">Children's Decor</option>
<option value="Adult's Decor">Adult's Decor</option>
<option value="Birthday Ideas">Birthday Ideas</option>
<option value="Artwork">Artwork</option>
</select>`
}



const dropdown = () => {
const value = document.getElementById('Dropdown').value
showMessage(value, 'user')


setTimeout(()=> botReply (value), 1000)
inputWrapper.innerHTML=''
}
const botReply = (userValue) =>{
showMessage (`${userValue}? That's a great choice`, 'bot')
if (userValue === "Children's Decor") {  
showMessage (`If you are interested in ${userValue}, 
then I suggest you look at <a href = './isa-room.html'> this page</a>`, 'bot')} else if (userValue ==="Adult's Decor")
{showMessage (`If you are interested in ${userValue}, 
then I suggest you look at <a href = './home.html'> this page</a>`, 'bot')} else if (userValue ==="Birthday Ideas")
{showMessage (`If you are interested in ${userValue}, 
then I suggest you look at <a href = './home.html'> this page</a>`, 'bot')} else if (userValue ==="Artwork")
{showMessage (`If you are interested in ${userValue}, 
then I suggest you look at <a href = './diamond.html'> this page</a>`, 'bot')}

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
  showMessage(`Hi there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
document.getElementById('name-form').addEventListener('submit', handleNameInput)
document.getElementById('input-wrapper').addEventListener('change', dropdown)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
