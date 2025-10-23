function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// change 1: Event listeners for buttons
document.getElementById("btn-add").addEventListener("click", () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  document.getElementById("result").textContent = add(a, b);
});

// change 2: Event listeners for buttons
document.getElementById("btn-subtract").addEventListener("click", () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  document.getElementById("result").textContent = subtract(a, b);
});

// change 3: Export functions for testing
