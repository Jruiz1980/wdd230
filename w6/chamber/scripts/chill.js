/*let temp = document.querySelector(".temperature").innerHTML;
let wSpeed = document.querySelector(".windSpeed").innerHTML;
var windChiller = 35.74 + (0.6215 * temp)-35.75 * Math.pow(wSpeed,0.16) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windChiller = Math.round(windChiller);
document.querySelector(".windChill").innerHTML= windChiller;*/

function windChill(tempF, speed) 
{
    var tempF = parseFloat(document.getElementById("temperature").value);
    var speed = parseFloat(document.getElementById("windSpeed").value);
    var windChillF = windChill(tempF,speed);
    document.getElementById("windChill").innerHTML = windChillF;

    var windChill = 35.74 + 0.6215 * tempF - 35.75 * speed**0.16 + 0.4275 * tempF * speed**0.16;
    return windChill.toFixed(0);
}