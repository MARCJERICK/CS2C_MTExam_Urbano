// Create empty arrays for each subject to keep track of enrolled students
let dsa = [];
let pl = [];
let networks = [];

// Function to show the subjects available for enrollment
function displaySubjects() {
    console.log("\nChoose a subject to enroll in:");
    console.log("A) DSA");
    console.log("B) PL");
    console.log("C) Networks");
}

// Function to show the operations available for managing enrollment
function displayOperations() {
    console.log("\nSelect an operation:");
    console.log("A) Enroll");
    console.log("B) Unenroll");
    console.log("C) Select another subject");
    console.log("D) Exit");
}

// Function to enroll a student in the chosen subject
function enrollStudent(subject) {
    const studentName = prompt("Enter the name of the student to enroll:");  // Ask for the student's name
    subject.push(studentName);  // Add the student to the subject's array
    console.log(`${studentName} has been enrolled in ${subject === dsa ? "DSA" : subject === pl ? "PL" : "Networks"}.`);
}

// Function to unenroll a student from the chosen subject
function unenrollStudent(subject) {
    console.log(`Currently enrolled students in ${subject === dsa ? "DSA" : subject === pl ? "PL" : "Networks"}:`);

    if (subject.length === 0) {
        console.log("No students enrolled in this subject.");  // Check if there are no students to unenroll
        return;
    }

    // List all students with index numbers
    subject.forEach((student, index) => {
        console.log(`${index + 1}. ${student}`);
    });

    // Ask for the student number to remove, and adjust for zero-based index
    const studentIndex = parseInt(prompt("Enter the number of the student to unenroll:")) - 1;
    if (studentIndex >= 0 && studentIndex < subject.length) {
        const studentName = subject.splice(studentIndex, 1)[0];  // Remove the student from the array
        console.log(`${studentName} has been unenrolled from ${subject === dsa ? "DSA" : subject === pl ? "PL" : "Networks"}.`);
    } else {
        console.log("Invalid student number.");  // Handle invalid inputs
    }
}

// Function to show all enrolled students across subjects
function displayEnrolledStudents() {
    console.log("\nEnrolled Students:");
    console.log("DSA:", dsa.length > 0 ? dsa.join(", ") : "No students enrolled.");
    console.log("PL:", pl.length > 0 ? pl.join(", ") : "No students enrolled.");
    console.log("Networks:", networks.length > 0 ? networks.join(", ") : "No students enrolled.");
}

// Main loop for the program, allowing the user to pick subjects and perform operations
function main() {
    let subject;  // Placeholder for the current subject
    let exit = false;  // Flag to exit the program

    while (!exit) {
        displaySubjects();  // Show subject options
        const subjectChoice = prompt("Choose a subject (A, B, C):").toUpperCase();  // Get subject choice

        // Set the current subject based on the user's choice
        switch (subjectChoice) {
            case "A":
                subject = dsa;
                break;
            case "B":
                subject = pl;
                break;
            case "C":
                subject = networks;
                break;
            default:
                console.log("Invalid choice. Please select a valid subject.");
                continue;  // Repeat if the input is invalid
        }

        let subjectExit = false;  // Flag to exit the subject-specific loop
        while (!subjectExit) {
            displayOperations();  // Show operation options
            const operationChoice = prompt("Choose an operation (A, B, C, D):").toUpperCase();  // Get operation choice

            switch (operationChoice) {
                case "A":
                    enrollStudent(subject);  // Enroll a student
                    break;
                case "B":
                    unenrollStudent(subject);  // Unenroll a student
                    break;
                case "C":
                    subjectExit = true;  // Go back to the subject selection
                    break;
                case "D":
                    subjectExit = true;  // Exit the subject loop
                    exit = true;  // Exit the main loop
                    break;
                default:
                    console.log("Invalid choice. Please select a valid operation.");
            }
        }
    }

    displayEnrolledStudents();  // Show all enrolled students before ending the program
}

// Start the enrollment program
main();
