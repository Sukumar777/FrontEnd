// Weather App

const weatherForm = document.querySelector(".weatherForm");
const enterCity = document.querySelector(".enterCity");
const card = document.querySelector(".card");

const apiKey = "b2c694fe6a91bff756e3a465a5690849";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = enterCity.value;

    if (city) {
        
        try 
        {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } 
        catch (error) 
        {
            console.error(error);
            errorDisplayfunc(error);
        }

    } else {
        errorDisplayfunc("Please enter a city");
    }

});

async function getWeatherData(city) {
    
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiURL);

    if (!response.ok) {
        throw new Error("Could not fetch the weather data");
    }
    
    return await response.json();
    
}

function displayWeatherInfo(data) {
    
    const {name: city, 
           main: {humidity, temp}, 
           weather: [{description, id}]} = data;
    
    card.textContent = "";
    card.style.display = "flex";

    const cityName = document.createElement("h1");
    const temperatureDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const emojiDisplay = document.createElement("p");

    cityName.textContent = city;
    temperatureDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    emojiDisplay.textContent = getWeatherEmoji(id);

    cityName.classList.add("cityName");
    temperatureDisplay.classList.add("temperatureDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    emojiDisplay.classList.add("emojiDisplay");

    card.appendChild(cityName);
    card.appendChild(temperatureDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(emojiDisplay);
}

function getWeatherEmoji(weatherid) {
    
    switch (true){
        case (weatherid >= 200 && weatherid < 300):
            return "⛈️"; // Thunderstorm
        case (weatherid >= 300 && weatherid < 500): 
            return "🌧️"; // Drizzle
        case (weatherid >= 500 && weatherid < 600):
            return "🌦️"; // Rain
        case (weatherid >= 600 && weatherid < 700):
            return "❄️"; // Snow
        case (weatherid >= 700 && weatherid < 800):
            return "🌫️"; // Atmosphere (fog, mist, etc.)
        case (weatherid === 800):
            return "☀️"; // Clear
        case (weatherid > 800): 
            return "☁️"; // Clouds
        default: 
            return "🌡️"; // Default  
    }
}

function errorDisplayfunc(message) {
    
    const displayError = document.createElement("p");
    displayError.textContent = message;
    displayError.classList.add("errorDisplay");


    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(displayError);

}