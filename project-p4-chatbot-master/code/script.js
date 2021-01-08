// All the DOM selectors stored as short variables
const chat = document.getElementById("chat")
const nameForm = document.getElementById("name-form")
const nameInput = document.getElementById("name-input")
const inputWrapper = document.getElementById("input-wrapper")

const buttonSelectCoat= `
<button id="long" type="submit" value="long">Long coat</button>
<button id="short" type="submit" value="short">Short coat</button>
`
const buttonSelectEnvironment = `
<button id="citySuburb" type="submit" value="citySuburb">City/Suburb</button>
<button id="countryside" type="submit" value="countryside">Countryside</button>
`
const selectSize = `
<select id="select">
<option value="" selected disabled>Choose dog size</option>
<option value="small">Small</option>
<option value="medium">Medium</option>
<option value="large">Large</option>
</select>
`
const buttonSelectLifestyle = `
<button id="couchPotato" type="submit" value="couchPotato">Couch Potato</button>
<button id="workoholic" type="submit" value"workoholic">Workoholic</button>
<button id="active" type="submit" value="active">Active</button>
`

// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === "bot") {
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

//Interaction 7, confirm all preferenses and suggest dog breeds.
const dogBreed = (lifestyle, size, live, coat) => {
  if(lifestyle === "couchPotato" && size === "small" && live === "citySuburb" && coat === "short" ) {
  showMessage("Based on your preferences;<br>You're a Couch potato who live in a city or suburb and wants a small sized dog with a short coat.<br> You should get a short coated Chihuahua or a Pug!", "bot")
  } else if(lifestyle === "couchPotato" && size === "small" && live === "citySuburb" && coat === "long" ) {
    showMessage("Based on your preferences;<br>You're a Couch potato who live in a city or suburb and wants a small sized dog with a long coat.<br> You should get a long coated Chihuahua or a Pekingese!", "bot")
  } else if(lifestyle === "couchPotato" && size === "small" && live === "countryside" && coat === "short" ) {
    showMessage("Based on your preferences;<br>You're a Couch potato who live in a city or suburb and wants a small sized dog with a long coat.<br> You should get a short coated Chihuahua or a Pekingese!", "bot")
  } else {
  showMessage("I need to think about this a bit, come back later!", "bot")
  }
}

//Interaction 6, confirm environment choice and ask what coat they prefer on a dog. Store value.
const coatChoice = (live) => {
  showMessage(`Ok, ${live} it is! Do you want a dog with a short or long coat?`, "bot")
    inputWrapper.innerHTML = buttonSelectCoat
    document
      .getElementById("long")
      .addEventListener("click", () => {
      showMessage("I want a dog with a long coat", "user")
      inputWrapper.innerHTML = ""
      setTimeout(() => dogBreed("long"), 1000)
  })
  document
      .getElementById("short")
      .addEventListener("click", () => {
      showMessage("I want a dog with a short coat", "user")
      inputWrapper.innerHTML = ""
      setTimeout(() => dogBreed("short"), 1000)
  })
  const coat = document.getElementById("submit")
}

//Interaction 5, confirm size choice and ask if they live in city/suburb or countryside. Store value.
const environmentChoice = (size) => {
  showMessage(`Ok, you you want a ${size} sized dog breed. Where do you live?`, "bot")
  inputWrapper.innerHTML = buttonSelectEnvironment
  document
    .getElementById("citySuburb")
    .addEventListener("click", () => {
    showMessage("I live in a city or suburb", "user")
    inputWrapper.innerHTML = ""
    setTimeout(() => coatChoice("citySuburb"), 1000)
  })
    document
    .getElementById("countryside")
    .addEventListener("click", () => {
    showMessage("I live in the countryside", "user")
    inputWrapper.innerHTML = ""
    setTimeout(() => coatChoice("countryside"), 1000)
  })
  const live = document.getElementById("submit")
}

//Interaction 4, confirm lifestyle choice and ask for size. Store value.
const lifestyleChoice = (specificChoice) => {
  if(specificChoice === "couchPotato") {
    showMessage("Ok, so you like to take it easy. You need a companion that likes to do the same. All dogs needs exercise though, but some less than others. What size of dog do you like?", "bot")
    inputWrapper.innerHTML = selectSize
  } else if (specificChoice === "active") {
    showMessage("Ok, so you like to move! Let's find you a companion that likes it just as much. What size of dog do you like?", "bot")
    inputWrapper.innerHTML = selectSize
  } else {
    showMessage("You should probably think twice about getting a dog. No dog likes a human with no time.", "bot")
  }
  const size = document.getElementById("select")
  addEventListener("change", () => {
    showMessage(`I like ${size.value} sized dogs.`, "user")
    inputWrapper.innerHTML = ""
    setTimeout(() => environmentChoice(size.value), 1000)
  })
}

//Interaction 3, show lifesyle options.
const showLifestyleOptions = (userName) => {
  showMessage(`Ok ${userName}! Which option best decribes your lifestyle?`, "bot")
  inputWrapper.innerHTML = buttonSelectLifestyle
  document
    .getElementById("couchPotato")
    .addEventListener("click", () => {
      showMessage("I'm a Couch Potato", "user")
      inputWrapper.innerHTML = ""
      setTimeout(() => lifestyleChoice("couchPotato"), 1000)
    })
    document
    .getElementById("workoholic")
    .addEventListener("click", () => {
      showMessage("I'm a Workoholic", "user")
      inputWrapper.innerHTML = ""
      setTimeout(() => lifestyleChoice("workoholic"), 1000)
    })
    document
    .getElementById("active")
    .addEventListener("click", () => {
      showMessage("I have an active lifestyle!", "user")
      inputWrapper.innerHTML = ""
      setTimeout(() => lifestyleChoice("active"), 1000)
    })
    const lifestyle = document.getElementById("submit")
}

//Interaction 2, get name from user.
//This function handles the name input from the user 
const handleNameInput =(event) => {
  event.preventDefault()
  const userName = nameInput.value
  showMessage(`My name is ${userName}`, "user")
  nameInput.value = ""
  //After 1 second, show the next option, passing the name into it
  setTimeout(() => showLifestyleOptions(userName), 1000)
} 

// Interaction 1, greeting.
//Ask user for name. Wait 1 second before greeting user.
const greeting = () => {
  showMessage("Woof woof, I'm Charlie! <br>I know a thing or two about dog breeds, and what kind of people they get along best with. <br>I will help you find the perfect dog breed for you!", "bot")
  setTimeout(() => showMessage("What's your name?", "bot"), 2000)
  nameForm.addEventListener('submit', handleNameInput)  
}
setTimeout(greeting, 1000)










