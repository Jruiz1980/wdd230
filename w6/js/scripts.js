// Get the temperature and wind speed input values
let temperature = parseFloat(document.querySelector(".temperature").innerHTML);
let windSpeed = parseFloat(document.querySelector(".windSpeed").innerHTML);
// Convert the temperature to Fahrenheit
//temperature = (temperature * 9/5) + 32;
// Check if the input values meet the specification limits
if (temperature <= 50 && windSpeed > 3.0) {
  // Calculate the wind chill factor
  let windChillFactor = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
  // Display the wind chill factor value
    document.querySelector(".windChill").innerHTML = windChillFactor.toFixed(2) + "°F";
} else {
  // Display "N/A" if the input values did not meet the requirements
        document.querySelector(".windChill").innerHTML = "N/A";
}
