// All the DOM selectors stored as short variables
const chat = document.getElementById ("chat")
const nameForm = document.getElementById ("name-form") 
const nameInput = document.getElementById ("name-input")
const inputWrapper = document.getElementById("input-wrapper")


//Type of problems for question 3
const stinkyProblem = `
<select id="select">
  <option value="" selected disabled>Choose...</option>
  <option value="The diaper is full">The diaper is full</option>
  <option value="Vomit 🤮">Vomit 🤮</option>
</select>
`

const screamProblem = `
<select id="select">
  <option value="" selected disabled>Choose...</option>
  <option value="My baby is hungry">My baby is hungry</option>
  <option value="There is a burp stuck inside my baby">There is a burp stuck inside my baby</option>
  <option value="Someone needs to cuddle with my baby">Someone needs to cuddle with my baby</option>
`

const colourProblem = `
<select id="select">
  <option value="" selected disabled>Choose...</option>
  <option value="Blueish">Blueish</option>
  <option value="Yellowish">Yellowish</option>
  <option value="Green">Green</option>
</select>
`

// Global variables, if you need any, declared here

let userName = ""

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/babyowl.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/owl.jpg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

//Question retry (last)
//Try to fade this one instead of just wait 4 sec 
const retry = () => {
  setTimeout(() => {
    showMessage("Or did I missunderstand you? 😇", "bot")
    inputWrapper.innerHTML = `
    <button id="restart">Retry </button>
    `
    document.getElementById("restart").addEventListener("click", () => location.reload())
  }, 5000)
}

//Answer Q4 scream - upgraded nois cancelation

// Answer Q4 Diaper
const diaperAnswer = () => {
  showMessage(`Sorry 💩 I can't stand the smell but I called for some back up </br></br></br></br></br>`, "bot")
  inputWrapper.innerHTML = `<img src="assets/grandparent.jpg" />`
}

// Answer Q4 Green 
//changes the background to green
const greenTrollAnswer = () => {
    document.body.style.background = "#4a9627"
    setTimeout(showMessage(`Bring back the baby to mother troll immediately! 😡 </br>
    <img src="assets/babytroll.png" />`,"bot"), 1000)
    retry()
}

// Answer Q4 Cuddle
// Inte snyggaste lösingen, giphyn är för stor för pratbubbland så satte den i inputWrappen istället
// men det kommer text och giphy så jag är tillräckligt nöjd! =D
const cuddleAnswer = () => {
  showMessage(`Consider it done! </br></br></br>`, "bot")
  inputWrapper.innerHTML = `<iframe src="https://giphy.com/embed/PhaBjCRCfmP61rR0Oq" frameBorder="0"></iframe>`
}

//Question 4 - the end of a normal conversation
// Bot reply to selected problem
//some of them creates specific changes, functions declared(?) above
//the rest selected problems get the same answer 
const fixingProblem = (selectedProblem) => {

  if (selectedProblem === "Green") {
    greenTrollAnswer()
  } else if (selectedProblem === "Someone needs to cuddle with my baby") {
    setTimeout(cuddleAnswer(), 1000)
  } else if (selectedProblem === "The diaper is full") {
    setTimeout(diaperAnswer(), 1000)
  } else {
    setTimeout(showMessage(`Thank you, then I know what's wrong. Do you want me to fix that for you?`, "bot"), 1000)
    inputWrapper.innerHTML = `
    <button id="approve">Yes</button>
    <button id="cancel">No, stupid bot</button>
    `
    document.getElementById("approve").addEventListener("click", () => {
      showMessage("Yes", "user")
      setTimeout(() => {
        inputWrapper.innerHTML = "" 
        showMessage(`Consider it done!</br></br>You may now go and take a nap, I will take care of ${userName}.`,
        "bot")}
        , 1000)
    })

    document.getElementById("cancel").addEventListener("click", () => {
      showMessage("No, stupid bot", "user")
      setTimeout(() => {
        //inputWrapper.innerHTML = ""
        showMessage("Hmpf! 😤 Leave me alone then", 
        "bot")}
      , 1000)
      retry()
    }) 
  }
}
  

//Question 3
// Bot ask, user answer by select then revoke fixingProblem-function
const askForSpecificProblem = typeOfProblem  => {
  
  showMessage('Oh I see, could you be more specific?', "bot") 

  if (typeOfProblem === "smells") {
      //Changing input field to a select, options are declared at the top
      inputWrapper.innerHTML = stinkyProblem
    } else if (typeOfProblem === "screaming") {
      inputWrapper.innerHTML = screamProblem
    } else {
      inputWrapper.innerHTML = colourProblem
    }

    const selectedProblem = document.getElementById("select")

    selectedProblem.addEventListener("change", () => {
      showMessage(selectedProblem.value, "user")
      setTimeout(()=> fixingProblem(selectedProblem.value), 1000)
    })
}


//Question 2
// Bot asks second question and the user can answer by 3 different buttons 
const askForProblem = userName => {
  showMessage(`I bet ${userName} is a lovely baby. </br></br> What seems to be the problem?`, "bot")
  //Changing input to buttons instead of text input
  inputWrapper.innerHTML=`
  <button id="stinkButton">My baby stinks</button>
  <button id="screamButton">My baby screams</button>
  <button id="weirdColourButton">My baby is a weird colour</button>
  `
  //listens to click on buttons and then revokes askForSpecificProblem-function, and submits the parameter to next function
  document
    .getElementById("stinkButton")
    .addEventListener("click", () => {
      showMessage(`My baby stinks`, "user")
      setTimeout(() => askForSpecificProblem("smells"), 1000)
    })
  document
    .getElementById("screamButton")
    .addEventListener("click", () => {
      showMessage(`My baby screams`, "user")
      setTimeout(() => askForSpecificProblem("screaming"), 1000)
    })
  document
    .getElementById("weirdColourButton")
    .addEventListener("click", () => {
      showMessage(`My baby is a weird colour`, "user")
      setTimeout(() => askForSpecificProblem("has a weird colour"), 1000)
    })
  }


//Question 1 
// This function make the user answer with their name and then revokes askForProblem-function
const handleNameInput = (event) => {
  event.preventDefault()
  userName = nameInput.value
  nameInput.value = ""
  showMessage(userName,"user")
  setTimeout(()=> askForProblem(userName), 1000)
}


// Starts here
const greeting = () => {
  showMessage(`What is the name of the kiddo?`, 'bot') 
}

// Set up your eventlisteners here
nameForm.addEventListener("submit", handleNameInput)
  //This ones listens to submit and when submit it revokes handleNameInput-function

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greeting, 1000)
