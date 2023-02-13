var temp= document.querySelector(".high");
var wSpeed= document.querySelector(".wSpeed");
var windChill= 35.74 + (0.6215 * temp)-35.75 * Math.pow(wSpeed,0.16) + (0.4275*temp*Math.pow(wSpeed,0.16));


document.querySelector("#windChill").innerHTML= windChill;