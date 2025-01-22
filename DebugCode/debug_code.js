
function performOperation() {

    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    displayResult(``);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation - multiply
        let result = multiply(num1, num2);

        // Display the result
        displayResult(`${result} (Multiplication)`);

        // Perform the operation - addition
        result = add(num1, num2);

        // Display the result
        displayResult(`${result} (Addition)`);

        // Perform the operation - division
        result = divide(num1, num2);

        // Display the result
        displayResult(`${result} (Division)`);

    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function add(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Add the numbers
    return a + b;
}

function divide(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // divide the numbers
    return a / b;
}


function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    if (result == ''){
        resultElement.textContent = '';
    } else {
        resultElement.textContent +=  `The result is: ${result}\n`; // Not iserting the newline? Why?
    }
}
