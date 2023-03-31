import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {ToastContext} from "../ToastProvider";

function ToastShelf() {
  const toastContext = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toastContext.toasts.map((toast) => (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast  variant={toast.variant} toastId={toast.id}  icon={toast.icon} >{toast.text}</Toast>
          </li>
      ))}

    </ol>
  );
}

export default ToastShelf;
