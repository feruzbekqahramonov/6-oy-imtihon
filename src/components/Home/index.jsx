import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import image1 from "../../assets/siliderimg1.webp";
import image2 from "../../assets/sliderimg2.webp";
import image3 from "../../assets/sliderimg3.webp";
import image4 from "../../assets/sliderimg4.webp";
import Cards from "./Cards/index.jsx";
import { BeatLoader } from "react-spinners";
import { ThemeContext } from "../../App";
import styles from "./index.module.css";
import { useContext } from "react";
function Home() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("uz");
  const [info, setInfo] = useState([]);
  const [loading, setIsloading] = useState(false);
  useEffect(() => {
    setIsloading(true);

    fetch("https://strapi-store-server.onrender.com/api/products?featured=true")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsloading(false);
      });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("lang")) {
      i18n.changeLanguage(localStorage.getItem("lang"));
      setLang(localStorage.getItem("lang"));
    } else {
      i18n.changeLanguage("uz");
      setLang("uz");
    }
  }, []);
  const Push = useNavigate();
  const handleClick = (id, el) => {
    Push(`/products/${id}`,{state: el})
    
  };

  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.nav_desc}>
          <h2
            className={`${
              theme == "light" ? styles.siteTitle : styles.siteTitlrDark
            } ${styles.siteTitle}`}
          >
            {t("mision")}
          </h2>
          <p
            className={`${theme == "light" ? styles.desc : styles.descDark} ${
              styles.desc
            }`}
          >
            {t("description")}
          </p>
          <NavLink
            className={`${
              theme == "light" ? styles.products : styles.productsDark
            } ${styles.products}`}
            to="/products"
          >
            {t("our")}
          </NavLink>
        </div>
        <div
          className={`${
            theme == "light" ? styles.slideShow : styles.slideShowDark
          } ${styles.slideShow}`}
        >
          <div
            className={`${
              theme == "light" ? styles.carouselItem : styles.carouselItemDark
            } ${styles.carouselItem}`}
          >
            <img className={`${
              theme == "light" ? styles.imageWrapper : styles.imageWrapperDark
            } ${styles.imageWrapper}`} src={image1} alt="" />
          </div>
          <div
            className={`${
              theme == "light" ? styles.carouselItem : styles.carouselItemDark
            } ${styles.carouselItem}`}
          >
            <img className={`${
              theme == "light" ? styles.imageWrapper : styles.imageWrapperDark
            } ${styles.imageWrapper}`} src={image2} alt="" />
          </div>
          <div
            className={`${
              theme == "light" ? styles.carouselItem : styles.carouselItemDark
            } ${styles.carouselItem}`}
          >
            <img className={`${
              theme == "light" ? styles.imageWrapper : styles.imageWrapperDark
            } ${styles.imageWrapper}`} src={image3} alt="" />
          </div>
          <div
            className={`${
              theme == "light" ? styles.carouselItem : styles.carouselItemDark
            } ${styles.carouselItem}`}
          >
            <img className={`${
              theme == "light" ? styles.imageWrapper : styles.imageWrapperDark
            } ${styles.imageWrapper}`} src={image4} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        <h2
          className={`${theme == "light" ? styles.title : styles.titleDark} ${
            styles.title
          }`}
        >
          {t("fatured")}
        </h2>
        <hr />
        <div className={styles.cards_card}>
          {loading && <BeatLoader color="#004fff" />}
          {!loading &&
            info.length > 0 &&
            info.map((el, index) => {
              return (<div
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
              </div>)
            })}
        </div>
      </div>
    </>
  );
}

export default Home;
