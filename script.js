const chat = document.getElementById("chat")
const nameForm = document.getElementById("name-form")
const nameInput = document.getElementById("name-input")
const inputWrapper = document.getElementById("input-wrapper")

let userName = ""

const graphicCathegories = `
<select id="select">
<option value="" selected disabled>Click here to choose</option>
<option value="Web design">Web design</option>
<option value="Posters">Posters</option>
<option value="Print ready">Print ready</option>
</select>
`

const illustrationCathegories = `
<select id="select">
<option value="" selected disabled>Click here to choose</option>
<option value="Ink">Ink</option>
<option value="Watercolour">Watercolour</option>
<option value="Acrylic">Acrylic</option>
<option value="Digital">Digital</option>
</select>
`

const animationCathegories = `
<select id="select">
<option value="" selected disabled>Click here to choose</option>
<option value="2D">2D</option>
<option value="3D">3D</option>
</select>
`

const showMessage = (message, sender) => {
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg fade-in">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg fade-in">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  
  setTimeout(() => {
    document
      .querySelectorAll(".fade-in")
      .forEach((chatBubble) => {
        chatBubble.classList.remove('fade-in')
      })
  }, 1000)

  chat.scrollTop = chat.scrollHeight
}


//Sammanfattning
const askForConfirmation = (selectedCathegory) => {
showMessage(`Good to know. So you want to see some ${selectedCathegory} art, is that correct?`, "bot")
inputWrapper.innerHTML = `
<button id="restart">No, please redo</button>
<button id="confirm">Yes</button>
`
document.getElementById("restart").addEventListener("click",() => location.reload())

document.getElementById("confirm").addEventListener("click", () => {
  inputWrapper.innerHTML = ""
  showMessage("Yes, please take me there", "user")
  setTimeout(() => showMessage(`Very well. Hold on and I will redirect you to the correct page in about 5 seconds. It was nice talking to you and I hope we'll talk again soon!`, "bot"),1000)
  setTimeout(() => showMessage("3", "bot"), 5000)
  setTimeout(() => showMessage("2", "bot"), 6000)
  setTimeout(() => showMessage("1", "bot"), 7000)

  if (selectedCathegory === "Web design") {
  setTimeout(() => window.location.href="https://www.facebook.com/ArtbyErry", 8000)

} else if (selectedCathegory === "Posters") {
  setTimeout(() => window.location.href="https://www.illustratorcentrum.se/portfolio/erika-andersson-porath/", 8000)

} else if (selectedCathegory === "Print ready") {
  setTimeout(() => window.location.href="https://www.artstation.com/grimmulv", 8000)

} else if (selectedCathegory === "Ink") {
  setTimeout(() => window.location.href="https://www.illustratorcentrum.se/portfolio/erika-andersson-porath/", 8000)

} else if (selectedCathegory === "Watercolour") {
  setTimeout(() => window.location.href="https://www.instagram.com/artbyerry/", 8000)

} else if (selectedCathegory === "Acrylic") {
  setTimeout(() => window.location.href="https://www.facebook.com/ArtbyErry", 8000)

} else if (selectedCathegory === "Digital") {
  setTimeout(() => window.location.href="https://www.artstation.com/grimmulv", 8000)

} else if (selectedCathegory === "2D") {
  setTimeout(() => window.location.href="https://www.instagram.com/artbyerry/", 8000)

} else if (selectedCathegory === "3D") {
  setTimeout(() => window.location.href="https://www.facebook.com/ArtbyErry", 8000)
}
})
}

//Fråga 4
const askForProfession = (selectedCathegory) => {
  showMessage("Great! Just out of curiosity, are you just browsing some amazing art today or are you a potential client?", "bot")
  inputWrapper.innerHTML=`
<button id="lurkerButton">Lurker</button>
<button id="clientButton">Client</button>
`
document
.getElementById("lurkerButton")
.addEventListener("click", () => {
showMessage("I'm a lurker", "user")
inputWrapper.innerHTML = ""
setTimeout(() => askForConfirmation(selectedCathegory), 1000)
})

document
.getElementById("clientButton")
.addEventListener("click", () => {
showMessage("I'm a client", "user")
inputWrapper.innerHTML = ""
setTimeout(() => askForConfirmation(selectedCathegory), 1000)
})

}

// Fråga 3
const askForCathegory = cathegoryChoice => {
  showMessage(`Good choice! What kind of ${cathegoryChoice} are you looking for?`, "bot")

  if (cathegoryChoice === "graphic") {
    inputWrapper.innerHTML = graphicCathegories
  } else if (cathegoryChoice === "illustration") {
    inputWrapper.innerHTML = illustrationCathegories
  } else {
    inputWrapper.innerHTML = animationCathegories
  }

  const selectedCathegory = document.getElementById("select")
  selectedCathegory.addEventListener("change", () =>{
    showMessage(selectedCathegory.value, "user")
    inputWrapper.innerHTML = ""
    setTimeout(() => askForProfession(selectedCathegory.value), 1000)
  })
}


// Fråga 2
const askForArt = () => {
showMessage(`My name is GuideBot, and I am here to guide you to the correct page. What do you want to see today?`, "bot")
inputWrapper.innerHTML=`
<button id="graphicButton">Graphic Design</button>
<button id="illustrationButton">Illustration</button>
<button id="animationButton">Animation</button>
`
document
.getElementById("graphicButton")
.addEventListener("click", () => {
showMessage("I want to look at graphic design", "user")
inputWrapper.innerHTML = ""
setTimeout(() => askForCathegory("graphic"), 1000)
})

document
.getElementById("illustrationButton")
.addEventListener("click", () => {
showMessage("I want to look at illustrations", "user")
inputWrapper.innerHTML = ""
setTimeout(() => askForCathegory("illustration"), 1000)
})

document
.getElementById("animationButton")
.addEventListener("click", () => {
showMessage("I want to look at animations", "user")
inputWrapper.innerHTML = ""
setTimeout(() => askForCathegory("animation"), 1000) 
})

}

// Fråga 1
const handleNameInput = (event) => {
    event.preventDefault()
    const userName = nameInput.value
    nameInput.value = ""
    showMessage(userName, "user")
    setTimeout (() => showMessage(`Nice to meet you ${userName}!`, "bot"), 1000)
    setTimeout(() => askForArt(userName), 2500)

}

// Starts here
const greeting = () => {
  showMessage("Hello there! Welcome to Erry's portfolio! What's your name?", "bot")

}

nameForm.addEventListener("submit", handleNameInput)

setTimeout(greeting, 1000)
