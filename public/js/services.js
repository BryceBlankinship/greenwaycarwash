let Grid = document.querySelectorAll(".grid");

Grid.forEach((Each) => {
  Each.addEventListener("mouseover", (e) => {
    let span = e.target.querySelector("span");
    span.classList.add("active");
  });
  Each.addEventListener("mouseleave", (e) => {
    let span = e.target.querySelector("span");
    span.classList.remove("active");
  });

  Each.addEventListener("touchstart", (e) => {
    let span = e.target.querySelector("span");
    span.classList.add("active");
  });
  Each.addEventListener("touchend", (e) => {
    let span = e.target.querySelector("span");
    span.classList.remove("active");
  });
});
