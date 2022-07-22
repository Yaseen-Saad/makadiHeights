let lists = document.querySelectorAll(".options-sect div");
let list = document.querySelectorAll(".custom .defult");
list.forEach((ele) => {
  ele.onclick = (e) => {
    let listEle = "";
    let listss = "";
    if (e.target.tagName === "P" || e.target.id == "qwwq") {
      listEle = e.target.parentNode.parentNode;
    } else if (e.target.tagName === "SPAN") {
      listEle = e.target.parentNode.parentNode.parentNode;
    } else {
      listEle = e.target.parentNode;
    }
    console.log(listEle);
    console.log(e.target);
    listss = document.querySelector(`.${listEle.classList[0]} .options-sect`);
    listss.classList.toggle("active");
    let reverse = document.querySelector(
      `.${listss.parentNode.classList[0]} .defult span:last-child`
    );
    reverse.classList.toggle("active");
  };
  lists.forEach((ele) => {
    ele.onclick = (e) => {
      let reverse = document.querySelector(
        `.${e.target.parentNode.parentNode.classList[0]} .defult span:last-child`
      );
      reverse.classList.toggle("active");
      lists.forEach((elee) => {
        if (elee.parentNode === e.target.parentNode) {
          elee.classList.remove("active");
        }
      });
      e.target.parentNode.parentNode.children[0].children[0].innerHTML =
        e.target.innerHTML;
      e.target.classList.toggle("active");
      ele.parentNode.classList.remove("active");
    };
  });
});
let search = document.querySelector(".custom > span:last-child");
search.onclick = () => location.reload();
let searchIcon = document.querySelector("#search");
let searchBar = document.querySelector(".search-nav");
let close = document.querySelector(".search-nav  .toggler.active");
console.log(searchIcon);
searchIcon.onclick = () => {
  searchBar.classList.toggle("active");
  close.onclick = () => {
    searchBar.classList.toggle("active");
  };
};
