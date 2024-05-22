document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map
    var map = L.map('map').setView([51.505, -0.09], 5); // Set the initial view to a location and zoom level

    // Replace 'your-api-key' with your actual OpenWeatherMap API key
    var apiKey = '93944ba26fe24074c5cbae37afa50ae9';

    // Define the OpenWeatherMap tile layer
    var weatherLayer = L.tileLayer('https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=' + apiKey, {
        attribution: 'Map data © <a href="https://openweathermap.org/">OpenWeatherMap</a>',
        maxZoom: 18,
    });

    // Add the weather layer to the map
    weatherLayer.addTo(map);

    // Function to update current weather
    function updateCurrentWeather(lat, lon) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                document.querySelector('.temperature').textContent = `${data.main.temp}°C`;
                document.querySelector('.weather-type').textContent = data.weather[0].description;
                document.querySelector('.wind h5').textContent = `${data.wind.speed} kmph`;
                document.querySelector('.humidity h5').textContent = `${data.main.humidity}%`;
            });
    }

    // Function to update air pollution data
    function updateAirPollution(lat, lon) {
        fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                const pollutionLevel = data.list[0].main.aqi; // Air Quality Index
                document.querySelector('#air-pollution').textContent = `Air Pollution Level: ${pollutionLevel}`;
            });
    }

    // Handle the "use current location" button click
    document.querySelector('.current-location').addEventListener('click', function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                map.setView([lat, lon], 10);
                updateCurrentWeather(lat, lon);
                updateAirPollution(lat, lon);
            }, function (error) {
                alert('Error occurred. Error code: ' + error.code);
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    });

    // Handle the search form submit
    document.querySelector('#search-box form').addEventListener('submit', function (e) {
        e.preventDefault();
        var city = document.querySelector('.search').value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                var lat = data.coord.lat;
                var lon = data.coord.lon;
                map.setView([lat, lon], 10);
                updateCurrentWeather(lat, lon);
                updateAirPollution(lat, lon);
            })
            .catch(error => {
                alert('City not found!');
            });
    });
});
