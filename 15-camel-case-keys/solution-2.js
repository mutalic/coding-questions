/*
Solution #2
Differences from Solution #1
    1) This solution does not modify the original input object, but returns a new object.
    2) Checks for 'null' when checking primitive values, as typeof null === "object".

Process
    1. We will check for three different types of input.
        - non-objects (primitive data types)
        - objects
            - array objects
            - non-array objects
    2. Depending on the type of input, we will either recursively call camelCaseKeys() or return the input.
        - Non-objects => return it
        - objects
            - array => Loop through each element and call camelCaseKeys()
            - non-array object => Loop through each property and call camelCaseKeys()
*/

function camelCaseConversion(str) {
  if (/_/g.test(str)) {
    return str.toLowerCase().replace(/_[a-z]/g, (match) => {
      return match[1].toUpperCase();
    });
  }
  return str;
}

export default function camelCaseKeys(input) {
  // Primitive data types (non-reference)
  if (typeof input !== "object" || input === null) {
    return input;
  }

  // Reference data types (type === "object")
  // Arrays
  if (Array.isArray(input)) {
    return input.map((element) => camelCaseKeys(element));
  }

  // Non-array objects
  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => {
      return [camelCaseConversion(key), camelCaseKeys(value)];
    })
  );
}
