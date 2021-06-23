const appUI = new UI();
const storage = new Storage();
const storageLocation = storage.getLocation();
const currentWeather = new Weather(storageLocation.city);
let currentForecast;

document.addEventListener("DOMContentLoaded", getWeather)

function getWeather() {
  currentWeather
    .getWeather()
    .then((result) => {
      appUI.displayWeather(result);
      // console.log(result);
      const lat = result.coord.lat;
      const lon = result.coord.lon;
      currentForecast = new Forecast(lat, lon);
      getForecast();
    })
    .catch((err) => {
      console.log(err);
    });
}

function getForecast() {
  currentForecast
    .getForecast()
    .then((result) => {
      appUI.displayForecast(result);
      // console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}


document.getElementById("location-form").addEventListener('submit', (e) => {
  e.preventDefault();
  const city = document.getElementById("search-input").value;
  currentWeather.changeLocation(city);
  storage.changeLocation(city);
  getWeather();
})
