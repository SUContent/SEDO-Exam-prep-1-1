function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
//ONE
//FOUR
//SEVEN
document.getElementById('btn-add').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = add(a, b);
});

//TWO
//FIVE
//EIGHT
document.getElementById('btn-subtract').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = subtract(a, b);
});

//THREE
//SIX
//NINE