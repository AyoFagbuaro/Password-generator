// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var includeLowercase = "";
var includeUppercase = "";
var includeNumeric = "";
var includeSpecial = "";
var passwordLength = "";
var allChars = [];

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = prompt(
    "Enter the length of the password (between 8 and 128 characters):"
  );

  // Validate the length input
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a number between 8 and 128.");
    return;
  }

  includeLowercase = confirm("Include lowercase letters?");
  if (includeLowercase) {
    for (var i = 0; i < passwordLength; i++) {
      allChars += getRandom(lowerCasedCharacters);
    }
  }
  includeUppercase = confirm("Include uppercase letters?");
  if (includeUppercase) {
    for (var i = 0; i < passwordLength; i++) {
      allChars += getRandom(upperCasedCharacters);
    }
  }
  includeNumeric = confirm("Include numeric letters?");
  if (includeNumeric) {
    for (var i = 0; i < passwordLength; i++) {
      allChars += getRandom(numericCharacters);
    }
  }
  includeSpecial = confirm("Include special letters?");
  if (includeSpecial) {
    for (var i = 0; i < passwordLength; i++) {
      allChars += getRandom(specialCharacters);
    }
  }

  // Validate that at least one character type is selected
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecial
  ) {
    alert("Please select at least one character type.");
    return;
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  var random = Math.floor(Math.random() * arr.length);
  var x = arr[random];
  return x;
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += getRandom(allChars);
  }

  // alert("Generated Password: " + password);
  return password;
}

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
