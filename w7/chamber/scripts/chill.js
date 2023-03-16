const temp = document.querySelector("#current-temp").textContent;
const wSpeed = document.querySelector("#windSpeed").textContent;
const windChills = 35.74 + (0.6215 * temp) + (0.4275 * temp * (wSpeed**0.16))  - (35.75 * (wSpeed**0.16)) ;

const windChill = Math.round(windChills);
document.querySelector("#windChill").textContent = windChill;

/*if (temp <= 52 && wSpeed > 3){
document.querySelector("#windChill").innerHTML= windChill;
}
else{
document.querySelector("#windChill").innerHTML='N/A';
}*/