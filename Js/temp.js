let temp = "",
  tYA = 100,
  tempVal = document.querySelector(".temp");
fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=hurghada&appid=a8c9a7b0e28fab4b37a63948ae6c984f"
)
  .then((response) => response.json())
  .then((data) => {
    temp = parseInt(data.main.temp - 273.15) + "°";
    tempVal.innerHTML = temp;
  });
