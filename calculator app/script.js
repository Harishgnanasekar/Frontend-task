// Select display input using DOM Selection
const display = document.querySelector("#display");

// Function to append values to display
function appendValue(value) {
  display.value += value;
}

// Function to clear entire display
function clearDisplay() {
  display.value = "";
}

// Function to delete last entered character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Function to evaluate expression
function calculate() {
  try {
    // Evaluate the mathematical expression
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
