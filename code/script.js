// All the DOM selectors stored as short variables
// Global variables, if you need any, declared here
const chat = document.getElementById('chat')
const nameForm = document.getElementById('name-form')
const q1Input = document.getElementById('name-input')
const goodbyeForm = document.getElementById('name-form')
const goodbyeInput = document.getElementById('name-input')
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
        <img src="assets/MeExercising.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/PersonalTrainer.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here, Q1 and greeting
 greeting = () => {
  showMessage(`Hello Karin, lovely to see you today! How are you doing - Great, Good or So so?`, 'bot')
  inputWrapper.innerHTML=`
  <button id='Great'>Great</button>
  <button id='Good'>Good</button>
  <button id='So so'>So so</button>
  `  
  document.
  getElementById('Great').addEventListener('click', ()  => {
    showMessage("Great","user")
    setTimeout(() => showMessage("I am happy to hear that!","bot"),1000)
    setTimeout(askAboutWeather, 3000)
  }) 

  document.
  getElementById('Good').addEventListener('click', ()  => {
    showMessage("Good","user")
    setTimeout(() => showMessage("Ok, some exercise will make you feel even better!","bot"),1000)
    setTimeout(askAboutWeather, 3000)
  }) 
  document.
  getElementById('So so').addEventListener('click', ()  => {
    showMessage("So so","user")
    setTimeout(() => showMessage("Some days are like that, you will not feel worse after exercising :)","bot"),1000)
    setTimeout(askAboutWeather, 3000)
  }) 
 
}

setTimeout(greeting, 1000)

//Good bye
// Set up your eventlisteners here
/*
const goodBye = event => {
  preventDefault()
  nameForm.innerHTML=`
  <input id="name-input" type="text" />`
  const userGoodbyeInput = q1Input.value
  nameForm.addEventListener('submit',userGoodbyeInput)
  showMessage(userGoodbyeInput,'user')
}
*/

askForPerformance = (performance) => {
  if(performance === "yes")
  showMessage("I knew it, why did I even ask? ;)","bot")
  &
  setTimeout(() => showMessage("I see you again tomorrow!","bot"),1000)
  //& setTimeout(goodBye,1000)

  else
  showMessage("Come on, do it for me :)","bot")
  &
  setTimeout(() => showMessage("I see you again tomorrow!","bot"),1000)
  //& setTimeout(goodBye,1000)
}

//Question 5
const performance = () => {
  showMessage("Will you promise me you do your best? ;)", "bot")
  inputWrapper.innerHTML=`
  <button id='Yes'>Yes</button>
  <button id='No'>No</button>
  `
  document.
  getElementById('Yes').addEventListener('click', ()  => askForPerformance("yes"))

  document.
  getElementById('No').addEventListener('click', ()  => askForPerformance("no"))
}

//Question 4 
const askForActivity = () => {
  const outputactivity = document.getElementById('exerciseDropDown').value
 // console.log(`you selected ${outputactivity}`)
 setTimeout(() => showMessage(`I will go for ${outputactivity}`, "user"),1000) 
 setTimeout(() => showMessage(`Good choice going for ${outputactivity}`, "bot"),2000)
  setTimeout(performance,4000)
}

//setTimeout(suggestExercise, 1000)

//Question 3
const askForWeather = (weather) => {
//setTimeout(() => showMessage(`So you're telling me it's ${weather}, then I suggest you pick an activity from this list`, "bot"),1000)
showMessage(`${weather}`,"user")
showMessage(`So you're telling me it's ${weather}, then I suggest you pick an activity from this list`, "bot")

if(weather === "sunny")
//setTimeout(() =>
 inputWrapper.innerHTML=`
 <select id='exerciseDropDown'>
 <option value="">Select an activity:       </option value>
 <option value="Swim">Swim  </option value>
 <option value="Golf">Golf                  </option value>
 <option value="Tennis">Tennis              </option value>
 </select>`
//,2000)

else if(weather === "cloudy")
//setTimeout(() => 
inputWrapper.innerHTML=`
  <select id='exerciseDropDown'>
  <option value="">Select an activity:</option value>
  <option value="Running">Running</option value>
  <option value="Outdoor gym">Outdoor gym</option value>
  <option value="Power walk">Power walk</option value>
  </select>`
 // ,2000)

else  
//setTimeout(() =>
inputWrapper.innerHTML=`
  <select id='exerciseDropDown'>
  <option value="">Select an activity:  </option value>
  <option value="Indoor gym">Indoor gym</option value>
  <option value="Indoor tennis">Indoor tennis</option value>
  <option value="Walk in the rain">Walk in the rain</option value>
  </select>` 
//,2000)
  
  document.getElementById('exerciseDropDown').addEventListener('change', ()  => setTimeout(askForActivity(),1000))   
}

//Question 2
const askAboutWeather = () => {
//Add conditional responses depending on the answer of question 1
  showMessage(`What is the weather like today?`,'bot')
  inputWrapper.innerHTML=`
  <button id='SunnyButton'>Sunny</button>
  <button id='CloudyButton'>Cloudy</button>
  <button id='RainyButton'>Rainy</button>
  `
  document.
    getElementById('SunnyButton').addEventListener('click', ()  => askForWeather("sunny")) 

  document.
    getElementById('CloudyButton').addEventListener('click', () => askForWeather("cloudy"))

  document.
    getElementById('RainyButton').addEventListener('click', ()  => askForWeather("rainy"))
}



/*
//Question 1
// Set up your eventlisteners here
const handleNameInput = event => {
  event.preventDefault()
  const userNameinput = q1Input.value
//  console.log(userNameinput)
  showMessage(userNameinput,'user')
  setTimeout(askAboutWeather, 1000)
}

nameForm.addEventListener('submit',handleNameInput)
*/
 

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

  // Put your code here!
