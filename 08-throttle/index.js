// HTML Elements
let inputEl = document.querySelector("input");
let defaultEl = document.querySelector("#default");
let debouncedEl = document.querySelector("#debounced");
let throttledEl = document.querySelector("#throttled");

// Debounce Function
function debounce(func, delay) {
  let timeoutID = null;
  return function (...args) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      func.apply(this, args);
      timeoutID = null;
    }, delay);
  };
}

// Throttle Function
function throttle(func, delay) {
  let shouldWait = false;
  let waitingArgs = null;
  return function (...args) {
    let context = this;

    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    // Initial invocation
    func.apply(context, args);

    // set switch to false
    shouldWait = true;

    // set switch back to true after given delay
    setTimeout(function () {
      if (waitingArgs !== null) {
        func.apply(context, waitingArgs);
      }
      waitingArgs = null;
      shouldWait = false;
    }, delay);
  };
}

// Function that updates textContent of HTML node
function updateText(el, newText) {
  el.textContent = newText;
}

// Debounced updateText
const debouncedUpdateText = debounce(updateText, 1000); // sets delay to 1000ms
// Throttled updateText
const throttledUpdateText = throttle(updateText, 1000); // sets delay to 1000ms

// Event Listener for User Input
inputEl.addEventListener("input", function (e) {
  updateText(defaultEl, e.target.value);
  debouncedUpdateText(debouncedEl, e.target.value);
  throttledUpdateText(throttledEl, e.target.value);
});
