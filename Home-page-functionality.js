const inputBox = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-button');
const weather_img = document.querySelector('.weather-icon');
const temp = document.querySelector('.temperature');
const weather_description = document.querySelector('.weather-description');
const cityName = document.querySelector('.location');
const feels_like = document.querySelector('.feels-like-value');
const max_temp = document.querySelector('.max-temp-value');
const min_temp = document.querySelector('.min-temp-value');
const default_city = 'Chandigarh';
const humid = document.querySelector('.info-value-1');
const pressure = document.querySelector('.info-value-2');
const winds = document.querySelector('.info-value-3');
const fiveDayTemp1 = document.querySelector('.temp1')
const fiveDayTemp2 = document.querySelector('.temp2')
const fiveDayTemp3 = document.querySelector('.temp3')
const fiveDayTemp4 = document.querySelector('.temp4')
const fiveDayTemp5 = document.querySelector('.temp5')



// Changing style after DOM manipulation.
const elem = document.querySelector('.temperature');
elem.style.fontSize = '51px'; 

const elem2 = document.querySelector('.location');
elem2.style.fontSize = '34px';

const elem3 = document.querySelector('.more-temp-info')
elem3.style.marginTop = '40px';

const elem4 = document.querySelector('.weather-description')
elem4.style.marginLeft = '40px';
elem4.style.fontWeight = 600;
elem4.style.display = "flex";
elem4.style.justifyContent = "Center";


    //backgrund image changing:
    //Select the element you want to add a background image to
    const bodyElement = document.body;
function setBackgroundImage(value) {
    let imageUrl;

    // Set image URL based on the value
    if (value === "Clear") {
        imageUrl = "url('images/clear-bakground.jpg')";
    } else if (value === "Clouds") {
        imageUrl = "url('images/cloud-background.jpg')";
    } else if (value === "Rain") {
        imageUrl = "url('images/rain-background.jpg')";
    } else if (value === "Smoke") {
        imageUrl = "url('images/smoke-background.avif')";
    } else if (value === "Drizzle") {
        imageUrl = "url('images/drizzle-background.jpg')";        
     } else if (value === "Mist") {
        imageUrl = "url('images/mist-background.jpg')";
     }  
    else if (value === "Snow") {
           imageUrl = "url('images/snow-background.jpg')";
    }
    else if (value === "Haze") {
        imageUrl = "url('images/mountain-white-clouds-daytime.jpg')";
    }
    else { 
        imageUrl = "url('images/navy-blue-background.jpeg')"; // Default image
    }

    // Apply the background image
    bodyElement.style.backgroundImage = imageUrl;
}
// api data json fectching
async function checkWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5264d864713fc40d5f86d77f26f60ae5`;

    const weather_data = await fetch(`${url}`).then(response => 
        response.json());
    
        // DOM manipulation
    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    cityName.innerHTML = `${weather_data.name}, ${weather_data.sys.country}`;
    feels_like.innerHTML = `${Math.round(weather_data.main.feels_like - 273.15)}°C`;
    max_temp.innerHTML = `${Math.round(weather_data.main.temp_max - 273.15)}°C`;
    min_temp.innerHTML = `${Math.round(weather_data.main.temp_min - 273.15)}°C`;
    weather_description.innerHTML = `${weather_data.weather[0].main}`;
    humid.innerHTML = `${weather_data.main.humidity}%`;
    pressure.innerHTML = `${weather_data.main.pressure}hPa`;
    winds.innerHTML = `${weather_data.wind.speed}mph`;
    fiveDayTemp1.innerHTML = `${Math.round(weather_data.main.temp - 273.15 - 3)}°C / ${Math.round(weather_data.main.temp - 273.15+4)}°C`;
    fiveDayTemp2.innerHTML = `${Math.round(weather_data.main.temp - 273.15 - 2)}°C / ${Math.round(weather_data.main.temp - 273.15+6)}°C`;
    fiveDayTemp3.innerHTML = `${Math.round(weather_data.main.temp - 273.15 + 2)}°C / ${Math.round(weather_data.main.temp - 273.15+4)}°C`;
    fiveDayTemp4.innerHTML = `${Math.round(weather_data.main.temp - 273.15 + 2)}°C / ${Math.round(weather_data.main.temp - 273.15+8)}°C`;
    fiveDayTemp5.innerHTML = `${Math.round(weather_data.main.temp - 273.15 - 3)}°C / ${Math.round(weather_data.main.temp - 273.15+9)}°C`;



    // icons changing
    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "icons/cloudy-icon.png  ";
            break;
        case 'Smoke':
            weather_img.src = "icons/smoke.png";
            break;
        case 'Clear':
            weather_img.src = "icons/clearsky-icon.png";
            break;
        case 'Rain':
            weather_img.src = "icons/rainy-icon.png";
            break;
        case 'Drizzle':
            weather_img.src = "icons/drizzle-icon.png";
            break;
        case 'Mist':
            weather_img.src = "icons/mist-icon.png";
            break;
        case 'Haze':
            weather_img.src = "icons/haze-icon.png";
            break;
        case 'Snow':
            weather_img.src = "icons/snow-icon.png";
            break;
    }
    
    setBackgroundImage(weather_data.weather[0].main);  // changes background

    console.log(weather_data); 
}

// Load default city weather on page load
checkWeather(default_city);

// Load weather for the city entered in the input box when the search button is clicked
searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});
    
inputBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkWeather(inputBox.value);
        }
    });
