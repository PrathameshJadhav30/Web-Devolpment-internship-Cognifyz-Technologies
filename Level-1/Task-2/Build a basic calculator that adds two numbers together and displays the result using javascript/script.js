// Add event listener to the "Add" button
document.getElementById('addButton').addEventListener('click', function() {
    // Get the values of the two input fields
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    // Calculate the sum of the two numbers
    const sum = number1 + number2;

    // Display the result
    document.getElementById('result').textContent = "Result: " + sum;
});
