// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
function greaterNum(number1, number2) {
    var greater;

    if (number1 < number2) {
        greater = number2;
    } else { 
        greater = number1;
    }
    return "The greater number of " + number1 + " and " + number2 + " is " + greater + ".";
}

console.log(greaterNum(1, 200));
console.log(greaterNum(300, 1.5));


// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.
function helloWorld(langCode) {
    langCode = langCode || 'eng'; 

    if (langCode === 'es') {
        return "Hola mundo";
    } else if (langCode === 'de') {
        return "Hallo Welt";
    } else {
        return "Hello World";
    }
}

console.log(helloWorld());
console.log(helloWorld('eng'));
console.log(helloWorld('de'));
console.log(helloWorld('es'));

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.
function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log("Your grade is " + assignGrade(10));
console.log("Your grade is " + assignGrade(90));

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
function pluralize(noun, number) {
    if (number > 1 && noun != 'sheep' && noun != 'geese') {
        return number + ' ' + noun + 's';
    } else if (number == 1) {
        return number + ' ' + noun;
    } else {
        return "no " + noun + 's';
    }
}
console.log(pluralize('rabbit', 0));
console.log(pluralize('rabbit', 1));
console.log(pluralize('rabbit', 2));