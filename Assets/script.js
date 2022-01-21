// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A", "B", "C", "D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ["0", "1", "2", "3","4","5","6","7","8","9"];
var specialCharacters = ["!",'"',"#","$","%","&","'","(",")"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

function generatePassword() {
  var password = []
  var length = window.prompt("Choose a length of at least 8 characters and no more than 128 characters.");
  console.log(length)
  var lowerCharacters = confirm("Would you like to add a lowercase character?");
  var lowerArray = lowerCase [Math.floor(Math.random() * lowerCase.length)];
  console.log(lowerArray)
  var upperCharacters= confirm("Would you like to add a uppercase character?"); 
  var upperArray = upperCase [Math.floor(Math.random() * upperCase.length)];
  console.log(upperArray)
  var numericCharacters = confirm("Would you like to add a numeric value?");
  var numericArray = numeric [Math.floor(Math.random() * numeric.length)];
  console.log(numericArray)
  var special = confirm("Would you like to add a special character?");
  var specialArray = specialCharacters [Math.floor(Math.random() * specialCharacters.length)];
  console.log(specialArray)

  return 
  



// if statements for all confirms, in the if statements push up to password arrays at top,
// for loop will loop through the arrays at the length that is required from user
// math.random for random numbers from numerica values 8-128
// pars.int length for 8-128
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
