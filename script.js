let a = "";
let b = "";
let operator = "";
let waitingForA = true;
let waitingForB = false;
let percentageCalc = false;

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
document.querySelector(".signChange").addEventListener("click", changeSign);
document
  .querySelector(".comma")
  .addEventListener("click", displayButtonTextInput);
percentage.addEventListener("click", (e) => {
  operate;
  displayButtonTextInput(e);
  addNumberClickedStyle(e);
  percentageCalc = true;
});

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", displayButtonTextInput);
  numbers[i].addEventListener("click", getNum);
  numbers[i].addEventListener("click", addNumberClickedStyle);
}

addButton.addEventListener("click", (e) => {
  getOperator(e);
  addOperatorClickedStyle("+");
});
subtractButton.addEventListener("click", (e) => {
  getOperator(e);
  addOperatorClickedStyle("-");
});
multiplyButton.addEventListener("click", (e) => {
  getOperator(e);
  addOperatorClickedStyle("*");
});
divideButton.addEventListener("click", (e) => {
  addOperatorClickedStyle("/");
  getOperator(e);
});
equalsButton.addEventListener("click", () => {
  operate(a, b, operator);
  addOperatorClickedStyle("=");
});

function getNum() {
  if (waitingForA === true) {
    a = display.innerText;
  }
  if (waitingForA != true) {
    b = display.innerText;
  }
}

function keyboardInput(e) {
  if ((e.key >= 0 && e.key <= 9) || e.key === "." || e.key === "%") {
    displayKeyboardInput(e.key);
    getNum();
    addNumberClickedStyleKeyboard(e.key);
  }
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    getKeyboardOperator(e.key);
    addOperatorClickedStyleKeyboard(e.key);
  }
  if (e.key === "=" || e.key === "Enter") {
    operate(a, b, operator);
    addOperatorClickedStyleKeyboard(e.key);
  }
  if (e.key === "c") {
    clearDisplay();
  }
}

function addOperatorClickedStyle(operator) {
  addButton.classList.remove("clickedOperator");
  subtractButton.classList.remove("clickedOperator");
  multiplyButton.classList.remove("clickedOperator");
  divideButton.classList.remove("clickedOperator");
  equalsButton.classList.remove("clickedOperator");
  switch (operator) {
    case "+":
      addButton.classList.add("clickedOperator");
      break;
    case "-":
      subtractButton.classList.add("clickedOperator");
      break;
    case "*":
      multiplyButton.classList.add("clickedOperator");
      break;
    case "/":
      divideButton.classList.add("clickedOperator");
      break;
    case "=":
      equalsButton.classList.add("clickedOperator");
      break;
    default:
      return;
  }
}

function addOperatorClickedStyleKeyboard(key) {
  addButton.classList.remove("clickedOperator");
  subtractButton.classList.remove("clickedOperator");
  multiplyButton.classList.remove("clickedOperator");
  divideButton.classList.remove("clickedOperator");
  equalsButton.classList.remove("clickedOperator");
  switch (key) {
    case "+":
      addButton.classList.add("clickedOperator");
      break;
    case "-":
      subtractButton.classList.add("clickedOperator");
      break;
    case "*":
      multiplyButton.classList.add("clickedOperator");
      break;
    case "/":
      divideButton.classList.add("clickedOperator");
      break;
    case "=":
      equalsButton.classList.add("clickedOperator");
      break;
    case "Enter":
      equalsButton.classList.add("clickedOperator");
      break;
    default:
      return;
  }
}

function addNumberClickedStyle(e) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].classList.remove("clicked");
  }
  percentage.classList.remove("clicked");

  e.target.classList.add("clicked");
}

function addNumberClickedStyleKeyboard(key) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].classList.remove("clicked");
  }
  percentage.classList.remove("clicked");
  switch (key) {
    case "1":
      document.querySelector(".one").classList.add("clicked");
      break;
    case "2":
      document.querySelector(".two").classList.add("clicked");
      break;
    case "3":
      document.querySelector(".three").classList.add("clicked");
      break;
    case "4":
      document.querySelector(".four").classList.add("clicked");
      break;
    case "5":
      document.querySelector(".five").classList.add("clicked");
      break;
    case "6":
      document.querySelector(".six").classList.add("clicked");
      break;
    case "7":
      document.querySelector(".seven").classList.add("clicked");
      break;
    case "8":
      document.querySelector(".eight").classList.add("clicked");
      break;
    case "9":
      document.querySelector(".nine").classList.add("clicked");
      break;
    case "0":
      document.querySelector(".zero").classList.add("clicked");
      break;
    case ".":
      document.querySelector(".comma").classList.add("clicked");
      break;
    case "%":
      document.querySelector(".percentage").classList.add("clicked");
      break;
    default:
      return;
  }
}

function displayButtonTextInput(e) {
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
      if (num2 === 0) display.innerText = "No division by 0!";
      else divide(num1, num2);
      break;
    default:
      return;
  }
  waitingForB = true;
  resetOperator();
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

function percentageFunction(num1, num2, operator) {
  if (num2 === 0) {
    display.innerText = "No division by 0!";
    return;
  }
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
      return;
  }
}

function changeSign() {
  if (display.innerText.includes("-") === false) {
    display.innerText = "-" + display.innerText;
  } else display.innerText = display.innerText.slice(1);
}

function resetOperator() {
  operator = "";
}

function clearDisplay() {
  display.innerText = "";
  a = "";
  b = "";
  operator = "";
  waitingForA = true;
  waitingForB = false;
  percentageCalc = false;
  addNumberClickedStyleKeyboard();
  addNumberClickedStyle;
  addOperatorClickedStyleKeyboard();
  addOperatorClickedStyle;
}

// vitun jees 09.08.2022
