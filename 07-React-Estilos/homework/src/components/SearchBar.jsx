import React from "react";
import styles from "./SearchBar.module.scss";

export default function SearchBar({  onSearch  }) {
  // acá va tu código
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Ciudad..." />
      <button onClick={() => onSearch("ciudad")}>Agregar</button>
    </div>
  );
}
