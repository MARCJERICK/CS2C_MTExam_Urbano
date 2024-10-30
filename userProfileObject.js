// Set up an object called userProfile to store the user's info
let userProfile = {
    fullName: prompt("Enter your full name:"),   // Ask for and save their full name
    age: parseInt(prompt("Enter your age:")),    // Ask for their age and convert it to a number
    favoriteNumber: parseInt(prompt("Enter your favorite number:")),  // Same for their favorite number
    favoriteColors: []    // Create an empty array for their favorite colors
};

// Loop to get three favorite colors and add them to the array
for (let i = 0; i < 3; i++) {
    let color = prompt(`Enter favorite color #${i + 1}:`);  // Prompt for each color
    userProfile.favoriteColors.push(color);   // Add each color to the array
}

// Display the whole userProfile in the console, joining colors into one string for readability
console.log("User Profile:", {
    ...userProfile,
    favoriteColors: userProfile.favoriteColors.join(", ")
});
