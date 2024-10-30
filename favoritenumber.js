// Declaring the favorite number variable
let FavNumber = 16;

// variable to store the user guess
let guess;

//using while loop
while (guess !== FavNumber) {
    //promting user to guess the favorite number
    guess = parseInt(prompt("Guess the favorite number:"));
    
    //using if to check if the guess is higher than the favorite number
    if (guess > FavNumber) {
        console.log("Too high! Try again.");
    //using elseif to check if the guess is lower than the favorite number
    } else if (guess < FavNumber) {
        console.log("Too low! Try again.");
    //if the guess is correct log the success message
    } else {
        console.log("Correct!");
    }
}