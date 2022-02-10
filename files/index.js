const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
const load = document.querySelector(".loading-text");
const background = document.querySelector(".bg");
let count = 0;
const interval = setInterval(() => {
  load.innerHTML = count + "%";
  count++;
  if (count > 100) clearInterval(interval);
  background.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`;
    load.style.opacity = scale(count, 0, 100, 1, 0);
}, 40);
