import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { convertMs } from './utils/convertMs';
import { addLeadingZero } from './utils/addLeadingZero';


const calendar = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button');
const seconds = document.querySelector('[data-seconds]');
const minutes = document.querySelector('[data-minutes]');
const hours = document.querySelector('[data-hours]');
const days = document.querySelector('[data-days]');



btnStart.setAttribute();




const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates);
    btnStart.removeAttribute('disable');
    if (selectedDates[0] < Date.now()) {
      Notify.failure(`Виберіть дату в майбутньому!`);
      btnStart.setAttribute('disabled', true);
    }

    btnStart.addEventListener('click', () => {
      const deadLine = selectedDates[0].getTime();
      let timer = null;
      function downTimer() {
        const dataDiff = convertMs(deadLine - Data.now());
        const { days, hours, minutes, seconds } = dataDiff;
        
        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
          clearInterval(timer);
          btnStart.setAttribute('disabled', false);
          calendar.setAttribute('disabled', false);
        }

        const timerS = addLeadingZero(seconds);
        const timerM = addLeadingZero(minutes);
        const timerH = addLeadingZero(hours);
        const timerD = addLeadingZero(days);


        seconds.innerHTML = timerS;
        minutes.innerHTML = timerM;
        hours.innerHTML = timerH;
        days.innerHTML = timerD;
      }
      downTimer();
      timer = setInterval(downTimer, 1000);
    });
  },
};
const fp = flatpickr(calendarInput, options);