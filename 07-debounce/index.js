function debounce(func, wait) {
  let timeoutID = null;
  return function (...args) {
    const context = this;
    clearTimeout(timeoutID);

    timeoutID = setTimeout(function () {
      func.apply(context, args);
      timeoutID = null;
    }, wait);
  };
}

let i = 0;
function increment() {
  i++;
  console.log(i);
  return i;
}

const debouncedIncrement = debounce(increment, 1000);

debouncedIncrement();
