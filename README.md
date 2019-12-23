# unit-4-game

## About this project

In this project, I created an addition game where players click on crystals to try and generate the number shown on the screen. The catch: the numbers that the crystals represent are hidden to the player at the start of the game. They will have to click on the crystals in order to reveal their hidden values. 

## How it works

This project uses jQuery to generate random numbers and add them together. 

There are 3 primary functions that run the game: 
1. initGame: Generates the default state, including resetting the user score to 0 and generating new random numbers.
1. reset: Clears the user score and initiates the game; this function is called when the user wins or loses the game.
1. playGame: Controls the game based on the player's interactions with it. This includes listening for and responding to the player's clicks.

There are a few global functions that run within the three primary functions and make the game work:

* setScoreLimit: Generates a random number between 19 and 120 for the player to try and guess at the start of each round. 
* setCrystalValue: Generates a random value between 1 and 12 for each crystal at the start of each game.
* addCrystalValue: Adds the values of the current total score with the value hidden wihtin the crystal the player clicks. This function also checks to see if the total score is equal to or larger than the score limit, determining if the player wins or loses the game.
* winner: Alerts player when they win, adds to the win count, and resets the game.
* loser: Alerts player when they lose, adds to the lose count, and resets the game.

## Known Issues
Currently, there are no known issues.

## Contributors

Kate Foust



