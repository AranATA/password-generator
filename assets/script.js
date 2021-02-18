// Assignment Code

// all variables are here to stay at global scope
var generateBtn = document.querySelector("#generate");

// this variable below "trial" is just for checking if the document.getElementById at the end works or not.
var trial = finalCharacters = '';

// these 5 are the variables are created by user inputs.
var passLength
var userLower
var userUpper
var userNumber
var userSpecial


// these are the arrays to be defined by prompts and be used in the function.
var lowerCharacter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCharacter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var special = [']', ' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\', ^', '_', '`', '{', '|', '}', '~'];

// contents of this variable is supposedly created by the function generatePassword after it receives the inputs.
var finalCharacters = '';


function generatePassword() {
  
// all array combinations are defined below, except ALL FALSE - when I tried to include it; that code sometimes brought up the prompt window again if nothing is picked but caused "maximum call stack size exceeded" error message appear, I guess due to infinite loops, at other times so I skipped it for the time being.

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
  
  // this return line is required to bring the result on the console but I am yet to learn the reason behind it, I am confused here.
  return finalCharacters;
 
}

// I simplified this section here and if you write a string instead of the variable trial you can see that it works.
document.getElementById("password").innerHTML = trial;


// Add event listener to generate button

generateBtn.addEventListener("click", wPassword);

function wPassword() {
   
  passLengthStr = prompt("Please enter the number of characters you want for your new password. It must be more than 12 and less than 128.");
  passLength = Number(passLengthStr);

  userLower = confirm("Do you want lowercase letters in your password?");

  userUpper = confirm("Do you want uppercase letters in your password?");

  userNumber = confirm("Do you want numbers in your password?");

  userSpecial = confirm("Do you want special characters in your password?");

  // if (userLower === false && userUpper === false && userNumber === false && userSpecial === false) {return wPassword();

  console.log(generatePassword());

  
  // I am yet to provide a limiting code for the passLength variable so that it stays between 12 and 128. Thanks again!
}