# Psychic-Game

https://jjmonte20.github.io/Psychic-Game/

Hey guys,

Welcome to the Psychic game read-me file.  This will serve as a guide to exploring the web page.

The game is a simple letter guessing game, user gets 10 attempts to guess what letter the psychic (i.e. computer) is thinking of, if the user suceeds they win.

The computer makes their guess first, using the array of available letters on the keyboard.  Guesses are made at random using Math.floor(Math.random()*array.length).
Console logs are put in place to evaluate the logic and ensure the computer is truly selecting at random.

User controls are set to a keyboard control, however, game should alert them to use a letter key rather than a number key, and all letter keys will be lowercased in the games logic using the .toLowerCase expression
Game logic uses a simple if else statement to ensure the user is typing a letter, and using a nested if else if statement for the game conditions.
Wins and losses increment up while the remaining attempts should increment going down until the attempts = 0.  At that point the user should be alerted of a loss and the loss number will go up 1.

When the game ends, in either a win or loss, the computer picks a new letter to think of, put a console log in those areas to check that the game will play a second time with a new letter

