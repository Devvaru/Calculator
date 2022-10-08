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

buttons.forEach((button) => {
    button.onclick = () => {

        if (button.classList.contains("number")) {
            memArr.push(Number(button.value));
            console.log("num", memArr)

        } else if (button.classList.contains("operator")) {
            operator = button.id;
            a = Number(memArr.join(""));
            memArr = [];

        } else if (button.classList.contains("equal")) {
            b = Number(memArr.join(""));
            console.log(operator, a, b)
            console.log(operate(operator,a,b));

            memArr = [operate(operator,a,b)];
        };


        // if (button.classList.contains("number")) {
        //     if (memArr == [] || a[1]) {
        //         a.push(Number(button.value));
        //         memArr = [Number(a.join(""))];
        //         console.log("a", a);
        //         console.log("memarra", memArr);

        //     } else if (operator != [] || b == [] || b[1]) {
        //         b.push(Number(button.value));
        //         memArr = [Number(b.join(""))];
        //         console.log("b",b);
        //         console.log("memarrb", memArr);
        //     };
        // };


        // if (button.classList.contains("number")) {
        //     if (typeof (a[a.length - 1]) === "number") {
        //         a.push(Number(button.value));
        //         memArr = [Number(a.join(""))];
        //         console.log("a", a);
        //         console.log(memArr);

        //     } else {

        //         //add
        //         //else if memArr length-1 is operator then do b
        //         memArr = a.push(Number(button.value));
        //         console.log(memArr);
        //     };


        // } else if (typeof memArr[memArr.length - 1] == "number" && button.classList.contains("operator")) {
        //     operator = button.textContent;
        //     memArr.push(operator);
        //     console.log(memArr);

        // } else if (typeof memArr[memArr.length - 1] == "number" && button.classList.contains("equal")) {


        // } else {
        // };


    };
});

btnAllClear.onclick = () => {
    memArr = [];
    a = [];
    operator = [];
    b = [];
    calcText.value = memArr;
};

btnClear.onclick = () => {
    memArr.splice(memArr.length - 1, 1);
    calcText.value = memArr.join("");
    console.log(memArr);
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




// const add = function add(arr) {
//     return arr.lengthS
//         ? arr.reduce((accumulator, nextItem) => accumulator + nextItem)
//         : 0;
// };

// const subtract = function subtract(arr) {
//     return arr.length
//         ? arr.reduce((accumulator, nextItem) => accumulator - nextItem)
//         : 0;
// };

// const multiply = function multiply(arr) {
//     return arr.length
//         ? arr.reduce((accumulator, nextItem) => accumulator * nextItem)
//         : 0;
// };

// const divide = function divide(arr) {
//     return arr.length
//         ? arr.reduce((accumulator, nextItem) => accumulator / nextItem)
//         : 0;
// };
