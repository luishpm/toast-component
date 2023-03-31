import React, {useState} from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from "../Toast";
import {AlertOctagon, AlertTriangle, CheckCircle, Info} from "react-feather";

const VARIANT_OPTIONS = [{name: 'notice', icon: Info},
  {name: 'warning', icon: AlertTriangle}, {name: 'success', icon: CheckCircle},
  {name: 'error', icon: AlertOctagon},];

function ToastPlayground() {
  const [message, setMessage] = useState('')
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0])
  const [showToast, setShowToast] = useState(false)

  function closeToast() {
    console.log("Cerrando")
    setShowToast(false)
  }

  return (<div className={styles.wrapper}>
    <header>
      <img alt="Cute toast mascot" src="/toast.png"/>
      <h1>Toast Playground</h1>
    </header>



    {showToast && <Toast icon={variant.icon}
                         name={variant.name}
                         onClose={closeToast}
    >{message}</Toast>}

    <div className={styles.controlsWrapper}>
      <div className={styles.row}>
        <label
            htmlFor="message"
            className={styles.label}
            style={{alignSelf: 'baseline'}}
        >
          Message
        </label>
        <div className={styles.inputWrapper}>
              <textarea id="message"
                        name="message"
                        className={styles.messageInput}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}/>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Variant</div>
        <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
        >
          {VARIANT_OPTIONS.map(option => (
              <label htmlFor={`variant-${option.name}`} key={option.name}>
                <input
                    id={`variant-${option.name}`}
                    type="radio"
                    name="variant"
                    checked={variant.name === option.name}
                    onChange={() => setVariant(option)}
                    value={option.name}
                />
                {option.name}
              </label>))}

        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}/>
        <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
        >
          <Button onClick={() => setShowToast(true)}>Pop Toast!</Button>
        </div>
      </div>
    </div>
  </div>);
}

export default ToastPlayground;
