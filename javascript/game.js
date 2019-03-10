/*
 * Author: Suki Sahota
 * Description: Rock Paper Scissors Game
 */
// Declare and initialize array for possible computer choices
const computerChoices = ["r", "p", "s"];

// Create variables for wins, losses, ties
let wins = 0;
let losses = 0;
let ties = 0;

// Create variables that point to the HTML where we want to display things.
let directionsText = document.getElementById("directions");
let userChoiceText = document.getElementById("userchoice-text");
let computerChoiceText = document.getElementById("computerchoice-text");
let winsText = document.getElementById("wins-text");
let lossesText = document.getElementById("losses-text");
let tiesText = document.getElementById("ties-text");

// Run this function when a user presses a key
document.onkeyup = function(event) {
    let userGuess = event.key;
    
    // Scale random generator to size of computerChoices array to assign computerGuess a value
    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Find out who wins and increment appropriate counter
    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
        if ((userGuess === "r" && computerGuess === "s") ||
            (userGuess === "s" && computerGuess === "p") || 
            (userGuess === "p" && computerGuess === "r")) {
            wins++;
        } else if (userGuess === computerGuess) {
            ties++;
        } else {
            losses++;
        }

        // Hide directions
        directionsText.textContent = "";

        // Display the results from one round of the game
        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        tiesText.textContent = "ties: " + ties;
    } else {
        alert("Please select a valid key");
    }
};