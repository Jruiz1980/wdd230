const temp = document.querySelector("#current-temp").innerHTML;
const wSpeed = document.querySelector("#windSpeed").innerHTML;
const windChill = 35.74 + (0.6215 * temp) + (0.4275 * temp * (wSpeed**0.16))  - (35.75 * (wSpeed**0.16));

document.querySelector("#windChill").innerHTML = windChill;
if (temp <= 50 && wSpeed > 3){
document.querySelector("#windChill").innerHTML= windChill;
}
else{
document.querySelector("#windChill").innerHTML='N/A';
}