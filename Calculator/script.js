let screen = document.getElementById('screen');

// Append value to the screen input
function appendToScreen(value) {
  screen.value += value;
}

// Clear the screen
function clearScreen() {
  screen.value = '';
}

// Calculate the result
function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = 'Error';
  }
}

