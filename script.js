function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
// This function takes two numbers as input and returns their product.
function multiply(a, b) {
  return a * b;
}
//  This function retrieves the values from the input fields, checks if they are not empty, converts them to numbers, and then calls the provided function (add, subtract, or multiply) to calculate the result. The result is then displayed in the 'result' element.
function calculateAndDisplay(fn) {
  const rawA = document.getElementById('a').value;
  const rawB = document.getElementById('b').value;

  if (rawA === '' || rawB === '') {
    document.getElementById('result').textContent = 'Please fill both inputs';
    return;
  }

  const a = Number(rawA);
  const b = Number(rawB);
  document.getElementById('result').textContent = fn(a, b);
}

['add', 'subtract', 'multiply'].forEach(op => {
  document.getElementById(`btn-${op}`)
    .addEventListener('click', () => calculateAndDisplay(window[op]));
});
