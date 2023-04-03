import React, {useState} from "react";
import ToastShelf from "../ToastShelf";

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = useState([])

  const closeToast = React.useCallback((idToRemove) => {
    const newToasts = toasts.filter((toast) => toast.id !== idToRemove)
    setToasts([newToasts])
  }, [toasts])

  const addToast = React.useCallback((toast) => {
    setToasts([...toasts, {
      ...toast,
      id: crypto.randomUUID(),
    }])
  }, [toasts])

  const removeAllToasts = React.useCallback(() => {
    setToasts([])
  },[])

  return (
      <ToastContext.Provider value={{toasts, addToast, closeToast, removeAllToasts}}>
        <ToastShelf />
        {children}
      </ToastContext.Provider>
  )
}

export default ToastProvider;
