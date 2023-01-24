// Assignment code here
function generatePassword(){
  var input = prompt("Enter desired password length (must be betwen 8 and 128 characters)");
  var passwordLength = parseInt(input);

  if (passwordLength < 8){
    alert("Password must be at least 8 characters");
    return
  }
  if (passwordLength > 128 ){
    alert("Password must not exceed 128 characters");
    return
  }
  if (isNaN(passwordLength)){
    alert("This is not a number. Try again.")
    return
  }

  var characterOptions = [];   //empty array to push selected choices
  var createdPassword = [""];    //empty array to hold the created password
  var yesNumbers = window.confirm("Do you want your password to contain numbers?");
    //console.log(numbers);
      var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        if (yesNumbers){
          characterOptions = characterOptions.concat(numbers);
          alert("Your password will contain numbers");
        }
        else{ 
          alert("Your password will not contain numbers");
        }

  var yesLowercase = window.confirm("Do you want your password to contain lowercase letters?");
      var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        if (yesLowercase){
          characterOptions = characterOptions.concat(lowercase);
          alert("Your password will contain lowercase letters");
        }
        else{ 
          alert("Your password will not contain lowercase letters");
        }

  var yesUppercase = window.confirm("Do you want your password to contain uppercase letters?");
      var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        if (yesUppercase){
          characterOptions = characterOptions.concat(uppercase);
          alert("Your password will contain uppercase letters");
        }
        else{ 
          alert("Your password will not contain uppercase letters");
        }
  var yesSpecialCharacters = window.confirm("Do you want your password to contain special characters?");
      var specialCharacters = ["!", "#", "$", "%" , "&", "(", ")", "*", "+", "-", ".", "/", ":",";", "<", "=", ">", "?", "@", "[", "]", "^", "_"];
        if (yesSpecialCharacters){
          characterOptions = characterOptions.concat(specialCharacters);
          alert("Your password will contain special characters");
        }
        else{ 
          alert("Your password will not contain special characters");
        }
console.log(characterOptions);


for (index = 0; index <= passwordLength; index++) {
    var randomNumber = Math.floor(Math.random() * characterOptions.length);
    createdPassword = createdPassword + characterOptions[randomNumber]; 
    
}
return createdPassword;
 
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
