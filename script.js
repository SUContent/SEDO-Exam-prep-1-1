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
  const rawA = document.getElementId('a').value;
  const rawB = document.getElementId('b').value;

  if (rawA === '' || rawB === '') {
    document.getElementId('result').textContent = 'Please fill both inputs';
    return;
  }

  const a = Number(rawA);
  const b = Number(rawB);
  document.getElementId('result').textContent = fn(a, b);
}

['add', 'subtract', 'multiply'].forEach(op => {
  document.getElementId(`btn-${op}`)
    .addEventListener('click', () => calculateAndDisplay(window[op]));
});
