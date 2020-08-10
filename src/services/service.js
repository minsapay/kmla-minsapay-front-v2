import { boothStore } from '../stores/data';
import { studentStore } from '../stores/data';

const BACKEND_URL = 'https://api.minsapay.com';

export const getBoothData = (id, password) => {
  // fetch the booth information from database
  fetch(BACKEND_URL + '/booth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, password }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return null;
      }
    })
    .then((booth) => {
      boothStore.set(booth);
    })
    .catch((err) => {
      return null;
    });
};

export const recordPayment = (payment) => {
  // fetch the booth information from database
  fetch(BACKEND_URL + '/booth/payment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payment),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return null;
      }
    })
    .then((res) => {
      if (res) {
        boothStore.update((booth) => {
          let current = { ...booth };
          current.income = res.updatedIncome;
          current.history = res.updatedHistory;
          return current;
        });
      }
    })
    .catch((err) => {
      return null;
    });
};

export const storeStudentData = (id) => {
  fetch(BACKEND_URL + '/student/' + id)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return null;
      }
    })
    .then((student) => {
      studentStore.set(student);
    })
    .catch((err) => {
      studentStore.set(null);
    });
};
