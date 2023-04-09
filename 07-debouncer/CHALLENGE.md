# Contact Form

## Description

Debouncing is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function is debounced with a wait time of X milliseconds, it must wait until after X milliseconds have elapsed since the debounced function was called. You almost certainly have encountered debouncing in your daily lives before — when entering an elevator. Only after X duration of not pressing the "Door open" button (the debounced function not being called) will the elevator door actually close (the callback function is executed).

Implement a debounce function which accepts a callback function and a wait duration. Calling debounce() returns a function which has debounced invocations of the callback function following the behavior described above.

### Examples

```JavaSCript
let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.

// t = 100: increment() was invoked and i is now 1.
```

```JavaScript
let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.
//  Call debouncedIncrement() again.
debouncedIncrement(); // i = 0

// t = 100: i is still 0 because it has only
//  been 50ms since the last debouncedIncrement() at t = 50.

// t = 150: Because 100ms have passed since
//  the last debouncedIncrement() at t = 50,
//  increment was invoked and i is now 1 .

```

### What I Learned

- "this" binding:

  - Purpose: For cases in which the function is called as a method of an object and needs to access the context (i.e., the "this" value) of that object.
  - "this" can be bound by either using Function.prototype.apply or Function.prototype.call. However, because 'func' in this challenge is called within setTimeout's callback function, which makes it a free function invocation, the 'this' value is the global object (Window or undefined (strict mdoe)). This is why we need to make sure 'this' refers to the correct context. This can be done in two different ways:

    #### Solution #1

    ```JavaScript
        function debounce(func, wait) {
            let timeoutID = null;
            return function (...args) {
                const context = this; // Saves the context whenever debounced func is invoked.
                clearTimeout(timeoutID);

                timeoutID = setTimeout(function () {
                    func.apply(context, args); // binds 'context' to func, because 'this' is Window here
                }, wait);
            };
        }
    ```

    #### Solution #2

    ```JavaScript
        function debounce(func, wait) {
            let timeoutID = null;
            return function (...args) {
                clearTimeout(timeoutID);

                timeoutID = setTimeout(() => { // callback function is invoked via arrow function
                    func.apply(this, args); // 'this' refers to outer function's 'this' value (it is bound to the context in which the function is originally created)
                }, wait);
            }
        }
    ```
