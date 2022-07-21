let preLoad = document.querySelector(".preLoad"),
  paragraphs = document.querySelector(".texts"),
  temp = "",
  date = 0,
  tYA = 100,
  tempVal = document.querySelector(".temp"),
  int = setInterval(() => {
    for (let i = 0; i < paragraphs.children.length; i++) {
      paragraphs.children[i].style.transform = `translateY(-${tYA}%)`;
    }
    tYA += 100;
  }, 1000);
setTimeout(() => {
  preLoad.style.top = "-100%";
  clearInterval[0];
  clearInterval(int);
}, 6000);
let timzone = 3600;
let sunise = 1642226661;
fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=hurghada&appid=a8c9a7b0e28fab4b37a63948ae6c984f"
)
  .then((response) => response.json())
  .then((data) => {
    temp = parseInt(data.main.temp - 273.15) + "°";
    date = data.dt;
    tempVal.innerHTML = temp;
  });
let timestatus = document.querySelector(".timestatus");
function isDay() {
  return (
    ((date + 60000 * new Date().getTimezoneOffset() + 21600000) % 86400000) /
      3600000 >
    12
  );
}
if (!isDay()) {
  timestatus.innerHTML = "🌙";
} else {
  timestatus.innerHTML = "☀️";
}
