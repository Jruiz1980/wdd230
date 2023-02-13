var temp = document.querySelector(".temperature").innerHTML;
var wSpeed = document.querySelector(".windSpeed").innerHTML;
var windChiller = 35.74 + (0.6215 * temp)-35.75 * Math.pow(wSpeed,0.16) + (0.4275*temp*Math.pow(wSpeed,0.16));

document.querySelector(".windChill").innerHTML= windChiller;