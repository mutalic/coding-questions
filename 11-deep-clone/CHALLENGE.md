# Deep Clone

## Description

Implement a `deepClone` function that performs a deep clone operation on JavaScript objects. You can assume the input object only contains JSON-serializable values, i.e. `null`, `boolean`, `number`, `string`, and will not contain any other built-in objects such as `Date`, `Regex`, `Map` or `Set`.

## Examples

```JavaScript
    const obj1 = { user: { role: 'admin' } };
    const clonedObj1 = deepClone(obj1);

    clonedObj1.user.role = 'guest'; // Change the cloned user's role to 'guest'.
    clonedObj1.user.role; // 'guest'
    obj1.user.role; // Should still be 'admin'.

    const obj2 = { foo: [{ bar: 'baz' }] };
    const clonedObj2 = deepClone(obj2);

    obj2.foo[0].bar = 'bax'; // Modify the original object.
    obj2.foo[0].bar; // 'bax'
    clonedObj2.foo[0].bar; // Should still be 'baz'.
```
