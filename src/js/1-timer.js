// const flatpickr = require('flatpickr');
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const startButton = document.querySelector((type = 'button'));
const form = document.querySelector(input[(type = 'text')]);

flatpickr(selector, options) {
    const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
            console.log(selectedDates[0]);
        },
    }
};