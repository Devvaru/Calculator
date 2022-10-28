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
let operator;
let numA = [];
let numB = [];
let display = [0];

buttons.forEach((button) => {
    button.onclick = () => {

        if (button.classList.contains("number")) {
            if (memArr == 0 && numA.length < 1) { //if you don't want to use 0 as numA
                memArr = [];
            };

            if (button.value == "." && !memArr.includes(".")) { //using decimal
                memArr.push(button.value);
                console.log("decimal", button.value)

            } else if (button.value != ".") { //entering numbers into memArr to be added to numA or numB later
                memArr.push(Number(button.value));
                console.log("memArr", memArr)
            };

            if (typeof operator == "string") { //if numA is declared
                display = Array.from(display);

                display.push(button.textContent);
                console.log("display a+b", display)

                calcText.textContent = display.join("");
                console.log("calcText a+b", calcText.textContent)

                //decimal still appears multiple times in b, but not in a

            } else { //if numA and numB are not declared
                display = memArr;
                console.log("display a", display)

                calcText.textContent = display.join("");
                console.log("calcText a", calcText.textContent)
            };

        } else if (button.classList.contains("operator") && memArr.length > 0) {

            if (typeof numA == "number" && typeof operator == "string") {
                
                numB = Number(memArr.join(""));
                console.log("b", numB)

                memArr = operate(operator, numA, numB);
                console.log(memArr)
                display = memArr;
                calcText.textContent = display;

                // if () {
                //     display = Array.from(display);

                //     display.push(button.textContent);
                //     console.log("display op", display)
    
                //     calcText.textContent = display.join("");
                //     console.log("calcText op", calcText.textContent)
                // }
                

                numA = memArr;
                console.log(numA)

                memArr = [];

                operator = button.id;

                numB = [];

            } else {
                numA = Number(memArr.join(""));
                console.log("a", numA)

                operator = button.id;
                memArr = [];

                display = Array.from(display);

                display.push(button.textContent);
                console.log("display op", display)

                calcText.textContent = display.join("");
                console.log("calcText op", calcText.textContent)
            };

        } else if (button.classList.contains("equal") && typeof operator == "string" && memArr.length > 0) {
            numB = Number(memArr.join(""));

            if (operator == "divide" && numB == 0) { //dividing by zero
                memArr = "Uh Oh"
                display = memArr;
                calcText.textContent = display;

                operator = 0;

            } else { //regular operations
                memArr = operate(operator, numA, numB);
                memArr = [Number(+memArr.toFixed(2))];
                display = memArr;
                calcText.textContent = display;

                operator = 0;
                numA = memArr;
                numB = [];

                console.log("result memArr", memArr)
            };
        };
    };
});

btnAllClear.onclick = () => {
    memArr = [0];
    numA = [];
    numB = [];
    display = [0];
    calcText.textContent = display.join("");
};

btnClear.onclick = () => {
    display.pop();

    if (display.length < 1) {
        display = [0];
        memArr = [0];
    };

    calcText.textContent = display.join("");
};

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