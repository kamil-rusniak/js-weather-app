class UI {
  constructor() {
    this.currentWeatherIcon = document.getElementById("current-weather-icon");
    this.locationText = document.getElementById("location-text");
    this.country = document.getElementById("country-code");
    this.date = document.getElementById("date-text");
    this.currentTemperatureText = document.getElementById("current-temperature-text");
    this.currentWeatherDescription = document.getElementById("current-weather-description");
    this.rainChance = document.getElementById("rain-chance");
    this.windSpeed = document.getElementById("wind-speed");

    this.firstForecastDate = document.getElementById("first-day-name");
    this.firstForecastTemperature = document.getElementById("first-day-temperature");
    this.firstForecastIcon = document.getElementById("first-day-icon");

    this.secondForecastDate = document.getElementById("second-day-name");
    this.secondForecastTemperature = document.getElementById("second-day-temperature");
    this.secondForecastIcon = document.getElementById("second-day-icon");

    this.thirdForecastDate = document.getElementById("third-day-name");
    this.thirdForecastTemperature = document.getElementById("third-day-temperature");
    this.thirdForecastIcon = document.getElementById("third-day-icon");
  }

  displayWeather(weather) {
    this.locationText.textContent = weather.name;
    this.country.textContent = weather.sys.country;
    this.currentTemperatureText.innerHTML = `${weather.main.temp}  <span>&#8451;</span>`;
    this.currentWeatherDescription.textContent = weather.weather[0].main;
    this.windSpeed.textContent = `${weather.wind.speed} km/h`;
    this.currentWeatherIcon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    // weather.dt is a unix timestamp so it needs to be converted
    const fullDate = new Date(weather.dt * 1000);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: "false",
    };
    const myDate = fullDate.toLocaleDateString("en-US", options);
    this.date.textContent = myDate;
  }

  displayForecast(forecast) {
    // openweather One Call Api has daily forecast but it takes lat & lon (not city name :(
    // user enters location
    // when calling Current Weather API by entering city name, it returns its latitude and logitute so use it in when displaying forecast
    //

    // forecast.daily[0] is current day
    this.rainChance.textContent = `${forecast.daily[0].pop}%`;

    const firstForecast = forecast.daily[1];
    const secondForecast = forecast.daily[2];
    const thirdForecast = forecast.daily[3];

    // &#8451; is for showing celsius degree sign
    this.firstForecastTemperature.innerHTML = `${firstForecast.temp.day}  <span>&#8451;</span>`;
    this.secondForecastTemperature.innerHTML = `${secondForecast.temp.day}  <span>&#8451;</span>`;
    this.thirdForecastTemperature.innerHTML = `${thirdForecast.temp.day}  <span>&#8451;</span>`;

    const options = {
      weekday: "long",
    };

    const firstDate = new Date(firstForecast.dt * 1000);
    const convertedFirstDate = firstDate.toLocaleDateString("en-US", options);
    this.firstForecastDate.textContent = convertedFirstDate;
    this.firstForecastIcon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${firstForecast.weather[0].icon}.png`
    );

    const secondDate = new Date(secondForecast.dt * 1000);
    const convertedSecondDate = secondDate.toLocaleDateString("en-US", options);
    this.secondForecastDate.textContent = convertedSecondDate;
    this.secondForecastIcon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${secondForecast.weather[0].icon}.png`
    );

    const thirdDate = new Date(thirdForecast.dt * 1000);
    const convertedThirdDate = thirdDate.toLocaleDateString("en-US", options);
    this.thirdForecastDate.textContent = convertedThirdDate;
    this.thirdForecastIcon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${thirdForecast.weather[0].icon}.png`
    );
  }
}
