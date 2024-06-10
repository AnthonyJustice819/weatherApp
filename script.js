const city = document.querySelector("#searchBox");
const submit = document.querySelector("#submit");
const temp = document.querySelector("#temp");
const description = document.querySelector("#description");
const wind = document.querySelector("#wind");
const humidity = document.querySelector("#humidity");
const cityName = document.querySelector("#city");

function getdata(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" +
      city +
      "&appid=651b89d0f4d7b7e2db8d110d20cdd51b"
  )
    .then((reponse) => reponse.json())
    .then((data) => {
      cityName.innerHTML = data.name;
      temp.innerHTML = Math.round(data.main.temp) + "°c";
      description.innerHTML = data.weather[0].description;
      wind.innerHTML = Math.round(data.wind.speed) + "km/h";
      humidity.innerHTML = data.main.humidity + "%";

      console.log(data);
    });
}
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getdata(city.value);
});
