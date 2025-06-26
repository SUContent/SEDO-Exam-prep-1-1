function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

let b = 8;

const a = 5;


function multiply(a, b) {
  return a * b;
}
function calculateAndDisplay(fn) {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = fn(a, b);
}


const a = 5;


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
document.getElementById('btn-multiply')
  .addEventListener('click', () => calculateAndDisplay(multiply));