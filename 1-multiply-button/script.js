function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
//change 6
function multiply(a, b) {
  return a * b;
}
//chage 7 
function calculateAndDisplay(fn) {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = fn(a, b);
}

document.getElementById('btn-add')
  .addEventListener('click', () => calculateAndDisplay(add));

document.getElementById('btn-subtract')
  .addEventListener('click', () => calculateAndDisplay(subtract));

document.getElementById('btn-multiply')
  .addEventListener('click', () => calculateAndDisplay(multiply));
