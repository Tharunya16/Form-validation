function myfunction() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let calculate = document.getElementById('operator').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }

    if (calculate === '+') {
        result = num1 + num2;
    } 
    else if (calculate === '-') {
        result = num1 - num2;
    } 
    else if (calculate === '*') {
        result = num1 * num2;
    } 
    else if (calculate === '/') {
        if (num2 === 0) {
            alert("Cannot divide by zero");
            return;
        }
        result = num1 / num2;
    }

    document.getElementById('result').value = result;
}