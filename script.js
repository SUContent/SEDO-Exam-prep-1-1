
//function optimisation
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) return "Error! Division by zero is not allowed.";
  return a / b;
}
//Data input
function getInputs() {
  return {
    a: Number(document.getElementById('a').value),
    b: Number(document.getElementById('b').value)
  };
}
document.getElementById('btn-add').addEventListener('click', () => calculate(add));
document.getElementById('btn-subtract').addEventListener('click', () => calculate(subtract));
document.getElementById('btn-multiply').addEventListener('click', () => calculate(multiply));
document.getElementById('btn-divide').addEventListener('click', () => calculate(divide));
