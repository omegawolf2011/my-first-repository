function clearResult() {
    document.getElementById('result').value = '';
}

function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendOperator(operator) {
    document.getElementById('result').value += operator;
}

function calculateResult() {
    const expression = document.getElementById('result').value;
    const operators = expression.split(/[\d.]+/).filter(Boolean);
    const numbers = expression.split(/[^\d.]+/).map(Number);

    if (operators.length !== numbers.length - 1) {
        document.getElementById('result').value = 'Error';
        return;
    }

    let result = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const nextNumber = numbers[i + 1];

        switch (operator) {
            case '+':
                result = sum(result, nextNumber);
                break;
            case '-':
                result = subtract(result, nextNumber);
                break;
            case '*':
                result = multiply(result, nextNumber);
                break;
            case '/':
                result = divide(result, nextNumber);
                break;
            default:
                document.getElementById('result').value = 'Error';
                return;
        }
    }

    document.getElementById('result').value = result;
}

function sum(a, b) {
   return a+b
}

function subtract(a, b) {
   return a-b
}

function multiply(a, b) {
   return a*b
}

function divide(a, b) {
   return a/b
}
