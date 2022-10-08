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

let memArr = [];
let a = [];
let operator;
let b = [];
let display = [];
let tempArr;

console.log(typeof operator)

buttons.forEach((button) => {
    button.onclick = () => {

        if (button.classList.contains("number")) {
            memArr.push(Number(button.value));

            display.push(button.textContent);
            calcText.value = display.join("");

        } else if (button.classList.contains("operator") && memArr.length > 0) {
            operator = button.id;
            a = Number(memArr.join(""));
            memArr = [];

            display = Array.from(display);
            display.push(button.textContent);
            calcText.value = display.join("");
        } else if (button.classList.contains("equal") && typeof operator == "string" && memArr.length > 0) { 
            b = Number(memArr.join(""));

            memArr = [operate(operator, a, b)];
            display = memArr;
            calcText.value = display;

            operator = 0;

        };
    };

    // a.toString()).length > 0
});

btnAllClear.onclick = () => {
    memArr = [];
    a = [];
    b = [];
    display = [];
    calcText.value = memArr;
};

btnClear.onclick = () => {

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