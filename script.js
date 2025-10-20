function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  if (!a || !b) {
    console.log('All fields are required!');

    return;
  }
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

document.getElementById('btn-add').addEventListener('click', () => {
  const first = Number(document.getElementById('a').value);
  const second = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = add(first, second);
});

document.getElementById('btn-subtract').addEventListener('click', () => {

  const first = Number(document.getElementById('a').value);
  const second = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = subtract(first, second);
});
//TODO: Tasks todo
  // Comment Here 3!
});
document.getElementById('btn-multiply').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = multiply(a, b);
});

