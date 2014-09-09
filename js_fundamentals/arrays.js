// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
function ordinal(number) {
    switch (number) {
    case 1:
        return '1st';
    case 2:
        return '2nd';
    case 3:
        return '3rd';
    default:
        return number + 'th';
    }
}

var topChoices = ["green", "no president", "whoever", "nothing in particular"],
    length,
    i;

numChoices = topChoices.length;

for (i = 0; i < numChoices; i += 1) {
    console.log("My #" + ordinal(i + 1) + " choice is " + topChoices[i] + ".");
} 


