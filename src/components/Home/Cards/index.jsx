import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../App";
import styles from "./index.module.css"
// bu papkani hech qyerda ishlatmadim
function Cards(props) {
  const {image, company, price} = props.block
  const {theme} = useContext(ThemeContext)
 
  return (
    <>
      <div className={`${
              theme == "light" ? styles.cards_card_block : styles.cards_card_blockDark
            } ${styles.cards_card_block}`}>
            <img src={image} alt="" width={'320px'}/>
            <div className={`${
              theme == "light" ? styles.card_desc : styles.card_descDark
            } ${styles.card_desc}`}>
              <h4 className={`${
              theme == "light" ? styles.title : styles.titleDark
            } ${styles.title}`}>{company}</h4>
              <p className={`${
              theme == "light" ? styles.price : styles.priceDark
            } ${styles.price}`}>${price}</p>
            </div>
      </div>
    </>
  )
}

export default Cards