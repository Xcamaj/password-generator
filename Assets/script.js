// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A", "B", "C", "D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ["0", "1", "2", "3","4","5","6","7","8","9"];
var specialCharacters = ["!",'"',"#","$","%","&","'","(",")"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
  writePassword()


}

function generatePassword() {
  var password = []
  var length = window.prompt("Choose a length of at least 8 characters and no more than 128 characters");
  console.log(length)
  var lowerCharacters = confirm("lowercase");
  var upperCharacters= confirm("uppercase"); 
  var numericCharacters = confirm("numeric");
  var special = confirm("special characters");
  
  for (let i ) {}

// if statements for all confirms, in the if statements push up to password arrays at top,
// for loop will lopp through the arrays at the length that is required from user
// math.random for random numbers from numerica values 8-128
// pars.int length for 8-128
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
