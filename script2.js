const display = document.querySelector('#display');
const operandButtons = document.querySelectorAll('.operand');
const operatorButtons = document.querySelectorAll('.operator');
const allClearButton = document.querySelector('.clear');
const posOrNegButton = document.querySelector('.pos-neg');
const equalsButton = document.querySelector('.equals');
const decimalButton = document.querySelector('.decimal');
let firstOperand = '';
let secondOperand = '';
let operator = '';

let displayValue = '0';

function clickNumberButtons() {
    display.innerText = displayValue;
    operandButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (display.innerText.length < 15) {
                if (display.innerText === '0' || display.innerText === 0) {
                    display.innerText = button.value;
                } else {
                    display.innerText += button.value;
                }
            }
        })
    })
}
clickNumberButtons();

function clearAll() {
    allClearButton.addEventListener('click', () => {
        display.innerText = '0';
    })
}
clearAll();

function operate(num1, operator, num2) {
    if (operator === '+') return add(num1, num2);
    if (operator === '-') return subtract(num1, num2);
    if (operator === '*') return multiply(num1, num2);
    if (operator ==='/') {
        if (num2 === 0 || num2 === '0') {
            return "c'mon...";
        } else {
            return divide(num1, num2);
        }
    }
} 

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

console.log(operate(2, '/', 5))