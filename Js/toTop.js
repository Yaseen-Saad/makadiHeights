let toTop = document.querySelector(".toTop ");
toTop.onclick = () => scrollTo({ top: 0, behavior: "smooth" });

window.onscroll = () => {
  if (scrollY >= 1000 || pageYOffset >= 1000) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
};
