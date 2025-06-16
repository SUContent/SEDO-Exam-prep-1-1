function add(a, b) {
  if (a==='') {
    return "The left field is empty"
  } else if (b==='') {
    return "The right field is empty"
  } else {
    return a + b;
  }
}

function subtract(a, b) {
  return a - b;
}

document.getElementById('btn-add').addEventListener('click', () => {
  let a = document.getElementById('a').value;
  if (a !== '') {
    a = Number(a);
  }
  let b = document.getElementById('b').value;
  if (b !== '') {
    b = Number(b);
  }
  document.getElementById('result').textContent = add(a, b);
});

document.getElementById('btn-subtract').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = subtract(a, b);
});

//commit 2

//commit 3