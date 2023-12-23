

let weather = {
    apiKey: "226f5e602c6671235d6ae3aabeebacb7",
    fetchWeather: function (city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        var {name} = data;
        var { temp, humidity } = data.main;
        var { speed } = data.wind;
        var { icon } = data.weather[0];
        console.log(name,icon,temp,humidity,speed);

        var kelvin = temp;
        var celcius = kelvin - 273;
        let fahrenheit = celcius * (9/5) + 32;
        fahrenheit = Math.floor(fahrenheit);

        document.querySelector("#city").innerText = "Weather in " + name + ":";
        document.querySelector("#temperature").innerText = "Temp: " + fahrenheit + "°F";
        document.querySelector("#humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector("#wind").innerText = "Wind Speed: " + speed + " MPH";
        document.querySelector("#icon").src ="https://openweathermap.org/img/wn/" + icon + "01n@2x.png";
    },

    search: function () {
        this.fetchWeather(document.querySelector("#userInput").value);
    }
};

document.querySelector("#searchBtn").addEventListener("click", function () {
    weather.search();

    
})