const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const allButtons = document.querySelectorAll(".subBtn");
const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtract");
const multiplyButton = document.querySelector(".multiply");
const divideButton = document.querySelector(".divide");
const equalsButton = document.querySelector(".equals");
const percentage = document.querySelector(".percentage");

document.addEventListener("keydown", keyboardInput);
document.querySelector(".clear").addEventListener("click", clearDisplay);
document.querySelector(".comma").addEventListener("click", displayButtonText);
document.querySelector(".signChange").addEventListener("click", changeSign);
percentage.addEventListener("click", (e) => {
  operate;
  displayButtonText(e);
  percentageCalc = true;
});

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", displayButtonText);
  numbers[i].addEventListener("click", getNum);
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

let a = "";
let b = "";
let operator = "";
let waitingForA = true;
let waitingForB = false;
let percentageCalc = false;

function keyboardInput(e) {
  if ((e.key >= 0 && e.key <= 9) || e.key === "." || e.key === "%") {
    displayKeyboardInput(e.key);
    getNum();
  }

  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    getKeyboardOperator(e.key);
  }

  if (e.key === "=" || e.key === "Enter") {
    operate(a, b, operator);
  }
}

function displayButtonText(e) {
  if (
    e.target === percentage &&
    (waitingForA === true || waitingForB === true)
  ) {
    display.innerText /= 100;
    return;
  }
  if (e.target === percentage && /\d/.test(parseFloat(display.innerText))) {
    display.innerText += "%";
    return;
  }
  if (waitingForB === true) {
    // problem
    if (/\d/.test(parseFloat(display.innerText)) === false) {
      display.innerText += e.target.innerText;
      waitingForB = false;
      return;
    } else {
      display.innerText = "";
      waitingForB = false;
    }
  }
  display.innerText += e.target.innerText;
}

function displayKeyboardInput(key) {
  if (key === "%" && (waitingForA === true || waitingForB === true)) {
    display.innerText /= 100;
    return;
  }
  if (key === "%" && /\d/.test(parseFloat(display.innerText))) {
    display.innerText += "%";
    return;
  }
  if (waitingForB === true) {
    if (
      display.innerText.includes("-") &&
      /\d/.test(parseFloat(display.innerText)) === false
    ) {
      display.innerText += key;
      waitingForB = false;
      return;
    } else {
      display.innerText = "";
      waitingForB = false;
    }
  }
  display.innerText += key;
}

function getOperator(e) {
  console.log(operator + " op start");
  if (
    e.target === subtractButton &&
    display.innerText === "" &&
    operator === "" &&
    waitingForA === true
  ) {
    display.innerText = "-";
    return;
  }
  if (
    e.target === subtractButton &&
    operator != "" &&
    /\d/.test(parseFloat(display.innerText))
  ) {
    display.innerText = "-";
  }
  if (waitingForA === true && waitingForB === false) {
    operator = e.target.innerText;
    waitingForA = false;
    waitingForB = true;
  }
  if (
    waitingForA === false &&
    waitingForB === true &&
    display.innerText.includes("-") === false
  ) {
    operator = e.target.innerText;
  }
  if (waitingForA === false && waitingForB === false) {
    operate(a, b, operator);
    operator = e.target.innerText;
  }
  console.log(operator + " op end");
}

function getKeyboardOperator(key) {
  if (
    key === "-" &&
    display.innerText === "" &&
    operator === "" &&
    waitingForA === true
  ) {
    display.innerText = "-";
    return;
  }
  if (
    key === "-" &&
    operator != "" &&
    /\d/.test(parseFloat(display.innerText))
  ) {
    display.innerText = "-";
  }
  if (waitingForA === true && waitingForB === false) {
    operator = key;
    waitingForA = false;
    waitingForB = true;
  }
  if (
    waitingForA === false &&
    waitingForB === true &&
    display.innerText.includes("-") === false
  ) {
    operator = key;
  }
  if (waitingForA === false && waitingForB === false) {
    operate(a, b, operator);
    operator = key;
  }
  console.log(operator + " op");
}

function clearDisplay() {
  display.innerText = "";
  a = "";
  b = "";
  operator = "";
  waitingForA = true;
  waitingForB = false;
  percentageCalc = false;
}

function changeSign() {
  if (display.innerText.includes("-") === false) {
    display.innerText = "-" + display.innerText;
  } else display.innerText = display.innerText.slice(1);
}

function getNum() {
  if (waitingForA === true) {
    a = display.innerText;
  }
  if (waitingForA != true) {
    b = display.innerText;
  }
}

function resetOperator() {
  operator = "";
}

function add(num1, num2) {
  display.innerText = num1 + num2;
  a = display.innerText;
}

function subtract(num1, num2) {
  display.innerText = num1 - num2;
  a = display.innerText;
}

function multiply(num1, num2) {
  display.innerText = num1 * num2;
  a = display.innerText;
}

function divide(num1, num2) {
  display.innerText = num1 / num2;
  a = display.innerText;
}

function operate(num1, num2, operator) {
  if (num1 === "") {
    num1 = 0;
  } else if (num2 === "") {
    num2 = 0;
  }
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (operator != "" && percentageCalc === true) {
    percentageFunction(num1, num2, operator);
    return;
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
  waitingForB = true;
  resetOperator();
}

function percentageFunction(num1, num2, operator) {
  switch (operator) {
    case "+":
      display.innerText = num1 + (num1 / 100) * num2;
      a = display.innerText;
      waitingForB = true;
      percentageCalc = false;
      break;
    case "-":
      display.innerText = num1 - (num1 / 100) * num2;
      a = display.innerText;
      waitingForB = true;
      percentageCalc = false;
      break;
    case "*":
      num2 = num2 / 100;
      display.innerText = num1 * num2;
      a = display.innerText;
      waitingForB = true;
      percentageCalc = false;
      break;
    case "÷":
      num2 = num2 / 100;
      display.innerText = num1 / num2;
      a = display.innerText;
      waitingForB = true;
      percentageCalc = false;
      break;
    default:
      return "ERROR!";
  }
}
