const calcText = document.querySelector("#calcText");

const btnClear = document.querySelector("#btnClear");
const btnAllClear = document.querySelector("#btnAllClear");
const btnInteger = document.querySelector("#btnInteger");
const btnDivide = document.querySelector("#btnDivide");

const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btnMultiply = document.querySelector("#btnMultiply");

const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btnSubtract = document.querySelector("#btnSubtract");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btnAdd = document.querySelector("#btnAdd");

const btn0 = document.querySelector("#btn0");
const btnDecimal = document.querySelector("#btnDecimal");
const btnEqual = document.querySelector("#btnEqual");

const buttons = document.querySelectorAll("button");

let memArr = [0];
let operator = 0;
let operatorValue;
let numA = [];
let numB = [];
let display = [0];

function add(numA, numB) {
    return numA + numB;
};

function subtract(numA, numB) {
    return numA - numB;
};

function multiply(numA, numB) {
    return numA * numB;
};

function divide(numA, numB) {
    return numA / numB;
};

function operate(operator, numA, numB) {
    return window[operator](numA, numB);
};

buttons.forEach((button) => {
    button.onclick = () => {

        if (button.classList.contains("number")) {
            //Zero is default unless another number is entered 
            if (memArr == 0 && numA.length < 1) { //if you don't want to use 0 as numA
                memArr = [];
            };

            //Entering decimal vs number
            if (button.value == "." && !memArr.includes(".")) { //using decimal
                memArr.push(button.value);

            } else if (button.value != ".") { //entering numbers into memArr to be added to numA or numB later
                memArr.push(Number(button.value));
            }; if 

            //Entering positive or negative integer
            (button.value === "-") {
                memArr = memArr.unshift("-");
                console.log(memArr)
            }

        } else if (button.classList.contains("operator") && memArr.length > 0) {
            if (typeof numA == "number" && typeof operator == "string") {

                numB = Number(memArr.join(""));
                memArr = operate(operator, numA, numB);
                numA = memArr;
                memArr = [];
                operator = button.id;
                operatorValue = button.textContent;
                numB = [];

            } else {
                numA = Number(memArr.join(""));
                operator = button.id;
                operatorValue = button.textContent;
                memArr = [];
            };

        } else if (button.classList.contains("equal") && typeof operator == "string" && memArr.length > 0) {
            numB = Number(memArr.join(""));
            if (operator == "divide" && numB == 0) { //dividing by zero
                memArr = "Uh Oh"
                operator = 0;

            } else { //regular operations
                memArr = operate(operator, numA, numB);
                memArr = [Number(+memArr.toFixed(2))];
                operator = 0;
                numA = memArr;
                numB = [];
                operatorValue = button.textContent;
            };
        };
        toDisplay();
    };
});

btnAllClear.onclick = () => {
    memArr = [0];
    numA = [];
    numB = [];
    toDisplay();
};

btnClear.onclick = () => {

    if (memArr.length > 0) { //remove memArr
        memArr.pop();
    } else if (typeof numA === "number" && operator !== 0 && memArr.length > 0) { //remove memArr meant for numB
        memArr.pop();
    } else if (typeof numA === "number" && operator !== 0 && memArr.length === 0) { // remove operator
        operator = 0;
    } else if (typeof numA === "number" && operator === 0 && memArr.length === 0) { //remove numA
       memArr = Array.from(numA.toString());
       memArr.pop();
       numA = [];
    };

    //Default to zero
    if (memArr.length === 0 && typeof numA !== "number" && typeof numB !== "number") {
        memArr = [0];
    };

    toDisplay();
};

function toDisplay() {
    if (typeof numA !== "number") { //displays numA (memArr)
        display = memArr.join('');

    } else if (typeof numA === "number" && operator === 0) {
        display = numA;

    } else if (typeof numA === "number" && operator !== 0) { //displays numA and operator
        display = numA + operatorValue;

        if (memArr.length > 0) { //displays numA and operator and 'numB' (memArr)
            display = numA + operatorValue + memArr.join('');
        };

    } else if (memArr === "Uh Oh") { //displays result of dividing by zero
        display = memArr;
    };
    calcText.textContent = display;
};