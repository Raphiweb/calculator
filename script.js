const calcBody = document.querySelector(".calcBody");
const display = document.querySelector(".display");
const displayTopRow = document.querySelector(".topRow");
const displayBotRow = document.querySelector(".botRow");
const buttons = document.querySelector(".btns");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const equalsBtn = document.querySelector(".equals");
const numberBtn0 = document.querySelector(".zero");
const numberBtn1 = document.querySelector(".one");
const numberBtn2 = document.querySelector(".two");
const numberBtn3 = document.querySelector(".three");
const numberBtn4 = document.querySelector(".four");
const numberBtn5 = document.querySelector(".five");
const numberBtn6 = document.querySelector(".six");
const numberBtn7 = document.querySelector(".seven");
const numberBtn8 = document.querySelector(".eight");
const numberBtn9 = document.querySelector(".nine");

let buttonsChildren = buttons.childNodes;

for (let i = 1; i < buttonsChildren.length; i++) {
  buttonsChildren[i].addEventListener("click", displayValueFunc);
}

function operate(operator, num1, num2) {
  if ((operator = "+")) {
    add(num1, num2);
  } else if ((operator = "-")) {
    subtract(num1, num2);
  } else if ((operator = "*")) {
    multiply(num1, num2);
  } else if ((operator = "/")) {
    divide(num1, num2);
  }
}

const calculationArray = [];

function add(num1, num2) {
  num1 + num2;
}
function subtract(num1, num2) {
  num1 - num2;
}
function multiply(num1, num2) {
  num1 * num2;
}
function divide(num1, num2) {
  num1 / num2;
}

function displayValueFunc(e) {
  let displayValue = "";
  displayValue = e.target.innerText;
  const valueDiv = document.createElement("div");
  valueDiv.innerText = displayValue;
  calculationArray.push(valueDiv.innerText);
  displayTopRow.appendChild(valueDiv);
  console.log(calculationArray);
}
