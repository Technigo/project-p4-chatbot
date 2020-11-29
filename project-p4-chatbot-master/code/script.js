document.getElementsByClassName('input')

var questions = [
  'Whats your name ?',
  'Where do you live?',
  'How old are you?',
  'It was nice talking you. Thank you for the time you took. Have a great Day.'
];
var num = 0;

var inputBox = document.querySelector("#ans");
var output = document.querySelector("#result");
output.innerHTML = questions[num];

function showResponse() {
var input = inputBox.value;
if(inputBox.value == "") {
  
}else {
if(num == 0) {
  output.innerHTML = `Hi ${input}. What a beautiful name!`;
  inputBox.value = "";
  inputBox.setAttribute("placeholder", "Wait for 2 secs");
  ++num;
  setTimeout(changeQuestion, 2000);
} else if(num == 1) {
  output.innerHTML = `It must be awesom to live in ${input}. Lucky you!`;
  inputBox.value = "";
  inputBox.setAttribute("placeholder", "Wait for 2 secs");
  ++num;
  setTimeout(changeQuestion, 2000);
} else if(num == 2) {
  output.innerHTML = `You are ${2020 - input} years old. What a perfect age to be alive. Take advantage of all the possibilities you have. It's never too late to fullfil your dremas.`;
  inputBox.value = "";
  inputBox.setAttribute("placeholder", "Wait for 2 secs");
  ++num;
  setTimeout(changeQuestion, 2000);
} 
}
}

function changeQuestion() {
inputBox.setAttribute("placeholder", "Enter your response");
output.innerHTML = questions[num];
if(num == 3) {
  inputBox.style.display = "none";
}
}

$(document).on('keypress', function(e) {
if(e.which == 13) {
  showResponse();
}
})

$( "#ans" ).focus();