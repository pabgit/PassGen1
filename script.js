// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var charnum = window.prompt("How many characters? (minimum 8, maximum 128)");
  if (charnum < 8 || charnum > 128) {
    window.alert("Number must be 8 - 128 characters!");
    generatePassword()
  }
  prompt("Do you want lowercase letters?")
  if("yes")

  return "Howdy!"
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// lowercase, uppercase, numeric, and/or special characters
// a few if statements
