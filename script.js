// Assignment code here

var passwordLength;
var verifyLower;
var verifyUpper;
var verifyNumber;
var verifySpecialCharacters;
var userPreference;

// function generatePassword () {
//   var passwordLength = 8,
//     charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//     retval = "";
//   for (var i = 0, n = charset.length; i < passwordLength; ++i) {
//     retval += charset.charAt(Math.floor(Math.random() * n));
//   }
//   return retval;
// }

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// To Upper Case 
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "$", "#", "%", "&", "^", "@", "*", "(", ")", "-", "'", "+", "_", ",", ".", "/", "\;", "\:", "<", ">", "=", ";", ":", "?", "~", "`", "{", "}", "[", "]", "|", " "];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Asking the user input
function generatePassword() {
  passwordLength = prompt("How many characters do you want for your password? Choose only between 8 and 128");
  console.log("Password length" + passwordLength);
  if (!passwordLength) {
    alert("Oops Wrong Button");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose only between 8 and 128");
    console.log("Password length" + passwordLength);
  } else {
    verifyLower = confirm("Hey, Hey, will there be any lower case letters?");
    console.log("Lower Case" + verifyLower);
    verifyUpper = confirm("Hey, Hey, will there be any upper case letters?");
    console.log("Upper Case" + verifyUpper);
    verifyNumber = confirm("Hey, Hey, will there be any numbers?");
    console.log("Numbers" + verifyNumber);
    verifySpecialCharacters = confirm("Hey, Hey, will there be any special characters?");
    console.log("Special Characters" + verifySpecialCharacters);
  };

if (!verifyLower && !verifyUpper && !verifyNumber && !verifySpecialCharacters) {
  userPreference = alert("You HAVE to choose a criteria unfortunately..");
  // 4 true choices
} else if (verifyLower && verifyUpper && verifyNumber && verifySpecialCharacters) {
  userPreference = lowerCase.concat(upperCase, numbers, specialCharacters);
  console.log(userPreference);
  // 3 true choices
} else if (verifyLower && verifyUpper && verifyNumber) {
  userPreference = lowerCase.concat(upperCase, numbers);
  console.log(userPreference);
} else if (verifyLower && verifyUpper && verifySpecialCharacters) {
  userPreference = lowerCase.concat(upperCase, specialCharacters);
  console.log(userPreference);
} else if (verifyLower && verifyNumber && verifySpecialCharacters) {
  userPreference = lowerCase.concat(numbers, specialCharacters);
  console.log(userPreference);
} else if (verifyUpper && verifyNumber, verifySpecialCharacters) {
  userPreference = upperCase.concat(numbers, specialCharacters);
  console.log(userPreference);
  // 2 true choices
} else if (verifyLower && verifyUpper) {
  userPreference = lowerCase.concat(upperCase);
  console.log(userPreference);
} else if (verifyLower && verifyNumber) {
  userPreference = lowerCase.concat(numbers);
  console.log(userPreference);
} else if (verifyLower && verifySpecialCharacters) {
  userPreference = lowerCase.concat(specialCharacters);
  console.log(userPreference);
} else if (verifyUpper && verifyNumber) {
  userPreference = upperCase.concat(numbers);
  console.log(userPreference);
} else if (verifyUpper && verifySpecialCharacters) {
  userPreference = upperCase.concat(specialCharacters)
  console.log(userPreference);
} else if (verifyNumber && verifySpecialCharacters) {
  userPreference = numbers.concat(specialCharacters);
  console.log(userPreference);
  // 1 true choice
} else if (verifyLower) {
  userPreference = lowerCase;
  console.log(userPreference);
} else if (verifyUpper) {
  userPreference = blankUpper.concat(upperCase);
  console.log(userPreference);
} else if (verifyNumber) {
  userPreference = numbers;
  console.log(userPreference);
} else if (verifySpecialCharacters) {
  userPreference = specialCharacters;
  console.log(userPreference);
};

var passwordBlank = [];

// Random selection loop
for (var i = 0; i < passwordLength; i++) {
  var allPreferences = userPreference[Math.floor(Math.random() * userPreference.length)];
  passwordBlank.push(allPreferences);
  console.log(allChoices);
}

var password = passwordBlank.join("");
console.log("Your Password:" + password);
return password;

}

