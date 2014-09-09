// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.
function tellFortune(numChildren, partnerName, location, jobTitle) {
  return "You will be a " + jobTitle + " in " + location + ", and married to " + partnerName + " with " + numChildren + " kids."
}
    
console.log(tellFortune(1, "Beauty", "Everywhere", "Front-end magician"));
console.log(tellFortune(100, "Beauty 2", "Nowhere", "JavaScript engineer"));
console.log(tellFortune(1, "Beauty 3", "Worldwide", "Fullstack tinkerer"));

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
function calculateAge(currYear, birthYear) {
    var age = currYear - birthYear;
    return "They are either " + age + " or " + (age - 1) + " years old.";
}

var currYear = new Date().getFullYear();

console.log(calculateAge(currYear, 1990));
console.log(calculateAge(currYear, 1/0));
console.log(calculateAge(currYear, -60));

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
function calculateSupply(currAge, maxAge, consumptionPerDay) {
    var requiredSupply = consumptionPerDay * 365 * (maxAge - currAge);
    return "You will need " + Math.round(requiredSupply) + " to last you until the ripe old age of " + maxAge + ".";
} 

console.log(calculateSupply(20, 100, 10.2));
console.log(calculateSupply(40, 200, 30.99));
console.log(calculateSupply(80, 800, 20));

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
function calcCircumference(radius) {
    return "The circumference is " + Math.PI * 2 * radius + ".";   
}

// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".
function calcArea(radius) {
    return "The area is: " + Math.pow(radius, 2) * Math.PI + ".";
}

console.log(calcCircumference(20));
console.log(calcArea(20));

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
function celsiusToFahrenheit(celsius) {
    var fahrenheit = 1.8 * celsius + 32;
    return celsius + " °C is " + fahrenheit + " °F.";
}

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function fahrenheitToCelsius(fahrenheit) {
    var celsius = Math.round((fahrenheit - 32) / 1.8);
    return fahrenheit + " °F is " + celsius + " °C.";
}

console.log(celsiusToFahrenheit(22));
console.log(fahrenheitToCelsius(22));