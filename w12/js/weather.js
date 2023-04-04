/*// select HTML elements in the document
const currentTemp = document.querySelector('#currenTemp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=3f3f013e4fed008181e53a4db70ffb93';

async function apiFetch() {
    try {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayResults(data);
        console.log(data); // this is for testing the call
    } else {
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    humidity.textContent = weatherData.humidity;
}*/

const weatherContainer = document.querySelector("#weather");
const urlForecast =
'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&cnt=32&appid=3f3f013e4fed008181e53a4db70ffb93';

const urlCurrent =
'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=3f3f013e4fed008181e53a4db70ffb93';

function displayWeather(weather){
    let section = document.createElement('section');
    section.innerHTML=`
        <h4 class='weather-title'>${weather.title}</h4>
        <div class='weather-img'>
            <picture>
                <img src='${`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}' width='100' height='100' alt='Weather image for ${weather.title}'>
            </picture>
            <p>${weather.temp.toFixed(0)} °F</p>
        </div>
        <div class='weather-info'>
            <p>${weather.description}</p>
            <p>Humidity: ${weather.humidity}%</p>
        </div>
    `;
    weatherContainer.appendChild(section);
}

async function apiFetch() {
try {
    const responseForecast = await fetch(urlForecast);
    const responseCurrent = await fetch(urlCurrent);
    if (responseForecast.ok && responseCurrent.ok) {
    const dataForecast = await responseForecast.json();
    const dataCurrent = await responseCurrent.json();
    const currentForecast ={
        title: 'Current Weather',
        temp: dataCurrent.main.temp,
        description: dataCurrent.weather[0].description,
        icon: dataCurrent.weather[0].icon,
        humidity: dataCurrent.main.humidity,
    }
    const forecastDay1 = {
        title: 'Forecast Day 1',
        temp: 0,
        description: '',
        icon: '',
    };
    const forecastDay2 = {
        title: 'Forecast Day 2',
        temp: 0,
        description: '',
        icon: '',
    };
    const forecastDay3 = {
        title: 'Forecast Day 3',
        temp: 0,
        description: '',
        icon: '',
    };
    dataForecast.list.forEach((element, index) => {
        if (index == 8) {
        forecastDay1.title=`Forecast for ${element.dt_txt.split(' ')[0].split('-').join('/')}`
            forecastDay1.temp = element.main.temp
            forecastDay1.description = element.weather[0].description
            forecastDay1.icon = element.weather[0].icon
        }else if(index===16){
        forecastDay2.title=`Forecast for ${element.dt_txt.split(' ')[0].split('-').join('/')}`
            forecastDay2.temp = element.main.temp
            forecastDay2.description = element.weather[0].description
            forecastDay2.icon = element.weather[0].icon
        }else if (index===24){
        forecastDay3.title=`Forecast for ${element.dt_txt.split(' ')[0].split('-').join('/')}`
            forecastDay3.temp = element.main.temp
            forecastDay3.description = element.weather[0].description
            forecastDay3.icon = element.weather[0].icon
        }
    });
    const weathers=[currentForecast, forecastDay1, forecastDay2, forecastDay3];
    weathers.forEach((weather)=>{
        displayWeather(weather);
    })
    } else {
    throw Error(await response.text());
    }
} catch (error) {
    console.log(error);
}
}

apiFetch();
