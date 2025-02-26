const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
let firstInput = null;
let secondInput = null;
let firstOperator = null;
let secondOperator = null;
let result = null;

let displayValue = '0';

function displayUpdate() {
    display.innerText = displayValue;
    if (displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    }
}
displayUpdate();

function operation(a, b, operator) {
    if (operator === '+') {
        return a + b;
    } else if (operator === '-') {
        return a - b;
    } else if (operator === '*') {
        return a * b;
    } else if (operator === '/') {
        if (b === 0) {
            return "c'mon...";
        } else {
            return a / b;
        }
    }
}

console.log(operation(4, 0, '/'));