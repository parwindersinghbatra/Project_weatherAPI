const searchWeather = document.querySelector(".data_container button");
const searchValue = document.getElementById("weather_data");
const temp = document.getElementById('temp')
const cityName = document.getElementById('cityName')
const humidity = document.getElementById('humidity')
const windspeed = document.getElementById('windspeed')
const imagesrc = document.getElementById('imagesrc')

weatherAPIKey = "06d4feb810304d4990d175828241902";



const weatherData = async () => {
  const weatherAPI = `http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${searchValue.value}&aqi=yes`;
  try {
    const response = await fetch(weatherAPI)
    const data = await response.json();

    temp.innerHTML = data.current.temp_c + " °C"
    imagesrc.src= data.current.condition.icon
    cityName.innerHTML = data.location.name
    humidity.innerHTML = "Humidity "+data.current.humidity
    windspeed.innerHTML = "Wind Speed " +data.current.wind_kph
  } catch (error) {
    console.log("Not Found", error);
  }
};

searchWeather.addEventListener("click", weatherData);
