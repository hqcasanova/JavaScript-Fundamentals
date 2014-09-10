// Exercises: Objects

// EXERCISE: The Recipe Card
// Never forget another recipe!
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var myRecipe = {
    title: 'Mole',
    servings: 2,
    ingredients: 'cinamon, cumin, cocoa',       //Instead of an array, I'm doing a csv just for fun.
    print: function () {
        var ingredientsArray = this.ingredients.split(', '),
            numIngredients,
            i = 0;
            
        numIngredients = ingredientsArray.length;
        console.log(this.title + "\n" + "Serves: " + this.servings + "\n" + "Ingredients:");
        for (i; i < numIngredients; i += 1) {
            console.log(ingredientsArray[i]); 
        }
    }
};

myRecipe.print();

// EXERCISE: The Reading List
// Keep track of which books you read and which books you want to read!
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
var books = [
    {
     title: 'JavaScript: The Good Parts',
     author: 'Douglas Crockford',
     alreadyRead: true
    },
    {
     title: 'Speaking JavaScript',
     author: 'Axel Rauschmayer',
     alreadyRead: false
    }],
    numBooks,
    i = 0;

numBooks = books.length;

for (i; i < numBooks; i += 1) {
    var bookDetails = '"' + books[i].title + '" by ' + books[i].author;
    if (books[i].alreadyRead) {
        console.log("You already read " + bookDetails);
    } else {
        console.log("You still need to read " + bookDetails);
    }
}

// EXERCISE: The Movie Database
// It's like IMDB, but much much smaller!
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
var favMovie = {
    title: '7 Years in Tibet',
    duration: 3,
    stars: ['Brad Pitt', 'David Thewlis', 'BD Wong']
};
function printMovieInfo(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes.');
    console.log('Stars: ' + movie.stars.join(', ') + '.');
}
printMovieInfo(favMovie);