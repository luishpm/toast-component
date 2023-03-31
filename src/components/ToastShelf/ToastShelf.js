import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, onCloseToast}) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast  variant={toast.variant} toastId={toast.id}  icon={toast.icon} onCloseToast={onCloseToast}>{toast.text}</Toast>
          </li>
      ))}

    </ol>
  );
}

export default ToastShelf;
