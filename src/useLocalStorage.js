import { useState, useEffect } from "react";
export function useLocalStorage(initialState, key) {
  const [value, setvalue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.storedValue : initialState;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setvalue];
}
