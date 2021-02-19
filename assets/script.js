// Assignment Code

var generateBtn = document.querySelector("#generate");

var passLength;
var userLower;
var userUpper;
var userNumber;
var userSpecial;

var lowerCharacter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCharacter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var special = [']', ' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\', ^', '_', '`', '{', '|', '}', '~'];

var finalCharacters = '';
var mes;

function generatePassword() {
  
// all array combinations are defined below.

  var array = [];
 
  if (userLower && userUpper && userNumber && userSpecial) {array = lowerCharacter.concat(upperCharacter, number, special);
  }

 
  else if (userLower && userUpper && userNumber) {array = lowerCharacter.concat(upperCharacter, number);
  }
  else if (userLower && userUpper && userSpecial) {array = lowerCharacter.concat(upperCharacter, special);
  }
  else if (userLower && userNumber && userSpecial) {array = lowerCharacter.concat(number, special);
  }
  else if (userUpper && userNumber && userSpecial) {array = upperCharacter.concat(number, special);
  }


  else if (userLower && userUpper) {array = lowerCharacter.concat(upperCharacter);
  }
  else if (userLower && userNumber) {array = lowerCharacter.concat(number);
  }
  else if (userLower && userSpecial) {array = lowerCharacter.concat(special);
  }
  else if (userUpper && userNumber) {array = upperCharacter.concat(number);
  }
  else if (userUpper && userSpecial) {array = upperCharacter.concat(special);
  }
  else if (userNumber && userSpecial) {array = number.concat(special);
  }


  else if (userLower) {array = lowerCharacter;
  }
  else if (userUpper) {array = upperCharacter;
  }
  else if (userNumber) {array = number;
  }
  else if (userSpecial) {array = special;
  } 

  function getRandom() {
    return array[Math.floor(Math.random()*array.length)];

    //what is the difference with this one? return array.charAt[Math.floor(Math.random()*array.length)];
  }

  for ( var i = 0; i < passLength; i++ ) {
    finalCharacters += getRandom();
  }
  
  return finalCharacters;
 }

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  
  passLengthStr = prompt("Please enter the number of characters you want for your new password. It must be more than 12 and less than 128.");
  passLength = Number(passLengthStr);
  if (passLengthStr<12||passLengthStr>128){
    return writePassword();
  } 
  
  userLower = confirm("Do you want lowercase letters in your password?");
  userUpper = confirm("Do you want uppercase letters in your password?");
  userNumber = confirm("Do you want numbers in your password?");
  userSpecial = confirm("Do you want special characters in your password?");
  if (userLower === false && userUpper === false && userNumber === false && userSpecial === false) {
    return writePassword();
  }
  
  console.log(generatePassword());
  
  var passwordText = document.querySelector("#password");
  passwordText.value = finalCharacters;
     
}

generateBtn.addEventListener("mouseover", location.reload());




 
   
