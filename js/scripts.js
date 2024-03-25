const header = document.querySelector("header");
const featureSection = document.querySelector("#featureSection");

document.querySelector("main").addEventListener("scroll", (e) => {
  console.log(e.target.scrollTop);
  if (e.target.scrollTop > 600 && e.target.scrollTop < 2900) {
    header.classList.add("active");
    featureSection.classList.add("active");
  } else {
    header.classList.remove("active");
    featureSection.classList.remove("active");
  }
});

window.addEventListener("scroll", function () {
  var box = document.querySelector("#featureSection");
  var position = box.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    box.style.animationPlayState = "running";
  } else {
    box.style.animationPlayState = "paused";
  }
});
