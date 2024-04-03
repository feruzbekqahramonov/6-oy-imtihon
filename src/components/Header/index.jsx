import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";
import styles from "./index.module.css";
import dark from '../../assets/sun.png'
import buy from '../../assets/savat.png'
import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../App";

function Header() {
  const {t, i18n} = useTranslation()
  const [lang, setLang] = useState('uz')
  const dataTheme = useContext(ThemeContext)

  useEffect(() => {
   if(localStorage.getItem('lang')) {
    i18n.changeLanguage(localStorage.getItem('lang'))
    setLang(localStorage.getItem('lang'))
   }else {
    i18n.changeLanguage('uz')
    setLang('uz')
   }

  }, [])

  function handleChangeLang(e) {
    setLang(e.target.value)
    i18n.changeLanguage(e.target.value)
    localStorage.setItem('lang', e.target.value)
  } 
  function handleChangeTheme(e) {
    dataTheme.setTheme(e.target.value)
    localStorage.setItem('theme', e.target.value)
  }
  return (
    <>
      <div className={`${dataTheme.theme == 'light' ? styles.header_top : styles.header_topDark} ${styles.header_top}`}>
        <div className={styles.login}>
        <p className={styles.Signinn}>Sign in / Guest</p>
        <p className={styles.Signin}>Create Account</p>
        </div>
      </div>
      
      <div className={`${dataTheme.theme == 'light' ? styles.header_nav : styles.header_navDark} ${styles.header_nav}`}>
        <div className={styles.header_nav_container}>
        <div className={`${dataTheme.theme == 'light' ? styles.nav : styles.navDark} ${styles.nav}`}>
          <Link className={`${dataTheme.theme == 'light' ? styles.logo : styles.logoDark} ${styles.logo}`} to="/">
            C
          </Link>
        </div>
        <div className={styles.pages}>
          <NavLink className={`${dataTheme.theme == 'light' ? styles.Navigation : styles.NavigationDark} ${styles.Navigation}`} to="/">
            {t('home')}
          </NavLink>
          <NavLink className={`${dataTheme.theme == 'light' ? styles.Navigation : styles.NavigationDark} ${styles.Navigation}`} to="/about">
            {t('about')}
          </NavLink>
          <NavLink className={`${dataTheme.theme == 'light' ? styles.Navigation : styles.NavigationDark} ${styles.Navigation}`} to="/products">
            {t('productpage')}
          </NavLink>
          <NavLink className={`${dataTheme.theme == 'light' ? styles.Navigation : styles.NavigationDark} ${styles.Navigation}`} to="/cart">
            {t('cart')}
          </NavLink>
        </div>

        <div className={styles.change}>
          <div className={styles.dark}>
          <select value={dataTheme.them} onChange={handleChangeTheme} className={`${dataTheme.theme == 'light' ? styles.dark_select : styles.dark_selectDark} ${styles.dark_select}`}>
            <option value="light">{t('light')}</option>
            <option value="dark">{t('dark')}</option>
          </select>
            <Link className={styles.darkMode} to={'/cart'}> <img src={buy} alt="" /></Link>
          </div>
          <select value={lang} onChange={handleChangeLang} className={`${dataTheme.theme == 'light' ? styles.mult : styles.multDark} ${styles.mult}`}>
            <option value="uz">Uzb</option>
            <option value="ru">Rus</option>
            <option value="en">Eng</option>
          </select>
        </div>
        </div>
      </div>
    </>
  );
}

export default Header;
