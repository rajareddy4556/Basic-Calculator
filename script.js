let result = document.getElementById("result");
let currentInput = '';

function appendDigit(digit) {
    currentInput += digit;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput !== '') {
        currentInput += ' ' + operator + ' ';
        updateDisplay();
    }
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function clearResult() {
    currentInput = '';
    updateDisplay();
}

function clearOneByOne() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        let resultValue = eval(currentInput);
        currentInput = resultValue.toString();
        updateDisplay();
    } catch (error) {
        result.value = 'Error';
        currentInput = '';
    }
}

function updateDisplay() {
    result.value = currentInput;
}