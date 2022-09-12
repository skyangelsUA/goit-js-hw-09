
import { getRandomHexColor } from "./utils/getRandomHexColor";

const bodyColor = document.querySelector("body");


const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

let log = null;

function goInt() {
  log = setInterval(() => { bodyColor.style.backgroundColor = getRandomHexColor(); },
      1000,
      1000,
  );
    btnStart.setAttribute('disabled', true);
    console.log(log)
};


function clearInt() {
    clearInterval(log);
    btnStart.removeAttribute("disabled");
};

btnStart.addEventListener('click', goInt);
btnStop.addEventListener('click', clearInt);

