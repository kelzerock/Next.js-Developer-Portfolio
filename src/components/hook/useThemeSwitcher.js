import { themeConf } from "@/config/themeConf";
import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = `(prefers-color-scheme: ${themeConf.dark})`;
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      console.log({userPref})
      if (userPref) {
        let check =
          userPref === themeConf.dark ? themeConf.dark : themeConf.light;
        setMode(check);
        if (check === themeConf.dark) {
          console.log('hi')
          document.documentElement.classList.add(themeConf.dark);
        } else {
          console.log('del')
          document.documentElement.classList.remove(themeConf.dark);
        }
      } else {
        let check = mediaQuery.matches ? themeConf.dark : themeConf.light;
        setMode(check);
        
        console.log('hi++')
        if (check === themeConf.dark) {
          document.documentElement.classList.add(themeConf.dark);
        } else {
          document.documentElement.classList.remove(themeConf.dark);
        }
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    console.log({mode, text: 'mode'})
    if (mode === themeConf.dark) {
      window.localStorage.setItem("theme", themeConf.dark);
      document.documentElement.classList.add(themeConf.dark);
    } 
    if(mode === themeConf.light) {
      window.localStorage.setItem("theme", themeConf.light);
      document.documentElement.classList.remove(themeConf.dark);
    }
  }, [mode]);

  return [mode, setMode]
};

export default useThemeSwitcher;
