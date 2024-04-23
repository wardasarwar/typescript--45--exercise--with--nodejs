let car = "bugati";
let upperCaseCar = "BUGATI";
let ten = 10;
let twenty = 20;
let fruits = ["apple","banana","orange"];

console.log("\n Is car is equal to bugati?");
console.log(car == "bugati");

console.log("\n Is car is not equal to bugati?");
console.log(car != "bugati");

console.log("\n Is car is equal to bugati after converting to lowerCase?")
console.log(upperCaseCar.toLowerCase() == "bugati");

console.log("\n Is car is not equal to bugati after converting to lowerCase?")
console.log(upperCaseCar.toLowerCase() != "bugati");

// Numericals test

console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);

console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

console.log("\n Is ten is greater than 5?");
console.log(ten > 5);

console.log("\n Is twenty is less than 10?");
console.log(twenty < 10);

console.log("\n Is ten is greater than or equal to 5?")
console.log(ten >= 5);

console.log("\n Is twenty is less than or equal to 10")
console.log(twenty <= 10);

// Tests using "and" & "or" Operators

console.log("\n twenty is not equal to ten and twenty is greater than 10?")
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to ten and twenty is greater than 30?")
console.log(twenty != 10 && twenty > 30);

console.log("\n twenty is greater than 50 or twenty is equal to 20?")
console.log(twenty > 50 || twenty == 20);

console.log("\n twenty is less than 15 or twenty is not equal to 20?")
console.log(twenty < 15 || twenty != 20);

console.log("\n Is orange is include in my array?");
console.log(fruits.includes("orange"));

console.log("\n Is apple is not include in my array?");
console.log(!fruits.includes("apple"));
