import "../styles/globals.css";
import type {AppProps} from "next/app";
import {useEffect} from "react";
import {appWithTranslation, useTranslation} from "next-i18next";
import {LanguageContextProvider} from "@lang";

function App({Component, pageProps}: AppProps) {
  const {i18n} = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n]);

  return (
    <LanguageContextProvider>
      <Component {...pageProps} />
    </LanguageContextProvider>
  );
}

export default appWithTranslation(App);
