/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  In the HTML, have one input field where someone can enter
  in a temperature. Then have a radio button group where
  Celsius or Fahrenheit can be selected as the scale that the
  number should be converted to. Then a button that,
  when clicked, displays the converted.
*/

function toCelsius(sentTemp) {
  return (sentTemp - 32) * (5 / 9);
}

function toFahrenheit(sentTemp) {
  return (sentTemp * (9 / 5)) + 32;
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter(e) {

  // This will actually return an array containing both of the radio buttons
  // so you will need to look at each item in the array and see if the 'checked'
  // property is true (sample code provided)
  var optionChosen = document.getElementsByName("conversion_type");

  var inputTemp = document.getElementById("input_temp").value;

  for (var i = 0; i < optionChosen.length; i++) {
    var moddedTemp = 0;
    if (optionChosen[i].checked && optionChosen[i].value === 'celsius') {
      moddedTemp = toCelsius(inputTemp);
      document.getElementById("output").innerHTML = inputTemp +
        "&deg; Fahrenheit is " + moddedTemp + "&deg; Celsius.";
      break;
    } else if (optionChosen[i].checked && optionChosen[i].value === 'fahrenheit') {
      moddedTemp = toFahrenheit(inputTemp);
      document.getElementById("output").innerHTML = inputTemp +
        "&deg; Celsius is " + moddedTemp + "&deg; Fahrenheit.";
      break;
    } 
  }
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// Assign a function to be executed when the button is clicked
button.onclick = determineConverter;