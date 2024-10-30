// Collecting user information
let fullName = "Marc Jerick Urbano"
let age = 19;
let favoriteNumber = 16;
let favoriteColor = "White";

// Logging the information to the console
console.log("Full Name:", fullName);
console.log("Age:", age);
console.log("Favorite Number:", favoriteNumber);
console.log("Favorite Color:", favoriteColor);

// using nested if to Categorizing the user into one of the following age group
if (age < 5) {
    console.log("Category: Toddler (under 5 years)");
} else if (age >= 5 && age <= 12) {
    console.log("Category: Child (5–12 years)");
} else if (age >= 13 && age <= 19) {
    console.log("Category: Teenager (13–19 years)");
} else if (age >= 20 && age <= 35) {
    console.log("Category: Young Adult (20–35 years)");
} else if (age >= 36 && age <= 60) {
    console.log("Category: Middle-Aged (36–60 years)");
} else {
    console.log("Category: Senior (over 60 years)");
}