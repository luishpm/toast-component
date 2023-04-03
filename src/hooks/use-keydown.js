import {useEffect} from "react";

function useKeydown(key, callback) {
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === key) {
        callback(event)
      }
    }
    document.addEventListener('keydown', handleEscapeKey)

    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [callback, key])
}

export default useKeydown