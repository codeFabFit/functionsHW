
// Lab 308H.5.1 Homework 

// Lab work # 2 max of three 

function maxOfThree(numOne, numTwo, numThree){
    if(numOne > numTwo && numOne > numThree) {
      return numOne;
    } else if (numTwo > numOne && numTwo > numThree) {
      return numTwo;
    } else {
      return numThree;
    }
  }
  console.log(maxOfThree(10,23,14))


  // Lab work # 3 find the vowel
// function checkVowels(character) // this didnt work 
// {
//     let vowels = ["a", "e", "i", "o", "u"]
//     for(let i=0; i<vowels.length; i++) {
//         if(character.toLowerCase() === vowels[i]) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log([])

function isCharAVowel(char) {

    const arrOfVowels= ["a", "e", "i", "o", "u"]
    return arrOfVowels.includes(char.toLowerCase())
}
console.log(isCharAVowel("p"))

    // Lab work #4 sum of numbers 

function sum(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(sum)

// Lab work #5 multiply 

let arr = [10, 40, 50]

let newArr=[];
for(let i=0; i <arr.length; i++){
    console.log(arr[i] * 2);
}
 // Lab work #6 return the numbers of arguments 


 // Lab work #7 reverse characters and return it 



 // Lab work #8 array of strings as an argument and return the length of the longest string


 // Lab work # 9 that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in


 // Lab work # 10 accepts any quantity of numbers as arguments, adds them together, and returns the resulting sum. Assume all parameters will be numbers. If called with no arguments, return 0 (zero).




//
// LAB 308.H.5.2 Array Methods and Callbacks 
//


// keey words to know : forEach, map, filter, reduce, find , every 

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// Determine if every number is greater than or equal to 0.
// Determine if every word shorter than 8 characters.

const allGreaterOrEqualThanZero = nums.every(num => num >= 0);
if (allGreaterOrEqualThanZero){
    console.log("Every numer is greater than or equal 0");
} else {
    console.log("Not every number is greater than or equal to 0")
}

const allWordsShorterThanEight = panagram.filter(allWordsShorterThanEight => 8 > 8);
if (allWordsShorterThanEight){
    console.log("Every word is shorter than 8 character")
}else {
    console.log("Not every word is shorter than 8 characters")
}
    
// Filter
// filter the array for numbers less than 4.
// Filter words that have an even length.

const lessThanFour = nums.filter(num => num < 4);
if (lessThanFour.filer = 11 ){
    console.log([nums]);
} else {
    console.log([nums])
}

const haveEvenLength = panagram.filter(panagram => panagram.length === [panagram]);
if (haveEvenLength < panagram.length){
    console.log("words that have even length are "  + [panagram])
}

// Find
// Find the first value divisible by 5.
// Find the first word that is longer than 5 characters.

const divisibleBy5 = nums.find(nums => nums.find === [nums])
    if (nums.find % 5 === 0 ) {
} console.log("The first value divisble by 5 is " + [nums])

// tried to add divisble by 5 but it wont get a single digit, then would try divisible by 5 in console.log and it would give me 1 as the answer

const findLongWord = (word) => word.length > 5;
const firstLongWord = panagram.find[2];
console.log(`The first word longer than 5 characters is: ${firstLongWord}`);

// Find Index
// Find the index of the first number that is divisible by 3.
// Find the index of the first word that is less than 2 characters long.

const divisibleBy3 = (nums) => nums.findIndex % 3;
const firstNum = nums.findIndex % 3;
    if (nums.find % 3 === 0 )
     {
} console.log(`The first value divisble by 3 is + ${nums}`)



// For Each
// Log each value of the array multiplied by 3.
// Log each word with an exclamation point at the end of it.
// Thought Questions

const multipliedBy3 = (nums) => nums.forEach * 3; 
    if (nums.forEach * 3 ){
} console.log(`the first value multplied by 3 is: + ${nums}`)




const addEnding = panagram.push("!") 
console.log(panagram)

// What happened to the original array?
// Can you store the values from a forEach method in a new array?

// Map
// Make a new array of each number multiplied by 100.
// Make a new array of all of the words in all uppercase.
// Thought Questions

// What happened to the original array?
// Can you store the values from a map method in a new array?

// Some
// Find out if some numbers are divisible by 7.
// Find out if some words have the letter a in them.