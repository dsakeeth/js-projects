const city = document.querySelector('.search');
const submitBtn = document.querySelector('.s');
const warning = document.querySelector('.warning');
const currentLocation = document.querySelector('.location');
const temperature = document.querySelector('#temperature');
const cloudsType = document.querySelector('.weather-type');
const windSpeed = document.querySelector('#windSpeed');
const humidityPercentage = document.querySelector('#humidityPercentage');
const currentWeatherBlock=document.querySelector('.current-weather-details');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let currentCity = city.value.trim();
    console.log(currentCity);
    if (currentCity !== "") {
        currentLocation.textContent = currentCity;
        warning.textContent = ""; 
        city.value = '';
        getCurrentWeatherDetails(currentCity);
        getHourlyForecast(currentCity);
    } else {
        warning.textContent = "Please Enter a City!";
    }
});

const getCurrentWeatherDetails = (currentCity) => {
    const apiKey = 'f78c9d4dbcb8422d7c6e77fd0016c279';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const tempCelsius = data.main.temp - 273.15;
            const windSpeedKmph = data.wind.speed * 3.6;
            const humidity = data.main.humidity;
            const weatherType = data.weather[0].main; // Access the first element of the weather array
            const existingImage = currentWeatherBlock.querySelector('img');
            if (existingImage) {
                currentWeatherBlock.removeChild(existingImage);
            }
            temperature.textContent = tempCelsius.toFixed(2);
            windSpeed.textContent = windSpeedKmph.toFixed(2);
            humidityPercentage.textContent = humidity;
            cloudsType.textContent = weatherType;
            const weatherIcon = document.createElement('img');
            weatherIcon.src =`images/${weatherType.toLowerCase()}.png`;
            weatherIcon.alt = weatherType;
            currentWeatherBlock.appendChild(weatherIcon);
        })
        .catch(error => {
            console.error('Fetch error:', error);
            warning.textContent = "Unable to fetch the details";
        });
};

const getHourlyForecast=(currentCity)=>{
    const apiKey='990a198220c0418066efadf46b6abe52';
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=${apiKey}`)
    .then(response=>{
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data=>{
        console.log("hourly",data);
    })
    .catch(e=>{
        console.log(e);
        warning.textContent = "Unable to fetch hourly details";
    });
};