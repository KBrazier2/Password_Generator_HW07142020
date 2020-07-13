// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  alert("Please select criteria for your new password!");
  var passwordLength = prompt("Please select length between 8 to 128!");

  var passwordLower = confirm("Would you like to include lowercase letters?!");
  var passwordUpper = confirm("How about uppercase letters?!?");
  var passwordNumeric = confirm("Don't forget, numeric characters?!?!");
  var passwordSpecial = confirm("And lastly, special characters?!?!?");

  var password = generatePassword(passwordLength, passwordLower, passwordUpper, passwordNumeric, 
    passwordSpecial);

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

function generatePassword(passLength, passLower, passUpper, passNumeric, passSpecial) {
 
  var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var numeric = [0,1,2,3,4,5,6,7,8,9]
  var special = ["!","@","#","$","%","^","&","*","(",")"]
  var finalPassword = "";


  
  if (passLower === true && passUpper === true && passNumeric === true && passSpecial === true) {
    var allCharacters = (lower + upper + numeric + special);
    for (var i = 0; i < passLength; i++) {
      var generated = Math.floor(Math.random() * allCharacters.length);
      finalPassword += allCharacters[generated];
      
    }
    
  }

return finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
