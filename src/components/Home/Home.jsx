import React, { useState } from "react";
import styles from "./Home.module.css";
import LuggageIcon from "@mui/icons-material/Luggage";
import ConnectingAirportsOutlinedIcon from "@mui/icons-material/ConnectingAirportsOutlined";
import { IoIosAirplane } from "react-icons/io";
import SearchBar from "../SearchBar/SearchBar";
//import CardDetail from "../CardDetail/CardDetail";
//import { getFlightsInfo } from "../../Redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.allFlights);

  // let handleInputChange = (e) => {
  //   setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  const [input, setInput] = useState({
    fly_from: "",
    fly_to: "",
    dateFrom: "",
    dateTo: "",
  });

  // function handleClick(e) {
  //   e.preventDefault();
  //   dispatch(getFlightsInfo(input));
  // }

  return (
    <div className={styles.containerGeneral}>
      <SearchBar />
      {/* <input
        value={input.fly_from}
        placeholder="origen"
        onChange={handleInputChange}
        name="fly_from"
      />

      <input
        value={input.fly_to}
        placeholder="destino"
        onChange={handleInputChange}
        name="fly_to"
      />
      <input
        value={input.dateFrom}
        type="date"
        onChange={handleInputChange}
        name="dateFrom"
        placeholder="Fecha salida"
      />
      <input
        id="fecha"
        type="date"
        value={input.dateTo}
        onChange={handleInputChange}
        name="dateTo"
        placeholder="Fecha llegada"
      />
      <button type="submit" onClick={handleClick}>
        Submit
      </button> */}
      <div className={styles.containerFlights}>
        {flights.data ? (
          flights.data.map((f) => {
            return (
              <div key={f.id} className={styles.home}>
                <div className={styles.container}>
                  <div className={styles.flex}>
                    <ConnectingAirportsOutlinedIcon color="success" />
                    <h2>DeViaje.com</h2>
                  </div>
                  <div className={styles.container_departure}>
                    <div className={styles.flex}>
                      <IoIosAirplane />
                      <h4>IDA</h4>
                      <h4 className={styles.padding_left}>{f.cityFrom} -</h4>
                      <h4 className={styles.padding_left}>{f.cityTo}</h4>
                    </div>
                    <div>
                      <h4>{f.local_departure.slice(0, 10)}</h4>
                    </div>
                    <div className={styles.flex}>
                      <h4>{f.local_departure.slice(11, 16)}</h4>
                      <h4 className={styles.padding_left}>
                        {f.has_airport_change ? (
                          <p>Directo</p>
                        ) : (
                          <p>Con escala</p>
                        )}
                      </h4>
                    </div>
                  </div>
                  <LuggageIcon />
                  <div className={styles.price}>
                    <h3>Price</h3>
                    <div className={styles.flex}>
                      <h6>{flights.currency}</h6>
                      <h4 className={styles.padding_left}>{f.price}</h4>
                    </div>
                  </div>
                </div>
                {/* <CardDetail
                  cityfrom={f.cityfrom}
                  cityTo={f.cityTo}
                  local_departure={f.local_departure}
                  price={f.price}
                  currency={f.currency}
                /> */}
              </div>
            );
          })
        ) : (
          <h1>Nothing to render</h1>
        )}
      </div>
    </div>
  );
}
