const temp = document.querySelector("#current-temp").innerHTML;
const wSpeed = document.querySelector("#windSpeed").innerHTML;
var windChill = 35.74 + (0.6215 * temp)-35.75 * Math.pow(wSpeed,0.16) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windChill = Math.round(windChill);

if (temp <=100 && wSpeed > 3){
document.querySelector("#windChill").innerHTML= windChill;
}
else{
    document.querySelector("#windChill").innerHTML='N/A';
}