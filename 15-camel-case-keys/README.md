# Challenge: Camel Case Keys

## Description

Implement a function camelCaseKeys, that takes an object and returns a new object with all its keys converted to camel case.

Camel case is a practice where words are separated with a single capitalized letter and the first letter of the word will be lower case. Some examples:

- String camelCase
  - foo Yes
  - fooBar Yes
  - FooBar No
  - Foo_Bar No
  - foo_bar No

## Examples

```JavaScript
    camelCaseKeys({ foo_bar: true });
    // { fooBar: true }

    camelCaseKeys({ foo_bar: true, bar_baz: { baz_qux: '1' } });
    // { fooBar: true, barBaz: { bazQux: '1' } }

    camelCaseKeys([{ baz_qux: true }, { foo: true, bar: [{ foo_bar: 'hello' }] }]);
    // [{ bazQux: true }, { foo: true, bar: [{ fooBar: 'hello' }] }]
```

## Solution

### Initial Solution

- I used recursion to continuously apply `camelCaseKeys` until the element/value of the object is a primitive data type.

#### Questions Asked

    - Is every key going to be snake-cased?
        - (Yes. Other naming conventions can be ignored.)
    - Do we only care about enumerable, non-inherited string keys?
        - (Yes. Cases with inherited keys can be ignored.)
        - If we did care about cases with inherited keys, I would have to us the `hasOwnProperty` or `Object.hasOwn` to make sure the properties are direct properties of the object, since we typically do not want to modify inherited properties.

### Questions Not Asked (Due to ignorance)

    - Can object contain cyclic references?
        - (This can be ignored.)
    - What if the input object is deeply nested and the recursion results in a stack overflow?
        - (This can be ignored.)

### What I learned

    - How to use Regular Expressions to convert snake_case keys into camelCase keys.
        - flags: g, i
        - metacharacters: []
        - Using a callback function within String.replace().
    - Utilizing Object.entries() and Object.fromEntries()
        - ... to modify objects without changing the original object.
        - ... to access an object's key, value pairs.
    - Solidifying my understanding of recursion.
    - How to differentiate between primitive data types and objects.
        - Using `typeof data !== "object" || data === null` for primitive data types.
        - Using Array.isArray(data) to check if data is array or not, since arrays are a subcategory of objects in JavaScript.
