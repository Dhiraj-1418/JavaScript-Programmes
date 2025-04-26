const apiKey = "2d40facc9039eae4c4104d953a431407"
const temp = document.getElementById("temp")
const intro = document.getElementById("intro")
const cityName = document.getElementById("cityName")
const humidity = document.getElementById("humidity")
const windSpeed = document.getElementById("windSpeed")
const inputField = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");


async function weatherCall (cityPara) {

    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="+cityPara+"&appid=2d40facc9039eae4c4104d953a431407"
    const response = await fetch(apiUrl);
    let data = await response.json()
    cityName.innerHTML = data.name;
    temp.innerHTML = "Temperature: " + Math.round(data.main.temp) + " °C";
    humidity.innerHTML = "Humidity :" + data.main.humidity + "%";
    windSpeed.innerHTML = "Wind Speed : " + data.wind.speed + "m/s";


}

searchButton.addEventListener("click", function () {

    const value = inputField.value.trim();

    if (value == "" || null) {
        alert("Something went wrong. Please try again later.");
    }
    else {
       
        weatherCall(value);
        intro.innerHTML = "";
        
    }
});
