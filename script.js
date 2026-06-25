function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function calculateAndDisplay(fn) {
  const rawA = document.getElementById('a').value;
  const rawB = document.getElementById('b').value;

  // Валидация за празни полета (от bugfix)
  if (rawA === '' || rawB === '') {
    document.getElementById('result').textContent = 'Please fill both inputs';
    return;
  }

  const a = Number(rawA);
  const b = Number(rawB);
  document.getElementById('result').textContent = fn(a, b);
}

// Рефакторирани event listeners (от chore)
['add', 'subtract', 'multiply'].forEach(op => {
  document.getElementById(`btn-${op}`)
    .addEventListener('click', () => calculateAndDisplay(window[op]));
});