import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { convertMs } from './utils/convertMs';
import { addLeadingZero } from './utils/addLeadingZero';


const calendar = document.querySelector();
const btnStart = document.querySelector();
const seconds = document.querySelector();
const minutes = document.querySelector();
const hours = document.querySelector();
const days = document.querySelector();



btnStart.setAttribute();




const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};