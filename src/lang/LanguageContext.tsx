import {useTranslation} from "next-i18next";
import React, {useState, useEffect} from "react";

export const LanguageContext = React.createContext({
  directionHandler: (dir: any) => {},
  direction: "rtl",
});

export const LanguageContextProvider = ({children}: any) => {
  const NO_LOCAL_STORAGE = typeof window === "undefined" || !localStorage,
    LOCAL_STORAGE = !NO_LOCAL_STORAGE;
  const storedDirection =
    !NO_LOCAL_STORAGE && localStorage.getItem("direction");
  const currentDirection = storedDirection === "ltr" ? "ltr" : "rtl";
  const [direction, setDirection] = useState("rtl");
  const {i18n} = useTranslation();

  useEffect(() => {
    localStorage.setItem("direction", i18n.dir());
    setDirection(i18n.dir());
  }, [i18n]);
  //handles rtl/ltr and set it in localStorage
  const directionHandler = (dir: string) => {
    // setDirection(dir);
    // localStorage.setItem("direction", dir);
  };
  return (
    <LanguageContext.Provider value={{direction, directionHandler}}>
      {children}
    </LanguageContext.Provider>
  );
};
