import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector(".form");

form.addEventListener("submit", submit);

function submit(event) {
  event.preventDefault();
  const data = {
    delay: Number(form.elements.delay.value),
    step: Number(form.elements.step.value),
    amount: Number(form.elements.amount.value),
  };
  console.log(data);
  promiseNotify(data);
  event.currentTarget.reset();
}

function promiseNotify({ delay, step, amount }) {
  for (let i = 1; i <= amount; i += 1) {
    console.log(delay, step, amount, i);
    createPromise(i, delay)
      .then(({ position, delay }) => {
      Notify.success(`Виконаний проміс ${position} за ${delay} мс`);
      })
    .catch(({ position, delay }) => {
        Notify.failure(`Завалений проміс ${position} за ${delay}мс`);
      });
    delay += step;
  }
}




function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}
