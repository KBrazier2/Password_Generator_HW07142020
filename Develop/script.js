// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  alert("Please select criteria for your new password!");
  prompt("Please select length between 8 to 128!");
  confirm("Would you like to include lowercase letters?!");
  confirm("How about uppercase letters?!?");
  confirm("Don't forget, numeric characters?!?!");
  confirm("And lastly, special characters?!?!?");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
