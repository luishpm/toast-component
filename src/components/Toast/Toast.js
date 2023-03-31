import React from 'react';
import {
  X
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

function Toast({toastId, variant, icon: Icon, children, onCloseToast}) {
  return (
      <div className={`${styles.toast} ${styles[variant]}`}>
        <div className={styles.iconContainer}>
          <Icon size={24}/>
        </div>
        <p className={styles.content}>
          {children}
        </p>
        <button className={styles.closeButton} onClick={() => onCloseToast(toastId)}>
          <X size={24}/>
          <VisuallyHidden>Dismiss message</VisuallyHidden>
        </button>
      </div>
  );
}

export default Toast;
