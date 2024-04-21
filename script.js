const formInput = document.querySelector(".form-input");
const formButtonSubmit = document.querySelector(".submit-button");
const emailUser = document.querySelector(".email");
const passwordUser = document.querySelector(".password");

formButtonSubmit.addEventListener("click", checkForm);

function checkForm(evt) {
  evt.preventDefault();

  const checkInput = formInput.value;
  const checkEmail = emailUser.value;
  const checkPassword = passwordUser.value;

  if (checkInput === "") {
    alert("Name is required");
  } else if (checkEmail === "") {
    alert("Email is required");
  } else if (checkPassword === "") {
    alert("Password is required");
  } else {
    alert("Your account created");
  }
}
