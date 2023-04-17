/*
        Initially, both fields are empty.
        When a number value is entered into a text input, the other input will be calculated and reflected.
        Round to 4 decimal places where necessary.
        If a non-numerical string is entered into one input, the other input will be blank.

        1. Attach event listener on input elements.
        2. Check if input is numerical string
            - If so, parse input (string to number) using parseFloat().
            - If not, do not execute anything.
        3. Check e.target.id
            - If it is 'input-celcius' -> convert C to F
            - If it is 'input-fahrenheit' -> convert F to C
        4. Round conversion result to 4 decimal points.
        5. Display conversion result to other input area.
        */

$("input").on("input", function (e) {
  let inputValue = e.target.value;
  let regexp = /^[0-9]*\.?[0-9]+$/;
  let inputIsNumber = regexp.test(inputValue);
  let id = e.target.id;

  if (inputIsNumber) {
    let conversionResult;
    inputValue = parseFloat(inputValue);
    if (id === "input-celcius") {
      conversionResult = 1.8 * inputValue + 32;
      $("#input-fahrenheit").val(conversionResult);
    } else if (id === "input-fahrenheit") {
      conversionResult = (inputValue - 32) / 1.8;
      $("#input-celcius").val(conversionResult);
    }
  } else {
    if (id === "input-celcius") {
      $("#input-fahrenheit").val("");
    } else if (id === "input-fahrenheit") {
      $("#input-celcius").val("");
    }
  }
});
