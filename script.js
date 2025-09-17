/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================

// Define a Student object
const student = {
    firstName: "Khawlah",
    lastName: "Al-Malki",
    _gpa: 3.8, // private-like property (by convention, with _)

    // Getter for fullName
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Getter for GPA
    get gpa() {
        return this._gpa;
    },

    // Setter for GPA with validation
    set gpa(newGpa) {
        if (newGpa >= 0.0 && newGpa <= 4.0) {
            this._gpa = newGpa;
        } else {
            console.log("Invalid GPA. Must be between 0.0 and 4.0.");
        }
    }
};

// Usage
console.log("Full Name:", student.fullName);
console.log("Current GPA:", student.gpa);

student.gpa = 3.9;  // update valid GPA
console.log("Updated GPA:", student.gpa);

student.gpa = 5.0;  // invalid GPA
console.log("After invalid GPA attempt:", student.gpa); //

// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
// Task: Object as a "map" (key → value)

// 1) Create an object for course codes → titles
const courses = {
    "ICS202": "Data Structures",
    "ICS321": "Database Systems",
    "SWE363": "Software Engineering Design",
    "STAT319": "Probability and Statistics"
};

// 2) Iterate with for...in to display key and value
for (let code in courses) {
    console.log(`${code} → ${courses[code]}`);
}

// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
// Task: String object or plain string

// 1) Create a string (plain string or new String object)
let myStr = "Hello JavaScript";  // plain string

// 2) Use .charAt(index) and .length
console.log("String:", myStr);
console.log("Length:", myStr.length);

console.log("First character:", myStr.charAt(0));   // H
console.log("Fifth character:", myStr.charAt(4));   // o
console.log("Last character:", myStr.charAt(myStr.length - 1)); // t

// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/

// 1) Create a Date for the current moment
const now = new Date();

// 2) Extract parts
const day = now.getDate();        // day of the month (1–31)
const month = now.getMonth();     // month (0–11)
const year = now.getFullYear();   // full year (e.g., 2025)

// Display
console.log("Current Date Object:", now);
console.log("Day of Month:", day);
console.log("Month (0–11):", month);
console.log("Year:", year);

// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
// 1) Declare an array with 10 numbers
const numbers = [12, 45, 7, 89, 23, 56, 3, 78, 15, 34];

// 2) Use spread syntax with Math.min and Math.max
const minVal = Math.min(...numbers);
const maxVal = Math.max(...numbers);

// 3) Display both values
console.log("Numbers:", numbers);
console.log("Minimum value:", minVal);
console.log("Maximum value:", maxVal);

// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/
// 1) Function that returns the maximum element
function getMax(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty! Cannot find maximum.");
    }
    return Math.max(...arr);
}

// 2 & 3) Try with empty array, handle with try-catch-finally
try {
    const numbers = [];  // intentionally empty
    const maxValue = getMax(numbers);
    console.log("Maximum value:", maxValue);
} catch (e) {
    console.log("Error caught:", e.message);
} finally {
    console.log("Finally block executed (cleanup or closing tasks here).");
}

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/

// Given words
const words = ["ban", "babble", "make", "flab"];

// 1) Create a RegExp to detect "ab" anywhere
const pattern = /ab/;

// 2) Loop with forEach and test matches
console.log("Checking words for 'ab':");
words.forEach(word => {
    if (pattern.test(word)) {
        // 3) Log "<word> matches!"
        console.log(`${word} matches!`);
    }
});



// End of Advance JavaScript Lab — good luck!
