import React from 'react';
import { Alert } from 'reactstrap';
import toast from 'toasted-notes';

// NOTE: untuk mengatasi api token
export function clearToken() {
  window.localStorage.removeItem('token');
}
export function saveToken(token) {
  window.localStorage.setItem('token', token);
}
export function getToken() {
  return window.localStorage.getItem('token');
}

// NOTE: untuk membuat format mata uang
export function formatMoney(amount) {
  return new Intl.NumberFormat('id').format(amount);
}

// NOTE: untuk menghendle error
// https://github.com/axios/axios#handling-errors
export function handleError(axiosError) {
  if (axiosError.response) {
    const message = axiosError.response.data.message;

    toast.notify(({ onClose }) => (
      <Alert color="danger" toggle={onClose}>
        {message}
      </Alert>
    ));

    // validation error
    if (axiosError.response.status === 422) {
      const validationErrors = axiosError.response.data.errors;
      Object.keys(validationErrors).forEach(key => {
        toast.notify(({ onClose }) => (
          <Alert color="danger" toggle={onClose}>
            {validationErrors[key].join('\n')}
          </Alert>
        ));
      });
    }
  } else {
    toast.notify(({ onClose }) => (
      <Alert color="danger" toggle={onClose}>
        Terjadi kesalahan, silahkan coba lagi
      </Alert>
    ));
  }
}
