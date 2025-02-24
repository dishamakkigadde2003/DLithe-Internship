// Declare variables with different data types
let username = 'John';           // String
let age = 25;                    // Number
let isActive = true;             // Boolean
let user = { name: 'John', Gender: 'male' };  // Object
let scores = [95, 87, 92];       // Array
let height = 5.9;                // Float (Number)

// Arithmetic Operators
let sum = age + 5;               // Add 5 to age (result is 30)
let product = age * 2;           // Multiply age by 2 (result is 50)
let difference = age - 5;        // Subtract 5 from age (result is 20)
let quotient = age / 5;          // Divide age by 5 (result is 5)

// Comparison Operators
let isAdult = age >= 18;         // Check if age is 18 or greater (true)
let isTeenager = age < 18;       // Check if age is less than 18 (false)
let isUsernameEqual = username === 'John'; // Check if username is equal to 'John' (true)

// Logical Operators
let canAccess = isActive && age >= 18; // User must be active and 18+ (true)
let hasPermission = isActive || age >= 18; // User is active or they are 18+ (true)
let notActive = !isActive;      // Negate isActive (false)

// Assignment Operators
age += 1;                       // Increment age by 1 (new age = 26)
isActive = false;                // Set isActive to false
let newAge = age;                // Copy age to newAge (newAge = 26)

// Ternary Operator
let status = isActive ? "Active" : "Inactive"; // If isActive is true, status is "Active", else "Inactive"

// Array Operations
scores.push(100);                // Add a new score of 100 to the scores array
let averageScore = (scores[0] + scores[1] + scores[2] + scores[3]) / 4; // Calculate the average score

// Data Type Example (String, Number, Boolean)
let ageDescription = `User ${username} is ${age} years old`; // Template literal to combine strings and numbers
let hasScores = scores.length > 0; // Check if the scores array has any items (true)

// Output Results
console.log("Sum of age + 5:", sum);
console.log("Product of age * 2:", product);
console.log("Age after subtraction 5:", difference);
console.log("Quotient of age / 5:", quotient);

console.log("Is adult?", isAdult);
console.log("Is teenager?", isTeenager);
console.log("Is username 'John'?", isUsernameEqual);

console.log("Can access:", canAccess);
console.log("Has permission:", hasPermission);
console.log("Is not active?", notActive);

console.log("New age:", newAge);
console.log("User status:", status);

console.log("Updated scores:", scores);
console.log("Average score:", averageScore);
console.log(ageDescription);
console.log("Does user have scores?", hasScores);
