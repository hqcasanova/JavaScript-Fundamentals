// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
function fortuneTeller(numChildren, partnerName, location, jobTitle) {
  return "You will be a " + jobTitle + " in " + location + ", and married to " + partnerName + " with " + numChildren + " kids."
}

var numChildren = 1,
    partnerName = "Beauty",
    location = "Everywhere",
    jobTitle = "Front-end magician";
    
console.log(fortuneTeller(numChildren, partnerName, location, jobTitle));


// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
function calculateAge(currYear, birthYear) {
    var age = currYear - birthYear;
    return "They are either " + age + " or " + (age - 1) + " years old.";
}

var currYear = new Date().getFullYear(),
    birthYear = 1998;

console.log(calculateAge(currYear, birthYear));

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
function lifetimeSupply(currAge, maxAge, consumptionPerDay) {
    requiredSupply = consumptionPerDay * 365 * (maxAge - currAge);
    return "You will need " + requiredSupply + " to last you until the ripe old age of " + maxAge + ".";
} 

var currAge = 16,
    maxAge = 120,
    consumptionPerDay = 10;

console.log(lifetimeSupply(currAge, maxAge, consumptionPerDay));


// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".
function geometrizer(radius) {
    areaResult = "The area is: " + Math.pow(radius, 2) * Math.PI + ".";
    circResult = "The circumference is " + Math.PI * 2 * radius + "."; 
    return areaResult + " " + circResult;
}

var radius = 120;
console.log(geometrizer(radius));

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function tempConverter(celsius) {
    fahrenheit = 1.8 * celsius + 32;
    fahrResult = celsius + " °C is " + fahrenheit + " °F.";
    celsResult = fahrenheit + " °F is " + celsius + " °C.";
    return fahrResult + " " + celsResult;
}

var celsius = 22;
console.log(tempConverter(celsius));

/* Just realized the exercises didn't ask for a function */
