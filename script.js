
// add
// subtract
// multiply
// divide

const add = function add(a, b) {
    return a + b;
};

const subtract = function subtract(a, b) {
    return a - b;
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

function operate() {

};