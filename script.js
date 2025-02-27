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

function buttonClick() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if (buttons[i].classList.contains())
        })
    }
}

function inputTheOperand(operand) {
    if (firstInput === null) {
        if (displayValue === '0' || displayValue === 0) {
            displayValue = operand;
        } else if (displayValue === firstInput) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    } else {
        if (displayValue === firstInput) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    }
}

function inputTheOperator() {

}

function operate(a, b, operator) {
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

console.log(operate(4, 0, '/'));