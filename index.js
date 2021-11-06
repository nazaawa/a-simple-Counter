var number = 0;
var counter = document.querySelectorAll(".counter");
var text = document.getElementById("text");
var reset = document.getElementById("reset");
var increase = document.getElementById("increase");

var decrease = document.getElementById("down");

text.textContent = number;
counter.forEach((b) => {
  b.addEventListener("click", (e) => {
    number > 0 ? (text.style.color = "green") : (text.style.color = "red");
    switch (e.target.id) {
      case "down":
        number--;
        text.textContent = number;
        decrease.classList.add("show");
        increase.classList.remove("show");
        reset.classList.remove("show");
        break;
      case "increase":
        number++;
        text.textContent = number;
        increase.classList.add("show");
        decrease.classList.remove("show");
        reset.classList.remove("show");
        break;
      case "reset":
        number = 0;
        text.textContent = number;
        decrease.classList.remove("show");
        increase.classList.remove("show");
        reset.classList.add("show");
        text.style.color = "grey";
    }
  });
});
