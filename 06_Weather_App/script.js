const apiKey = "4bf12d577895462c93cd2d7c509662fd";

const searchBtn = document.querySelector(".search-btn");
const lastSearched = document.querySelector(".last-searched");
const searchBox = document.querySelector(".search-box");

const cityName = document.querySelector(".city-name");
const temp = document.getElementById("temp");
const timeDisplay = document.querySelector(".time-detail");
const weatherCondition = document.querySelector(".weather-condition");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const windDirection = document.querySelector(".wind-direction");

const validateCity = () => {
  let city = searchBox.value.trim();
  if (city == "") return;
  city = city.charAt(0).toUpperCase() + city.slice(1);
  return city;
};

const getData = async (city) => {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  let response = await fetch(apiUrl);
  let data = await response.json();
  cityName.textContent = city;
  temp.innerHTML = `${data.main.temp}<span>&deg;C</span>`;
  weatherCondition.textContent = data.weather[0].main;
  humidity.innerHTML = `<b>Humidity:</b> ${data.main.humidity} %`;
  windSpeed.innerHTML = `<b>Wind Speed:</b> ${data.wind.speed} m/s`;
  windDirection.innerHTML = `<b>Wind Direction:</b> ${data.wind.deg} &deg`;

  setInterval(() => {
    let dateAndTime = new Date();
    let utcTime =
      dateAndTime.getTime() + dateAndTime.getTimezoneOffset() * 60000;
    let cityTime = new Date(utcTime + data.timezone * 1000);
    let time = cityTime.toLocaleTimeString();
    let date = cityTime.toDateString();

    // Displaying Date and Time
    timeDisplay.innerHTML = `${time} </br>${date}`;
  }, 1000);
};

const searchHistory = () => {
  const city = validateCity();
  let li = document.createElement("li");
  li.innerHTML = `<p>${city}</p><i class="fa-solid fa-delete-left"></i>`;
  lastSearched.prepend(li);
  li.querySelector("p").addEventListener("click", () => getData(city));
  li.querySelector("i").addEventListener("click", () => {
    li.remove();
  });
  searchBox.value = "";
};

searchBtn.addEventListener("click", () => {
  const city = validateCity();
  getData(city);
  searchHistory();
});

searchBox.addEventListener("keyup", (e) => {
  const city = validateCity();
  if (e.key == "Enter") {
    getData(city);
    searchHistory();
  }
});
