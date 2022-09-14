import  flatpickr  from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';



import { convertMs } from './utils/convertMs';
import { addLeadingZero } from './utils/addLeadingZero';


const calendarInput = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

buttonStart.setAttribute('disabled', true);





const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    buttonStart.removeAttribute('disabled');
    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future');
      buttonStart.setAttribute('disabled', true);
    }


    buttonStart.addEventListener('click', () => {
      const deadline = selectedDates[0].getTime();
      let timerId = null;


      function countDownTimer() {
        const dateDifference = convertMs(deadline - Date.now());
        const { days, hours, minutes, seconds } = dateDifference;
        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
          clearInterval(timerId);
          buttonStart.setAttribute('disabled', false);
          calendarInput.setAttribute('disabled', false);
        }

        const timerDays = addLeadingZero(String(days));
        const timerHours = addLeadingZero(String(hours));
        const timerMinutes = addLeadingZero(String(minutes));
        const timerSeconds = addLeadingZero(String(seconds));
        dataDays.innerHTML = timerDays;
        dataHours.innerHTML = timerHours;
        dataMinutes.innerHTML = timerMinutes;
        dataSeconds.innerHTML = timerSeconds;
      }


      countDownTimer();
      timerId = setInterval(countDownTimer, 1000);
    });
  },
};

const fp = flatpickr(calendarInput, options);