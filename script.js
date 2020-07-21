// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

// setting the password length to greater than 8 and lesser than 128

function generatePassword() {
  PasswordLength = prompt("How many Characters do you want for your password?");

    if (isNaN(PasswordLength)) {
      alert("Invalid Input. Please enter a number.");
    }
    else if (PasswordLength<8) {
      alert("Minimum length of the Password is 8.");
    }
    else if (PasswordLength>128) {
      alert("Maximum length of the password is 128");
    }
  else {

// The following lines will confirm with the user which combination they want to include in the password.
    var includeLowerCase = confirm("Do you want to include Lower case?");
    var includeUpperCase = confirm("Do you want to include Upper case");
    var includeNumber = confirm("Do you want to include Number?");
    var includeCharacter = confirm("Do you want to include special characters?");

// Defining Array variables for different combinations.
    var choiceLower = ["a", "b","c","d","e","f","g","h","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var choiceUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var choiceNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var choiceChar = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "[", "]", "{", "}", "\"", "'", ";", ":", ",", ".", ">", "<", "/", "|", "\\", "?"];


// Here we make the final selection Array

    var finalSelectionArray = [];
    var finalPassword = "";

      if (includeLowerCase) {
        finalSelectionArray  = finalSelectionArray.concat(choiceLower);
      }
      if (includeUpperCase) {
        finalSelectionArray = finalSelectionArray.concat(choiceUpper);
      }
      if (includeNumber) {
        finalSelectionArray = finalSelectionArray.concat(choiceNumber);
      }
      if (includeCharacter) {
        finalSelectionArray = finalSelectionArray.concat(choiceChar);
      }
      if (!includeLowerCase && !includeUpperCase && !includeNumber && !includeCharacter) {
        alert("Please select at least one combination");
        return;
      }


// Here we put the for loop to randomly generate the password containing the combination from final selection array.
    for (i = 0; i< PasswordLength; i++) {
      var guessChar = finalSelectionArray[Math.floor(Math.random()*finalSelectionArray.length)];
      finalPassword = finalPassword.concat(guessChar);
    }

      return(finalPassword);

  }
}




