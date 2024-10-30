// Create an array to store three color's user like
let favoriteColors = [];

// Function to add a color and print the updated list
function addColor() {
    // Prompt the user to enter a color
    let color = prompt("Enter a color that you like:");
    
    // Add the color to the array
    favoriteColors.push(color);
    
    // Print the updated array to the console
    console.log("Updated color list:", favoriteColors);
}

// Call the function three times to get three colors from the user
for (let i = 0; i < 3; i++) {
    addColor();
}