import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage.js";

export const useDarkMode = (dark) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", dark);

  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode === true) {
      body.className = "dark-mode";
    } else {
      body.className = "";
    }
  }, [darkMode]);
  return [darkMode, setDarkMode];
};

export default useDarkMode;
