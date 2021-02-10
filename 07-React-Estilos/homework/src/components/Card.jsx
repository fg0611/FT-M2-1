import React from "react";
import styles from "./Card.module.scss";

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div className={styles.card}>
      <span>{name}</span>
      <button className={styles.button} onClick={onClose}>
        
        X
      
      </button>
      <div className={styles.data}>
        <section>
          <span>Min</span>
          <span>{`${min}º`}</span>
        </section>
        <section>
          <span>Max</span>
          <span>{`${max}º`}</span>
        </section>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
      </div>
    </div>
  );
}
