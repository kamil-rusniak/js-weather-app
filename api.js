class Weather {
  constructor(city) {
    this.apiKey = "ecbed6d5b5f8d5d52badcfb92473c980";
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`
    );

    const data = await response.json();
    return data;
  }

  changeLocation(city) {
    this.city = city;
  }
}

class Forecast {
  constructor(lat, lon) {
    this.apiKey = "ecbed6d5b5f8d5d52badcfb92473c980";
    this.latitude = lat;
    this.longitude = lon;
  }

  async getForecast() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&exclude=current,hourly,minutely,alerts&appid=${this.apiKey}&units=metric`
    );

    const data = await response.json();
    return data;
  }

 
}
