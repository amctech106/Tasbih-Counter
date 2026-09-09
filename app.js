let counterIncreament = document.querySelector(".countPlus");
let counterDecrement = document.querySelector(".counterMinus");
let referesh = document.querySelector(".reset");
let tCounter = document.querySelector(".tabsihCounter");
let count = Number(localStorage.getItem("counter")) || 0;
tCounter.textContent = count;

counterIncreament.addEventListener("click", function () {
  count++;
  tCounter.textContent = count;
  localStorage.setItem("counter", count)
});

counterDecrement.addEventListener("click",function(){
     if (count > 0) {
        count--;
        tCounter.textContent = count;
        localStorage.setItem("counter",count)
    }
})

referesh.addEventListener("click", function () {
  tCounter.textContent = 0;
  count = 0;

  localStorage.removeItem("counter")
});
