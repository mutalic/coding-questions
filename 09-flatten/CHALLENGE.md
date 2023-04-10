# Flatten

## Description

Implement a function flatten, that flattens arrays with arbitrary levels of nesting, and recursively concatenates all arrays within it into an array containing only a single level.

### Examples

```JavaScript
    // Single-level arrays are unaffected
    flatten([1, 2, 3]); // [1, 2, 3]

    // Inner arrays are flattened into a single level
    flatten([1, [2, 3]]); // [1, 2, 3]
    flatten([
    [1, 2],
    [3, 4],
    ]); // [1, 2, 3, 4]

    // Flattens recursively
    flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]
```
