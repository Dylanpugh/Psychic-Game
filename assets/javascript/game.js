var alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var wins = 0;

var losses = 0;

var guessesleft = 9;

var guesses = 0;

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

//Used this to check if computerChoice worked.
console.log(computerChoice);


document.onkeypress = function(event){

var userGuess = event.key;

console.log(userGuess);

//This works for the alerts. But i'm having trouble changing the HTML.
if(userGuess === computerChoice){
    wins++;
    alert("Wow, you're a psychic!");
}
else{
    guessesleft--;
    losses++;
    guesses+=9;
    alert("Not so Psychic are you?");
}

}


//Did i code this right for an outside HTML?
document.getElementById('wins').innerHTML = "Wins: " + wins;

document.getElementById('losses').innerHTML = "Losses: " + 
losses;

document.getElementById('guessesleft').innerHTML = "Guesses Left: " + guessesleft;

document.getElementById('guesses').innerHTML = "Your Guesses so Far: " + guesses;
