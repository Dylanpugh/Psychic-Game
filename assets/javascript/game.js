var alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var wins = 0;

var losses = 0;

var guessesleft = 10;

var guesses = 0;

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

//Used this to check if computerChoice worked.
console.log(computerChoice);


document.onkeypress = function(event){

var userGuess = event.key;

console.log(userGuess);


if(userGuess === computerChoice){
    wins++;
    alert("Wow, you're a psychic!");
}
else{
    guessesleft--;
    losses++;
    guesses++;
    alert("Not so Psychic are you?");
}

//This causes my html to display the total wins, losses, tries, and attempts left.
document.getElementById("wins").innerHTML = "Wins: " + wins;

document.getElementById("losses").innerHTML = "Losses: " + 
losses;

document.getElementById("guessesleft").innerHTML = "Guesses Left: " + guessesleft;

document.getElementById("guesses").innerHTML = "Your Guesses so Far: " + guesses;

//Ends the game when guessleft equals 0
if(guessesleft === 0){
    alert("Game Over!");
}
}
