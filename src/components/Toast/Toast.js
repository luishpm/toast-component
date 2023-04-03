import React from 'react';
import {
  X
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import {ToastContext} from "../ToastProvider";

function Toast({toastId, variant, icon: Icon , children}) {
  const toastContext = React.useContext(ToastContext);
  return (
      <div className={`${styles.toast} ${styles[variant]}`}>
        <div className={styles.iconContainer}>
          <Icon size={24}/>
        </div>
        <p className={styles.content}>
          <VisuallyHidden>{variant} -</VisuallyHidden>
          {children}
        </p>
        <button className={styles.closeButton} aria-label="Dismiss message"
                aria-live="off"
                onClick={() => toastContext.closeToast(toastId)}>
          <X size={24}/>
        </button>
      </div>
  );
}

export default Toast;
