import { useTranslation } from "react-i18next";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../App";
import styles from "./index.module.css";

function About() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("uz");
  const [info, setInfo] = useState([])
  const {theme} = useContext(ThemeContext)
  useEffect(() => {
    if (localStorage.getItem("lang")) {
      i18n.changeLanguage(localStorage.getItem("lang"));
      setLang(localStorage.getItem("lang"));
    } else {
      i18n.changeLanguage("uz");
      setLang("uz");
    }
  }, []);
  return (
    <>
     <div className={styles.about}>
        <div className={styles.top}>
          <h1 className={`${theme == "light" ? styles.titlee : styles.titleeDark} ${
            styles.titlee
          }`}>{t('we')}</h1>
          <p className={`${theme == "light" ? styles.comfy : styles.comfyDark} ${
            styles.comfy
          }`}>{t('comfy')}</p>
        </div>
          <p className={`${theme == "light" ? styles.lorem : styles.loremDark} ${
            styles.lorem
          }`}>{t('desc')}</p>
     </div>
    </>
  )
}

export default About