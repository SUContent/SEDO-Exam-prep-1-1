function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Bug: Fix substract when inputs empty

document.getElementById("btn-add").addEventListener("click", () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  document.getElementById("result").textContent = add(a, b);
});

// Bug: Fix substract when inputs empty 2
document.getElementById("btn-subtract").addEventListener("click", () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  document.getElementById("result").textContent = subtract(a, b);
});

// Bug: Fix substract when inputs empty 3
