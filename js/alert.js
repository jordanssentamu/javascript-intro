"use script"
// Javascript introdution
// console.log("I am JavaScript!");
// // Variable 
// const name = "John";
// const admin = "John";
// console.log(admin);

// const ourPlanet = "Earth";
// const CurrentUserName = "Jordan";

// // data-types

// // using prompt
// const yourName = prompt ('What is your Name ?');
// console.log(yourName)
// // coding challenge
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const markBMI = massMark / heightMark ** 2;
// console.log( markBMI);

// coding challenge 4(conditional operator)
// const tip1 = (15/100) * 50;
// const tip2 =(15/100) * 300;
// const bill1 = 50 ;
// const bill2 = 300;
// const finalValue1 = tip1 + bill1;
// const finalValue2 = tip2 + bill2;
// console.log(bill1, tip1, finalValue1)
// console.log(bill2, tip2, finalValue2)

// soln
// test data : (275, 40 and 430
// const bill = 275;
// const tip = (bill <= 300) && (bill >= 50 ) ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
// function

// let result = (a+b)*c;
// console.log(result);
  

//  function getResult(a, b, c) {
//      let result = ((a+b)*c);
//     return result
//  }
//  const answer = getResult(1, 70, 4)
//  console.log(answer)

// function showMessage() {
//     alert('Hello everyone')
// }
// for (let i = 0; i < 10; i = i = i + 1) {
//     console.log (i);
// }

// task 1-deno
// for Mark
// const markMass = 78;
// const markHeight = 1.69;
// // for John
// const johnMass = 92;
// const johnHeight = 1.95;
// const markBMI = markMass /  (markHeight ** 2);
// const johnBMI = johnMass / (johnHeight ** 2);
// console.log (markBMI);
//  console.log(johnBMI); 
// const markHigherBMI = markBMI;
// const johnHigherBMI = johnBMI;
// if (markHigherBMI > johnHigherBMI) {
//     console.log(`Mark's BMI is greater that of John's`);
// }else if (johnHigherBMI > markHigherBMI) {
//     console.log(`John's BMI is greater that of Mark's`);

// } else {
//     console.log (`both equal`);
// }
// Test-2
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;
// const markBMI = markMass /  (markHeight ** 2);
// const johnBMI = johnMass / (johnHeight ** 2);
// console.log (markBMI);
//  console.log(johnBMI); 
// const markHigherBMI = markBMI;
// const johnHigherBMI = johnBMI;
// if (markHigherBMI > johnHigherBMI) {
//     console.log(`Mark's BMI is greater that of John's`);
// }else if (johnHigherBMI > markHigherBMI) {
//     console.log(`John's BMI is greater that of Mark's`);

// } else {
//     console.log (`both are equal`);
// }
 // lOOPS

//  The WHILE LOOP- IT HAS A SYNTAX OF "WHILE (CONDITION) {BODY}"
// Example
// let j = 0;
// while (j < 3) {
//     console.log (j)
//     j++
// }

// DO -- WHILE LOOP - HERE THE BODY OR STATEMENT COMES BEFORE THRE CONDITION
// FOR EXAMPLE
// let i = 10;
// do {
//    console.log(i)
//   i-- 
// } while (i > 0 );


// THE FOR LOOP- THIS IS MORE COMPLEX, BUT ITS ALSO THE MOST COMMONLY USED.
// IT SYNTAX- FOR (BEGIN; CONDITION; STEP) {BODY/STATEMENT }
// // Run begin
// ??? (if condition ??? run body and run step)
// ??? (if condition ??? run body and run step)
// ??? (if condition ??? run body and run step)
// ??? ...
// for (let k = 0; k < 10; k++) {
//     console.log(k)

// }


// BREAKING THE LOOP-loops normally exit whe its condition becomes falsy, but we can force its exit at any time.
//  using the key word break
// for example:
// let sum = 0;
// while (true) {
//     let value = +prompt("Enter a number",  '');
//     if (!value) break;
//     sum += value;
// }
// alert ('sum: ' + sum);


// CONTINUE TO THE NEXT ITERATION-The continue directive is a ???lighter version??? of break. It doesn???t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).
// FOR EXAMPLE
for (i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
}
