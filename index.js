var number = 0;
var counter = document.querySelectorAll(".counter");
var text = document.getElementById("text");
var reset = document.getElementById("reset");
var increase = document.getElementById("increase");

var decrease = document.getElementById("down");

/* increase.addEventListener("click", () => {
  number++;
  text.textContent = number;
  increase.classList.add("show");
});

decrease.addEventListener("click", () => {
  number--;
  text.textContent = number;
  decrease.classList.add("show");
});
reset.addEventListener("click", () => {
  number = 0;
  text.textContent = number;
  reset.classList.add("show");
}); */

counter.forEach((b) => {
  b.addEventListener("click", (e) => {
    console.log("cool");
    switch (e.target.id) {
      case "down":
        number--;
        text.textContent = number;
        decrease.classList.add("show");
        break;
      case "increase":
        number++;
        text.textContent = number;
        increase.classList.add("show");
        break;
      case "reset":
        number = 0;
        text.textContent = number;
        reset.classList.add("show");
    }
  });
});
