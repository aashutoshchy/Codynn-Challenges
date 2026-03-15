let themeBtn = document.querySelector(".color-mode");
let body = document.querySelector("body");
let i = document.querySelectorAll("i");

let whiteTheme = true;

themeBtn.addEventListener("click", () => {
  if (whiteTheme) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    i[1].style.color = "white";
    i[0].style.display = "none";
    i[1].style.display = "block";
    whiteTheme = false;
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    i[0].style.color = "black";
    i[1].style.display = "none";
    i[0].style.display = "block";
    whiteTheme = true;
  }
});
