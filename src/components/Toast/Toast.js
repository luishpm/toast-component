import React from 'react';
import {
  X
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

function Toast({name, icon: Icon, children, onClose}) {
  return (
      <div className={`${styles.toast} ${styles[name]}`}>
        <div className={styles.iconContainer}>
          <Icon size={24}/>
        </div>
        <p className={styles.content}>
          {children}
        </p>
        <button className={styles.closeButton} onClick={() => onClose()}>
          <X size={24}/>
          <VisuallyHidden>Dismiss message</VisuallyHidden>
        </button>
      </div>
  );
}

export default Toast;
