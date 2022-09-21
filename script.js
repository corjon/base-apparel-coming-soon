const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const form = document.getElementById("form");
const textInput = document.getElementById("text-input");
const iconError = document.getElementById("icon-error");
var message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (textInput.value.match(mailFormat)) {
    message.classList.add("success-message");
    message.innerHTML = "Email successfully submitted";
    textInput.value = "";
    iconError.style.display = "none";
    textInput.style.border = "1px solid rgba(206, 151, 151, 0.5)";
  }
  else {
    message.classList.remove("success-message");
    message.innerHTML = "Please provide a valid email";
    iconError.style.display = "initial";
    textInput.style.border = "2px solid red";
  }
});