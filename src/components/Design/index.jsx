import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./index.module.css";
function Design() {
  const location = useLocation();
  const params = useParams();

  return (
    <>
      <div className={styles.info_card}>
        <div className={styles.link}>
          <Link className={styles.home} to="/">Home</Link>
          <Link className={styles.products} to="/products">Products</Link>
        </div>
        <div className={styles.card_container}>
          <img className={styles.infoImage} src={location.state.image} alt="" />

          <div className={styles.info_desc}>
            <h2 className={styles.title}>{location.state.title}</h2>
            <h4 className={styles.company}>{location.state.company}</h4>
            <h3 className={styles.price}>${location.state.price}</h3>
            <p className={styles.desc}>{location.state.description}</p>
            <h5 className={styles.amount}>Colors</h5>
            <div className={styles.colors}>
              <p className={styles.color1}></p>
              <p className={styles.color2}></p>
            </div>
            <div>
              <h5 className={styles.amount}>Amount</h5>
              <select className={styles.amount_num}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <button className={styles.button}>ADD TO BAG</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Design;
