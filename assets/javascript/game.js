// here is the array of choices the computer can make
var computerChoices = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// here is the starting point for wins, losses, and tries remaining
var wins = 0;
var losses = 0;
var tries = 10;

// Functions

var compPicks = computerChoices[Math.floor(Math.random()*computerChoices.length)];
console.log(compPicks);

document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);


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
    } else {
        alert("Please choose a letter");
    }
        var html = "<p>Press any letter to start playing</p>" +
        "<p>wins: " + wins + "</p>" + 
        "<p>losses: " + losses + "</p>" + 
        "<p>tries: " + tries + "</p>"

        document.querySelector("#game").innerHTML = html;
        //here is where the matching comes into play
    }   
    
