export default function camelCaseKeys(input) {
  // camelCase Conversion Function
  function camelCaseConversion(str) {
    let result = "";
    let strList = str.split("_");
    strList.forEach(function (str, i) {
      if (i > 0) {
        str = str.charAt(0).toUpperCase() + str.slice(1);
      }
      result += str;
    });
    return result;
  }

  // If input is a primitive data type
  if (typeof input !== "object") {
    return input;
  }

  // If input is an Array object
  if (Array.isArray(input)) {
    input.forEach(function (element, i) {
      input[i] = camelCaseKeys(element); ///////// SOLVE THIS PART!!!!!!
    });
  } else {
    let entries = Object.entries(input); // [[key, value],...]
    entries = entries.map(function ([key, value], i) {
      return [camelCaseConversion(key), value];
    });
    input = Object.fromEntries(entries); // modified object input

    for (let key in input) {
      input[key] = camelCaseKeys(input[key]);
    }
  }

  return input;
}

console.log(camelCaseKeys([{ baz_qux: true }, { foo: true }]));
