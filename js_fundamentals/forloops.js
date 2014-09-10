// Exercises: for loops
// EXERCISE: The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
var i = 0;

for (i; i <= 20; i += 1) {
    if (i % 2 == 0) {
        console.log(i + "is even.");
    } else {
        console.log(i + "is odd.");
    }
}

// EXERCISE: Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
multiply_by = 9;
i = 0;
for (i; i <= 10; i += 1) {
    console.log(i + " * " + multiply_by + " = " + (i * multiply_by));
}
multiply_by = i = 1;
for (i; i <= 10; i += 1) {
    for (multiply_by; multiply_by <= 10; multiply_by += 1) {
        console.log(i + " * " + multiply_by + " = " + (i * multiply_by));
    }
}


// EXERCISE: The Grade Assigner
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
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

i = 60;
for (i; i <= 100; i += 1) {
    console.log("For " + i + " you got a " + assignGrade(i));
}