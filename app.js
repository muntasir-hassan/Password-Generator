const passwordBox = document.getElementById("password");
const length = 8;
const possibleChar =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*(){}-=+_<>/.";
const copyBtn = document.getElementById("copy");

function createPassword() {
  let password = "";

  while (length > password.length) {
    password += possibleChar[Math.floor(Math.random() * possibleChar.length)];
  }
  passwordBox.value = password;
}

copyBtn.addEventListener("click", () => {
  passwordBox.select();
  document.execCommand("copy");
  //passwordBox.blur();
});
