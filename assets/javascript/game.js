// Watch the demo.

// You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:

// Make sure to keep looking at the rock paper scissors game notes, this works very similarly to that

// so best way to start would be to give a list of available options

// Notes for making the controls
// First thing to do would be make an event key
// Limit the workable keys to letters only


// Notes for making the computer work
// Make an array that can hold all of the letters in the alphabet.  make sure the letters are strings, will be easier to use "" marks.
// Next thing to do would be to have the computer choose a letter at random.  MATH.floor(MATH.random) would be the best option so far for this.


// Next step would be to manipulate the score and time table.
// User guesses can probably be tallied by returning the key pressed
// If the user guess matches the computer guess, increase the tally for wins by 1
// If the user guess does not match the computer guess, decrease the tally for attempts by 1.  Continue this until the tally hits 0.  When the tally hits 0, increase the tally for losses by 1


// put array of possible choices here
var computerChoices = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// put wins losses and remaining tries here
var wins = 0;
var losses = 0;
var tries = 10;

// Guess what letter I'm thinking of

// Wins: (# of times the user has guessed the letter correctly)

// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

// Guesses Left: (# of guesses left. This will update)

// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).