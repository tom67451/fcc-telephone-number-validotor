

const input = document.getElementById("user-input");
const btnCheck = document.getElementById("check-btn");
const btnClear = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div")



const prefixRegex = /^(?:1)/
const check = () => {
const userInput = input.value.trim() 
const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?(\d{3})[\s-]?(\d{4})$/
  if (!userInput) {
        alert("Please provide a phone number");
        return;} else {
          if (regex.test(userInput)) {
            resultsDiv.textContent = `Valid US number: ${userInput}`
          } else {
            resultsDiv.textContent = `Invalid US number: ${userInput}`
          }
        }
  
  
}
const clear = () => {
  resultsDiv.innerHTML = "";
  

}




//add event listeners
btnCheck.addEventListener("click", check)
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    check(); 
  }
});
btnClear.addEventListener("click", clear)
