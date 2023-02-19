document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = [].slice.call(document.querySelectorAll("img[data-src]"));
  lazyImages.forEach(function (img) {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = function () {
      img.removeAttribute("data-src");
    };
  });
});

let text = document.getElementById("text");
let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");
let header = document.getElementById("header");
let hadag = document.getElementById("hadag");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  if (window.matchMedia("(max-width: 480px)").matches) {
    // load script for small mobile devices
    // text.style.backgroundColor = "red";
    text.style.top = 100 + value * -0.4 + "%";
  } else if (window.matchMedia("(max-width: 768px)").matches) {
    // load script for medium mobile devices
    // text.style.backgroundColor = "blue";
    text.style.top = 100 + value * -0.4 + "%";
  } else {
    // load script for large mobile devices
    // text.style.backgroundColor = "green";
    text.style.top = value * -3 + "px";
  }

  header.style.top = value * 0.5 + "px";
});

let dropdownBtns = document.querySelectorAll(".dropdown-btn");
let dropdownContainers = document.querySelectorAll(".dropdown-container");

dropdownBtns.forEach((dropdownBtn, index) => {
  dropdownBtn.addEventListener("click", () => {
    dropdownContainers.forEach((container, containerIndex) => {
      if (index === containerIndex) {
        container.classList.toggle("active");
        dropdownBtn.classList.toggle("active");
      } else {
        container.classList.remove("active");
        dropdownBtns[containerIndex].classList.remove("active");
      }
    });
  });
});
