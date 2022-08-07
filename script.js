const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtract");
const multiplyButton = document.querySelector(".multiply");
const divideButton = document.querySelector(".divide");
const equalsButton = document.querySelector(".equals");

document.querySelector(".clear").addEventListener("click", clearDisplay);

// let a = "";
// let b = "";
// let operator = "";
// let operatorState = false;
// let runningTotal = null;

//  experimental

let a = "";
let b = "";
let waitingForA = true;
let waitingForB = false;
let runningTotal = null;

//

function displayButtonText(e) {
  if (waitingForB === true) {
    display.innerText = "";
    waitingForB = false;
  }
  display.innerText += e.target.innerText;
}

function getOperator(e) {
  if (waitingForA === true && waitingForB === false) {
    waitingForA = false;
    waitingForB = true;
    console.log(waitingForA + " <- A");
    console.log(waitingForB + " <- B");
  }
  if (waitingForA === false && waitingForB === false) {
    operate(a, b, operator);
  }
  operator = e.target.innerText;
  console.log(operator + " operator");
}

addButton.addEventListener("click", (e) => {
  getOperator(e);
});
subtractButton.addEventListener("click", (e) => {
  getOperator(e);
});
multiplyButton.addEventListener("click", (e) => {
  getOperator(e);
});
divideButton.addEventListener("click", (e) => {
  getOperator(e);
});

equalsButton.addEventListener("click", () => {
  operate(a, b, operator);
});

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", displayButtonText);
  numbers[i].addEventListener("click", getNum);
}

function clearDisplay() {
  display.innerText = "";
  a = "";
  b = "";
  operator = "";
  waitingForA = true;
  waitingForB = false;
  runningTotal = null;
}

// function getNum() {
//   if (runningTotal != null) {
//     a = runningTotal;
//   } else if (operator === "" && runningTotal === null) {
//     a = display.innerText;
//     console.log(a + " <- a");
//   } else if (operator != "") {
//     b = display.innerText;
//     console.log(b + " <- b");
//   }
// }

function getNum() {
  if (waitingForA === true) {
    a = display.innerText;
    console.log(a + " <- a");
  }

  if (waitingForA != true) {
    b = display.innerText;
    console.log(b + " <- b");
  }
}

function resetOperator() {
  operator = "";
}

function add(num1, num2) {
  display.innerText = num1 + num2;
  a = display.innerText;
  waitingForB = true;
  console.log(a + " <- new a");
}

function subtract(num1, num2) {
  display.innerText = num1 - num2;
  a = display.innerText;
  waitingForB = true;
  console.log(a + " <- new a");
}

function multiply(num1, num2) {
  display.innerText = num1 * num2;
  a = display.innerText;
  waitingForB = true;
  console.log(a + " <- new a");
}

function divide(num1, num2) {
  display.innerText = num1 / num2;
  a = display.innerText;
  waitingForB = true;
  console.log(a + " <- new a");
}

function operate(num1, num2, operator) {
  console.log(num1 + " a " + num2 + " b");
  if (typeof a === "string" && typeof b === "string") {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
  }

  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "÷":
      if (num2 === 0) display.innerText = "You must not divide by 0!";
      else divide(num1, num2);
      break;
    default:
      return "ERROR!";
  }
}
