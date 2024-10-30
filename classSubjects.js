//the subject name and append class schedule details
let subject = "Data Structure and Algorithms ";
subject += "with a class schedule of ";
//the class schedule and appending room information
let ClassSchedule = "10:00-11:00 Monday-Friday and 8:00-9:30 Tuesday-Thursday ";
ClassSchedule += "at Room ";
//the classroom location and appending instructor information
let Classroom = "ComLab B. ";
Classroom += "The instructor for the subject is ";
//the instructor's name
let ClassIntructor = "Mr. Cliff Owen Pascua.";
//the student's name and appending that they are enrolled in the subject
let StudentName = "Marc Jerick Urbano ";
StudentName += "is currently enrolled in ";
// Concatenate all pieces into one complete sentence and log it to the console
let sentence = StudentName + subject + ClassSchedule + Classroom + ClassIntructor;
console.log(sentence);
