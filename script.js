let array = [6, 3, 0, 2];


function addition(array) {
    return array.reduce((a, b) => a + b, 0);
}

function subtraction(array) {
    return array.reduce((a, b) => a - b);
}

function multiplication(array) {
    return array.reduce((a, b) => a * b, 1);
}

function division(array) {
    return array.reduce((a, b) => {
        if (b === 0) {
            return undefined;
        } else {
            return a / b;
        }
    }).toFixed(9);
}
console.log(division(array));