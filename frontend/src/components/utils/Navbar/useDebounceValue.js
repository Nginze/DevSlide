import { useState, useEffect } from "react";

const useDebounceValue = (value, time = 250) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, time);
    return () => {
      clearTimeout(timer);
    };
  }, [value, time]);
  return debounceValue;
};

export default useDebounceValue;
