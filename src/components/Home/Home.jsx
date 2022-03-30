<<<<<<< HEAD
import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import SearchBar from "./SearchBar";
// import Paginated from "./Paginated";
// import Recipe from "./RecipeCard";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        {/* <Header />
        <Nav />
        <ContainerInfo /> */}

        <div className={styles.filterContainer}>
          <input type="text" />
          <input type="text" />
          <input type="date" />
          <input type="date" />
          <button>Search</button>
        </div>
        <div className={styles.filterSecundary}>
          <label>Ordenar Por: </label>
          <select>
            <option value="atoz">Precio</option>
            <option value="exit">Salida</option>
            <option value="arrival">Llegada</option>
          </select>
        </div>
      </div>
    </>
  );
}
=======
import React from 'react';

function Home() {
    return (
        <div>
            <h1>homeee</h1>
        </div>
    );
}

export default Home;
>>>>>>> 94b0df411fe4967c3fad57cd3dca3989131d5644
