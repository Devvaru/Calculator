const btnClear = document.querySelector("#btnClear");
const btnAllCLear = document.querySelector("#btnAllCLear");
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

buttons.forEach((button) => {
    button.onclick = () => {
        console.log(button.id);
    };
});


const add = function add(arr) {
    return arr.length
        ? arr.reduce((accumulator, nextItem) => accumulator + nextItem)
        : 0;
};

const subtract = function subtract(arr) {
    return arr.length
        ? arr.reduce((accumulator, nextItem) => accumulator - nextItem)
        : 0;
};

const multiply = function multiply(arr) {
    return arr.length
        ? arr.reduce((accumulator, nextItem) => accumulator * nextItem)
        : 0;
};

const divide = function divide(arr) {
    return arr.length
        ? arr.reduce((accumulator, nextItem) => accumulator / nextItem)
        : 0;
};

function operate(operator,a,b) {
    return operator(a,b);
};