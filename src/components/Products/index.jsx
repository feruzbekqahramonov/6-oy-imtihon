import { useTranslation } from "react-i18next";
import { NavLink, Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { ThemeContext } from "../../App";
import styles from "./index.module.css";
function Products() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("uz");
  const Push = useNavigate();
  const { theme } = useContext(ThemeContext);
  const [loading, setIsloading] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("lang")) {
      i18n.changeLanguage(localStorage.getItem("lang"));
      setLang(localStorage.getItem("lang"));
    } else {
      i18n.changeLanguage("uz");
      setLang("uz");
    }
  }, []);

  const [cards, setCard] = useState([]);

  useEffect(() => {
    setIsloading(true);
    fetch("https://strapi-store-server.onrender.com/api/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCard(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);

  const handleClick = (id, el) => {
    Push(`/products/${id}`,{state: el})
    
  };

  return (
    <>
      <div
        className={`${theme == "light" ? styles.filter : styles.filterDark} ${
          styles.filter
        }`}
      >
        <div className={styles.filter_top}>
          <div className={styles.filter_search}>
            <label>{t("search")}</label>
            <input type="text" className={styles.search_input} />
          </div>

          <div className={styles.filter_top_select}>
            <label>{t("category")}</label>
            <select>
              <option value="all">{t("all")}</option>
              <option value="tables">{t("tables")}</option>
              <option value="chairs">{t("chairs")}</option>
              <option value="kids">{t("kids")}</option>
              <option value="sofas">{t("sofas")}</option>
              <option value="beds">{t("beds")}</option>
            </select>
          </div>

          <div className={styles.filter_top_select}>
            <label className="form-label">{t("company")}</label>
            <select>
              <option value="all">{t("all")}</option>
              <option value="modenza">Modenza</option>
              <option value="luxora">Luxora</option>
              <option value="artifex">Artifex</option>
              <option value="comfora">Comfora</option>
              <option value="homestead">Homestead</option>
            </select>
          </div>

          <div className={styles.filter_top_select}>
            <label className="form-label">{t("sort")}</label>
            <select>
              <option value="all">{t("all")}</option>
              <option value="a-z">a-z</option>
              <option value="z-a">z-a</option>
              <option value="high">high</option>
              <option value="low">low</option>
            </select>
          </div>
        </div>

        <div className={styles.filter_buttom}>
          <div className={styles.sum}>
            <label className="form-label">{t("price")}</label>
            <input type="range" className="form-range" />
          </div>

          <div className={styles.checkbox}>
            <label className="form-check-label" htmlFor="flexCheckChecked">
              {t("free")}
            </label>
            <input
              type="checkbox"
              className="form-check-input"
              id="flexCheckChecked"
            />
          </div>

          <div className={styles.buttons}>
            <button className={styles.search}>{t("searchBtn")}</button>
            <button className={styles.reset}>{t("reset")}</button>
          </div>
        </div>
      </div>

      <div className={styles.cards_card}>
        {loading && <BeatLoader color="#004fff" />}
        {!loading &&
          cards.map((el, index) => {
            return (
              <div
                className={styles.cards_card_block}
                key={index}
                onClick={() => handleClick(el.id, el.attributes)}
              >
                <img src={el.attributes.image} alt="" width={"320px"} />
                <div className={styles.card_desc}>
                  <h4
                    className={`${
                      theme == "light" ? styles.title : styles.titleDark
                    } ${styles.title}`}
                  >
                    {el.attributes.company}
                  </h4>
                  <p
                    className={`${
                      theme == "light" ? styles.price : styles.priceDark
                    } ${styles.price}`}
                  >
                    ${el.attributes.price}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Products;
