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
let a = [];
let b = [];
let display = [0];
let tempArr;

buttons.forEach((button) => {
    button.onclick = () => {

        if (button.classList.contains("number")) {
            if (memArr == 0 && a.length < 1) { //if you don't want to use 0 as a
                memArr = [];
            };

            if (button.value == "." && memArr[memArr.length - 1] != ".") { //using decimal
                memArr.push(button.value);

            } else if (button.value != ".") {
                memArr.push(Number(button.value));
                console.log("memarr", memArr)
            };

            if (typeof operator == "string") { //if a is declared
                display = Array.from(display);
                display.push(button.textContent);
                calcText.textContent = display.join("");

            } else { //if a and b are not declared
                display = memArr;
                console.log("display", display)

                calcText.textContent = display.join("");
                console.log("calcText", calcText.textContent)
            };

        } else if (button.classList.contains("operator") && memArr.length > 0) {
            operator = button.id;
            a = Number(memArr.join(""));
            memArr = [];

            display = Array.from(display);
            display.push(button.textContent);
            calcText.textContent = display.join("");

        } else if (button.classList.contains("equal") && typeof operator == "string" && memArr.length > 0) {
            b = Number(memArr.join(""));

            //dividing by zero
            if (operator == "divide" && b == 0) {
                memArr = "Uh Oh"
                display = memArr;
                calcText.textContent = display;

                operator = 0;

            } else { //regular operations
                memArr = [operate(operator, a, b)];
                display = memArr;
                calcText.textContent = display;

                operator = 0;
                a = [];
                b = [];

                console.log("result memarr", memArr)
            };
        };
    };
});

btnAllClear.onclick = () => {
    memArr = [0];
    a = [];
    b = [];
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

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    return window[operator](a, b);
};