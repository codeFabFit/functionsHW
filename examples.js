// 1. create ablock of code to be reused
// 2. (optional) inputs
// 3. (optional) outputs 


// Activity One 

function computerArea(width, height) {
    let sum = width * height
    return ("the area of a rectangle with a width of "+ width + "and the height of" + height + " is" + sum + " square units.")
}

console.log(computerArea(10, 20))

// Activity Two 

const planetHasWater = (planet) 
  
// Use let or const. Never var.
// Function expressions. Avoid declarations when possible.
// Variables first. Functions second. Invokations last.

// first way of writing a function
function functionName() {
    console.log("Hello world");
  }
  
  // second way
  const functionName = function () {
    console.log("Hello World");
  };

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
}

console.log(maxOfTwoNumbers(3, 9));