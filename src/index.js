function formatDateAndTime() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date();
  let day = days[now.getDay()];
  let hour = now.getHours();
  let min = now.getMinutes();

  if (min < 10) {
    min = `0${min}`;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }

  let dayTimeFormat = `${day} ${hour}:${min}`;
  return dayTimeFormat;
}

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".search-input");
  let city = document.querySelector(".current-city");
  city.innerHTML = cityInput.value;
}

let currentDateAndTime = document.querySelector("#current-date");
currentDateAndTime.innerHTML = formatDateAndTime();

let searchButton = document.querySelector("form");
searchButton.addEventListener("submit", searchCity);
