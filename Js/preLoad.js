let preLoad = document.querySelector(".preLoad"),
  paragraphs = document.querySelector(".texts");

int = setInterval(() => {
  for (let i = 0; i < paragraphs.children.length; i++) {
    paragraphs.children[i].style.transform = `translateY(-${tYA}%)`;
  }
  tYA += 100;
}, 1500);
setTimeout(() => {
  preLoad.style.top = "-100%";
  clearInterval[0];
  clearInterval(int);
}, 4500);

// let timestatus = document.querySelector(".timestatus");
// function isDay() {
//   return (
//     ((date + 60000 * new Date().getTimezoneOffset() + 21600000) % 86400000) /
//       3600000 >
//     12
//   );
// }
// if (!isDay()) {
//   timestatus.innerHTML = "🌙";
// } else {
//   timestatus.innerHTML = "☀️";
// }
