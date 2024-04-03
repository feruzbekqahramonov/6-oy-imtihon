import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import img1 from "../../assets/siliderimg1.webp"
import { ThemeContext } from '../../App'
import styles from "./index.module.css";

function Cart() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("uz");
  const dataTheme = useContext(ThemeContext)

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
    <div className={styles.bigg_container}>
    <div className={styles.card}>
        <h1 className={dataTheme.theme == 'light' ? styles.text1 : styles.titleDark}>{t('empty')}</h1>
        <div className={styles.Bit__team}>

          <div className={styles.card__page}>
            <div>
            <img width={200} height={200} src={img1} alt="" />
            </div>
            <div>
              <h1 className={dataTheme.theme == 'light' ? styles.texth1 : styles.texth1Dark}>Comfy Bed</h1>
              <span className={dataTheme.theme == 'light' ? styles.span1 : styles.span1Darl}>Homestead</span>
              <p className={dataTheme.theme == 'light' ? styles.textp : styles.textpDark}>Color : <span className={styles.yellow}></span></p>
            </div>
            <div className={styles.card__select}>
              <label htmlFor="celect" className={dataTheme.theme == 'light' ? styles.selectlabel : styles.selectlabelDark}>Amount</label>
              <select id="celect" className={dataTheme.theme == 'light' ? styles.select : styles.selectDark}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div>
              <span className={dataTheme.theme == 'light' ? styles.price : styles.priceDark}>$179.99</span>
            </div>
          </div>


          <div className={dataTheme.theme == 'light' ? styles.card__price_team : styles.card__price_teamDark}>
            <div className={dataTheme.theme == 'light' ? styles.priceTee : styles.priceTeeDark}>
              <h4 className={dataTheme.theme == 'light' ? styles.TextColor : styles.TextColorDark}>Subtotal</h4>
              <span className={dataTheme.theme == 'light' ? styles.priceColor : styles.priceColorDark}>$309.98</span>
            </div>
            <div className={dataTheme.theme == 'light' ? styles.priceTee : styles.priceTeeDark}>
              <h4 className={dataTheme.theme == 'light' ? styles.TextColor : styles.TextColorDark}>Shipping</h4>
              <span className={dataTheme.theme == 'light' ? styles.priceColor : styles.priceColorDark}>$5.00</span>
            </div>
            <div className={dataTheme.theme == 'light' ? styles.priceTee : styles.priceTeeDark}>
              <h4 className={dataTheme.theme == 'light' ? styles.TextColor : styles.TextColorDark}>Tax</h4>
              <span className={dataTheme.theme == 'light' ? styles.priceColor : styles.priceColorDark}>$31.00</span>
            </div>
            <div className={dataTheme.theme == 'light' ? styles.priceTee : styles.priceTeeDark}>
              <h4 className={dataTheme.theme == 'light' ? styles.TextColor : styles.TextColorDark}>Order Total</h4>
              <span className={dataTheme.theme == 'light' ? styles.priceColor : styles.priceColorDark}>$345.98</span>
            </div>
            <button className={styles.btn}>PLEASE LOGIN</button>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Cart