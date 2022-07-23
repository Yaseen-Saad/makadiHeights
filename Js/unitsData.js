window.onload = () => {
  let swiper = document.querySelector(".owl-slider-findYourHome");
  fetch("Js/unitsData.json")
    .then((response) => response.json())
    .then((data) => {
      let dataLenght = Object.keys(data).length;
      for (let i = 0; i < dataLenght; i++) {
        //Decalration
        let container = document.createElement("div"),
          item = document.createElement("div"),
          front = document.createElement("div"),
          frontFloat = document.createElement("div"),
          namee = document.createElement("p"),
          type = document.createElement("p"),
          viewMore = document.createElement("a"),
          viewMoreText1 = document.createElement("p"),
          viewMoreText2 = document.createElement("p"),
          back = document.createElement("div"),
          backFloat = document.createElement("div"),
          backimg = document.createElement("img"),
          avilable = document.createElement("p"),
          counterCont = document.createElement("div"),
          counter1 = document.createElement("div"),
          counter1Num = document.createElement("p"),
          counter1Type = document.createElement("p"),
          counter2 = document.createElement("div"),
          counter2Num = document.createElement("p"),
          counter2Type = document.createElement("p"),
          counter3 = document.createElement("div"),
          counter3Num = document.createElement("p"),
          counter3Type = document.createElement("p"),
          text = document.createElement("p"),
          imgSrc = "";
        //Adding Classes
        container.classList.add("cont");
        front.classList.add("face");
        back.classList.add("face");
        front.classList.add("front");
        back.classList.add("back");
        frontFloat.classList.add("float");
        backFloat.classList.add("float");
        counter1.classList.add("counter");
        counter2.classList.add("counter");
        counter3.classList.add("counter");
        item.classList.add("item");
        // Pend Data
        namee.innerText = data[i].name;
        type.innerHTML = data[i].type;
        viewMore.innerText = data[i].viewMore;
        backimg.src = data[i].backImg;
        avilable.innerText = data[i].avilable == true ? "Avilable" : "Sold Out";
        counter1Num.innerText = data[i].counter1Num;
        counter1Type.innerText = data[i].counter1Type;
        counter2Num.innerText = data[i].counter2Num;
        counter2Type.innerText = data[i].counter2Type;
        counter3Num.innerText = data[i].counter3Num;
        counter3Type.innerText = data[i].counter3Type;
        text.innerText = data[i].text;
        imgSrc = data[i].imgSrc;
        back.style.background = `url(${imgSrc})`;
        front.style.background = `url(${imgSrc})`;
        //Pend Elements
        back.prepend(text);
        counter1.prepend(counter1Num);
        counter1.prepend(counter1Type);
        counter2.prepend(counter2Num);
        counter2.prepend(counter2Type);
        counter3.prepend(counter3Num);
        counter3.prepend(counter3Type);
        counterCont.prepend(counter1);
        counterCont.prepend(counter2);
        counterCont.prepend(counter3);
        back.prepend(counterCont);
        backFloat.prepend(avilable);
        backFloat.prepend(backimg);
        back.prepend(backFloat);
        viewMore.prepend(viewMoreText1);
        viewMore.prepend(viewMoreText2);
        front.prepend(viewMore);
        frontFloat.prepend(type);
        frontFloat.prepend(namee);
        front.prepend(frontFloat);
        container.prepend(back);
        container.prepend(front);
        item.prepend(container);
        // swiper.prepend(item);
        $(".owl-slider-findYourHome")
          .owlCarousel()
          .trigger("add.owl.carousel", [
            jQuery('<div class="owl-item">' + item.innerHTML + "</div>"),
          ])
          .trigger("refresh.owl.carousel");
      }
    });
  setTimeout(() => {
    var cont = document.querySelectorAll(".owl-slider-findYourHome .cont");
    cont.forEach((ele) => {
      ele.onclick = () => {
        ele.classList.toggle("active");
      };
    });
  }, 2000);
};

/*<div class="cont">
        <div class="face front" style="background-image: url(images/ria_homepage_card_7ded443071.jpg);">
            <div class="float">
                <p>Topio</p>
                <p>
                    Apartments & Duplexes
                    <br>by Endless Waters
                </p>
            </div>
            <a href="#">
                <p>VIEW MORE</p>
                <p>VIEW MORE</p>
            </a>
        </div>
        <div class="face back" style="background-image: url(images/ria_homepage_card_7ded443071.jpg);">
            <div class="float">
                <img src="images/topio_logo_91d7faf0f3_7aed6d4673.png" alt="">
                <p>sold out</p>
            </div>
            <div>
                <div class="counter">
                    <p>33</p>
                    <p>APARTMENTS</p>
                </div>
                <div class="counter">
                    <p>11</p>
                    <p>CHALETS
                    </p>
                </div>
            <div class="counter">
                <p>1/4</p>
                    <p>BEDROOMS </p>
        </div>
            </div>
        <p>Apartments, duplexes and floating chalets are designed with Boho-inspired architecture that features
            serenity on every floor.</p>
    </div>
</div>*/
