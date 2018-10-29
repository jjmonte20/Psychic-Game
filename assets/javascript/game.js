// here is the array of choices the computer can make
var computerChoices = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var userPick = [];

// here is the starting point for wins, losses, and tries remaining
var wins = 0;
var losses = 0;
var tries = 10;
//use these to show users guesses
// var guesses = document.querySelector("guesses");
// var guessChild = document.createElement("p");


// Functions

var compPicks = computerChoices[Math.floor(Math.random()*computerChoices.length)];
console.log(compPicks);

document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);

// use a .push to to add user guess to array userGueses
userPick.push(userGuess);
console.log(userPick);
// next thing will be to make the computer make another selection after the game is either won or over



// next comes a way to manipulate the keys in a game

    // make all of the letters lower case first


    //Only run if the code is a letter
    if ((userGuess === "a") ||(userGuess === "b") ||(userGuess === "c") ||(userGuess === "d") ||(userGuess === "e") ||(userGuess === "f") ||(userGuess === "g") ||(userGuess === "h") ||(userGuess === "i") ||(userGuess === "j") ||(userGuess === "k") ||(userGuess === "l") ||(userGuess === "m") ||(userGuess === "n") ||(userGuess === "o") ||(userGuess === "p") ||(userGuess === "q") ||(userGuess === "r") ||(userGuess === "s") ||(userGuess === "t") ||(userGuess === "u") ||(userGuess === "v") ||(userGuess ==="w") ||(userGuess === "x") ||(userGuess === "y") ||(userGuess === "z")) {
        if (userGuess === compPicks) {
            alert("You win");
            wins++;
            alert("Wins: " + wins);
            compPicks = computerChoices[Math.floor(Math.random()*computerChoices.length)];
            tries = 10;
            console.log(compPicks);
        } else if (userGuess !== compPicks) {
            tries--;
            // guessChild.innerHTML() = userGuess;
            // guesses.appendChild(guessChild);
            

            alert("Tries remaining: " + tries);
            if (tries === 0) {
                alert("You lose!");
                losses++;
                alert("Losses: " + losses);
                tries = 10;
                compPicks = computerChoices[Math.floor(Math.random()*computerChoices.length)];
                console.log(compPicks);
            }
        }

    }
    // need to get people to avoid using keys other than the letters
    else {
        alert("Please choose a letter");
    }
    // text is needed to keep track of the rules, and tallies after the user first presses a letter
        var html = "<p>Pick letters a-z, you start with 10 tries.  If your letter matches mine, you win!</p>" +
        "<p>Wins: " + wins + "</p>" + 
        "<p>Losses: " + losses + "</p>" + 
        "<p>Attempts remaining: " + tries + "</p>" +
        // gives me one letter so far, but need more
        "<p>Guesses so far: " + userPick + "</p>"
        console.log(html);
        

        document.querySelector("#game").innerHTML = html;
    }   
    
