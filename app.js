let counter = document.querySelector(".countPlus");
let referesh = document.querySelector(".reset");
let tCounter = document.querySelector(".tabsihCounter");
let count = 0;

counter.addEventListener("click", function () {
  count++;
  tCounter.textContent = count;
});

referesh.addEventListener("click", function () {
  tCounter.textContent = 0;
  count = 0;
});
