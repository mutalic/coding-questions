# Debouncing / Throttling

Debouncing and throttling are both methods that increase performance and reduce cost by either delaying the invocation of a function or by setting a minimum wait time before the function can be re-invoked.

While it is important to understand the concept and usage of both methods, when applying these methods in actual projects, using JavaScript utility libraries such as _Underscore.js_ or _Lodash_ is recommended.

# Default Behavior of Event Handlers

A good simple example would be when we attach an event listener to an `<input>` element.

By default, every time user input is generated, `#default` will update. This triggers a huge amount of events.

```HTML
<body>
    <form action="#">
        <input type="text">
        <p>Default: <span id="default"> </span></p>
        <p>Debounced: <span id="debounced"> </span></p>
        <p>Throttled: <span id="throttled"> </span></p>
    </form>
    <script src="index.js"></script>
</body>
```
