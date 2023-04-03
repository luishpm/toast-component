import React, {useState} from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import {AlertOctagon, AlertTriangle, CheckCircle, Info} from "react-feather";
import {ToastContext} from "../ToastProvider";
import useKeydown from "../../hooks/use-keydown";

const VARIANT_OPTIONS = [{variant: 'notice', icon: Info},
  {variant: 'warning', icon: AlertTriangle},
  {variant: 'success', icon: CheckCircle},
  {variant: 'error', icon: AlertOctagon},];

function ToastPlayground() {
  const [message, setMessage] = useState('')
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0])
  const toastContext = React.useContext(ToastContext);

  const handleEscape = React.useCallback(() => {
    toastContext.removeAllToasts();
  }, [toastContext]);

  useKeydown('Escape', handleEscape);

  function onSubmit(e) {
    e.preventDefault();

    toastContext.addToast({
      variant: variant.variant,
      icon: variant.icon,
      text: message,
    })

    setMessage('')
    setVariant(VARIANT_OPTIONS[0])
  }

  return (<div className={styles.wrapper}>
    <header>
      <img alt="Cute toast mascot" src="/toast.png"/>
      <h1>Toast Playground</h1>
    </header>

      <form onSubmit={onSubmit}>
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
                  <label htmlFor={`variant-${option.variant}`}
                         key={option.variant}>
                    <input
                        id={`variant-${option.variant}`}
                        type="radio"
                        name="variant"
                        checked={variant.variant === option.variant}
                        onChange={() => setVariant(option)}
                        value={option.variant}
                    />
                    {option.variant}
                  </label>))}

            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}/>
            <div
                className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
  </div>);
}

export default ToastPlayground;
