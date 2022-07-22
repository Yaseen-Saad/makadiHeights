let timestatus = document.querySelector(".timestatus"),
  date = 0,
  timzone = 0,
  sunise = 0,
  root = document.querySelector(":root");

function IsDay(curr, rise, set) {
  if (curr > rise && curr < set) {
    timestatus.children[0].src = "images/sunny.png";
    root.style.setProperty("--Mod", "#233142");
    root.style.setProperty("--modrevers", "#fff");
  } else {
    timestatus.children[0].src = "images/moon.png";
    root.style.setProperty("--Mod", "#fff");
    root.style.setProperty("--modrevers", "#233142");
  }
}
fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=hurghada&appid=a8c9a7b0e28fab4b37a63948ae6c984f"
)
  .then((response) => response.json())
  .then((data) => {
    date = data.dt;
    console.log(data);
    console.log(IsDay(date, data.sys.sunrise, data.sys.sunset));
  });
