const display = document.querySelector('#display');
const operandButtons = document.querySelectorAll('.operand');
const operatorButtons = document.querySelectorAll('.operator');
const allClearButton = document.querySelector('.clear');
const posOrNegButton = document.querySelector('.pos-neg');
const equalsButton = document.querySelector('.equals');
const decimalButton = document.querySelector('.decimal');
const percentButton = document.querySelector('.percent');
const buttons = document.querySelectorAll('button');
let firstOperand = null;
let secondOperand = null;
let operator = null;
let result = null;

let displayValue = '0';

function displayUpdate() {
    display.innerText = displayValue;
    if (displayValue.length > 15) {
        display.innerText = displayValue.substring(0, 15);
    }
}
displayUpdate();


// Loops through each number button and listens for the 'click' event.
// then calls on the appendNumber() function and passes in the button.value
operandButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.value);
    })
})

// appends numbers to the display
function appendNumber(num) {
    if (displayValue === '0' || displayValue === "c'mon...") {
        displayValue = num;
    } else if (displayValue.length < 15) {
        displayValue += num;
    }
    displayUpdate();
}

// loops through each operator button and listens for the click event
// then calls the chooseOperator() function and passes in the button.value
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperator(button.value);
    })
})

function chooseOperator(op) {
    if (operator !== null) evaluate();
    firstOperand = parseFloat(displayValue);
    operator = op;
    displayValue = '0';
}

// handles the equals button
// if no operation is set nothing happens
// calls the operate() function to calculate the result
// resets the operator for the next operation
function evaluate() {
    if (operator === null || firstOperand === null) return;
    secondOperand = parseFloat(displayValue);
    result = operate(firstOperand, operator, secondOperand);
    displayValue = result.toString();
    firstOperand = result;
    operator = null;
    displayUpdate();
}

// resets the display to default
function clear() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    operator = null;
    result = null;
    displayUpdate();
}

// makes sure the decimal can only be added once
decimalButton.addEventListener('click', () => {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        displayUpdate();
    }
})

// makes the number positive or negative
// firt click becomes negative, second click return to positive
posOrNegButton.addEventListener('click', () => {
    displayValue = displayValue.startsWith('-') ? displayValue.slice(1) : '-' + displayValue;
    displayUpdate(); 
})

// converts the current number into a percentage by dividing it by 100
percentButton.addEventListener('click', () => {
    displayValue = (parseFloat(displayValue) / 100).toString();
    displayUpdate();
})

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

equalsButton.addEventListener('click', evaluate);
allClearButton.addEventListener('click', clear);