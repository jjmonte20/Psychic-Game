// here is the array of choices the computer can make
var computerChoices = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// here is the starting point for wins, losses, and tries remaining
var wins = 0;
var losses = 0;
var tries = 10;

// Functions

// Function to get the computer to select a random letter

var compPicks = computerChoices[Math.floor(Math.random()*computerChoices.length)];
console.log(compPicks);
// next thing will be to make the computer make another selection after the game is either won or over
// most likely `if (gameEnd) {forloop} else { return;}


// next comes a way to manipulate the keys in a game
document.onkeyup = function(event) {
    document.querySelector("#guess").textContent = event.key
    // make all of the letters lower case first
    //when the user presses letter make game conditions
    var guess = event.key.toLowerCase();

    
}


