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
}

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
        humidity: 0,
    };
    const forecastDay2 = {
        title: 'Forecast Day 2',
        temp: 0,
        description: '',
        icon: '',
        humidity: 0,
    };
    const forecastDay3 = {
        title: 'Forecast Day 3',
        temp: 0,
        description: '',
        icon: '',
        humidity: 0,
    };
    dataForecast.list.forEach((element, index) => {
        if (index == 8) {
        forecastDay1.title=`Forecast for ${element.dt_txt.split(' ')[0].split('-').join('/')}`
            forecastDay1.temp = element.main.temp
            forecastDay1.description = element.weather[0].description
            forecastDay1.icon = element.weather[0].icon
            forecastDay1.humidity = element.main.humidity
        }else if(index===16){
        forecastDay2.title=`Forecast for ${element.dt_txt.split(' ')[0].split('-').join('/')}`
            forecastDay2.temp = element.main.temp
            forecastDay2.description = element.weather[0].description
            forecastDay2.icon = element.weather[0].icon
            forecastDay2.humidity = element.main.humidity
        }else if (index===24){
        forecastDay3.title=`Forecast for ${element.dt_txt.split(' ')[0].split('-').join('/')}`
            forecastDay3.temp = element.main.temp
            forecastDay3.description = element.weather[0].description
            forecastDay3.icon = element.weather[0].icon
            forecastDay3.humidity = element.main.humidity
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

apiFetch();*/
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector("#humidity");

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=3f3f013e4fed008181e53a4db70ffb93';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
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

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    humidity.textContent = weatherData.main.humidity;
    const speed = weatherData.wind.speed.toFixed(0)
    windSpeed.innerHTML = `${speed} mph`;}

    const forecast = document.querySelector("#forecast");
    const endpoint = "https://api.openweathermap.org/data/2.5/forecast?zip=92008&appid=b04526d795953ba74040ce82b862c119&units=imperial";
    
    async function apiFetchForecast() {
        try {
            const response = await fetch(endpoint);
            if(response.ok) {
                const data = await response.json()
                displayForecastResults(data)
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    function displayForecastResults(forecast_data) {
        let filtered_forecast = forecast_data.list.filter(forecast => forecast.dt_txt.includes(" 12:00:00"));
        filtered_forecast.slice(0, 3).forEach(forecast_day => {
    
            let week_day = new Date(forecast_day.dt * 1000).toLocaleDateString("en", {weekday: "long"});
            const weather_icon = forecast_day.weather[0].icon;
            const icon_src = `https://openweathermap.org/img/wn/${weather_icon}@2x.png`;
            const desc = forecast_day.weather[0].description;
            const weather_temp = forecast_day.main.temp.toFixed(0);
    
            let div = document.createElement('div');
            let day = document.createElement('h3');
            let icon = document.createElement('img');
            let temp = document.createElement('p');
    
            div.className = "forecast-day rounded-corners";
            day.textContent = week_day;
    
            icon.src = icon_src;
            icon.alt = desc;
    
            // temp.className = "forecast";
            temp.textContent = `${weather_temp}°F`;
    
            div.appendChild(day);
            div.appendChild(icon);
            div.appendChild(temp);
    
            forecast.appendChild(div);
        });
    }
    
    apiFetchForecast()
    