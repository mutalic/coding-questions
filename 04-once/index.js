function once(func) {
  /* Lexical Environment
    - Referenced in future invocations of 'once(func)'*/
  let ranOnce = false; // Keeps track of whether once(func) has been run before
  let result; // Saves the value of initially invocation of func.

  return function (...args) {
    // supports any number of function arguments
    if (!ranOnce) {
      // If not previously run
      result = func.apply(this, args); // func is bound to 'this', and result is saved.
      ranOnce = true;
    }

    return result; // Always returns the first invocation value.
  };
}

/* Example function */
function increment(i) {
  i++;
  return i;
}

/*
incrementOnce
    - The function 'increment' which can only be run once by passing it as a callback function to once().
    - Closure created for incrementOnce: {ranOnce: false, result: undefined}.
*/
const incrementOnce = once(increment);

console.log(incrementOnce(0)); // logs 2 (Closure: {ranOnce: true, result: 1})
console.log(incrementOnce(1)); // logs 2 (Closure: {ranOnce: true, result: 1}) ...
