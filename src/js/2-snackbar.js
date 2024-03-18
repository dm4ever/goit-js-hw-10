import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = event.currentTarget.elements.delay.value;
  const stateRadio = event.currentTarget.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateRadio === 'fulfilled') {
        resolve();
      } else {
        reject();
      }
    }, delay);
    form.reset();
  });

  promise.then(
    resolve => {
      iziToast.show({
        titleColor: 'green',
        message: `✅ Fulfilled promise in ${delay}ms`,
        messageColor: 'green',
        color: 'green',
        position: 'topRight',
      });
    },
    reject => {
      iziToast.show({
        // title: 'ERROR:',
        titleColor: 'red',
        message: `❌ Rejected promise in ${delay}ms`,
        messageColor: 'red',
        color: 'red',
        position: 'topRight',
      });
    }
  );
});
