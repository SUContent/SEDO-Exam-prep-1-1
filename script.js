function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
//ONE
<<<<<<< chore/-refactor-handlers
=======
//FOUR
//SEVEN
>>>>>>> main
document.getElementById('btn-add').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = add(a, b);
});

//TWO
<<<<<<< chore/-refactor-handlers

=======
//FIVE
//EIGHT
>>>>>>> main
document.getElementById('btn-subtract').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = subtract(a, b);
});

<<<<<<< chore/-refactor-handlers
//THREE
=======
//THREE
//SIX
//NINE
>>>>>>> main
