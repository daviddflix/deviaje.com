import React from "react";
import CardDetail from "../CardDetail/CardDetail";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <CardDetail
      cityfrom={flights.cityfrom}
      cityTo={flights.cityTo}
      local_departure={flights.local_departure}
      price={flights.price}
      currency={flights.currency}
    />
  );
}
