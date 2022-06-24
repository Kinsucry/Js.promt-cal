var num1 = parseFloat(prompt("Enter a number"));
var operator = prompt("Enter an operator(either +, -, / or *):");
var num2 = parseFloat(prompt("Enter another number"));

if(operator == '+') {
    result = num1 + num2;
}
else if(operator == '-') {
    result = num1 - num2;
}
else if(operator == '/') {
    result = num1 / num2;
}
else if(operator == '*') {
    result = num1 * num2;
}
window.alert('Result is' + result);