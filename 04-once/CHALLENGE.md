# Once

## Description

Implement a function that accepts a callback and restricts its invocation to at most once. Subsequent calls of the function will return the result of the first invocation of the callback function. The callback function is invoked with the this binding and arguments of the created function.

## Examples

```JavaScript
function increment(i) {
  i ++;
  return i;
}

const incrementOnce = once(increment);
incrementOnce(0); // i is now 1; The function returns 1.
incrementOnce(3); // i is still 1; The function returns the result of the first invocation, which is 1.
incrementOnce(2); // i is still 1 as it is not modified. The function returns the result of the first invocation, which is 1.
```
