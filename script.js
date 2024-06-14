const city = document.querySelector("#searchBox");
const submit = document.querySelector("#submit");
const img = document.querySelector("#img");
const temp = document.querySelector("#temp");
const description = document.querySelector("#description");
const wind = document.querySelector("#wind");
const humidity = document.querySelector("#humidity");
const cityName = document.querySelector("#city");
const contain = document.querySelector(".container");
const enter = document.querySelector(".enter");
const invalid = document.querySelector(".invalid");

function getdata(city) {
  if (city.trim() === "") {
    enter.style.display = "block";
            invalid.style.display = "none";
    contain.style.display = "none";
    return;
  }
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" +
      city +
      "&appid=651b89d0f4d7b7e2db8d110d20cdd51b"
  )
    .then((reponse) => {
      if (!reponse.ok) {
        contain.style.display = "none";
        invalid.style.display = "block";
      } else {
        contain.style.display = "block";
        invalid.style.display = "none";
        enter.style.display = "none";
      }
      return reponse.json();
    })
    .then((data) => {
      cityName.innerHTML = data.name;
      temp.innerHTML = Math.round(data.main.temp) + "°c";
      description.innerHTML = data.weather[0].description;
      wind.innerHTML = Math.round(data.wind.speed) + "km/h";
      humidity.innerHTML = data.main.humidity + "%";
      const iconcode = data.weather[0].icon;
      const iconurl =
        "https://openweathermap.org/img/wn/" + iconcode + "@2x.png";
      img.src = iconurl;
      console.log(data);
    });
}
submit.addEventListener("click", (e) => {
  e.preventDefault();

  getdata(city.value);
});
