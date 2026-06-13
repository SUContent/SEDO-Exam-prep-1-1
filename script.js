function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  if (input === '')
    input = 0;
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  // Check for division by zero
  if (b === 0) {
    return "Error! Division by zero is not allowed.";
  }
  return a / b;
}

document.getElementById('btn-add').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = add(a, b);
});

document.getElementById('btn-subtract').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = subtract(a, b);
});
//Multiply added
document.getElementById('btn-multiply').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = multiply(a, b);
});
//Divide added
document.getElementById('btn-divide').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = divide(a, b);
});
