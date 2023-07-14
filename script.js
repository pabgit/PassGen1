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
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var hasUpperCasedCharacters = confirm('Click OK to confirm including uppercase characters.');
var hasLowerCasedCharacters = confirm('Click OK to confirm including lowercase characters.')
var hasSpecialCharacters = confirm('Click OK to confirm including special characters.');
var hasNumericCharacters = confirm('Click OK to confirm including numeric characters.'); 
var password = ""
var posspass = []
if (hasUpperCasedCharacters) {
  posspass = posspass.concat(upperCasedCharacters)};
if (hasLowerCasedCharacters) {
  posspass = posspass.concat(lowerCasedCharacters)};
if (hasSpecialCharacters) {
  posspass = posspass.concat(specialCharacters)};
if (hasNumericCharacters) {
  posspass = posspass.concat(numericCharacters)};  
if (hasUpperCasedCharacters === false && hasLowerCasedCharacters === false && hasSpecialCharacters === false && hasNumericCharacters === false) {
  alert('At least one character type must be selected!');
  return "Try again";
  }

  for (let i = 0; i < charnum; i++) {
    password += posspass[(Math.floor(Math.random() * posspass.length))];
  }
  
return password
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);