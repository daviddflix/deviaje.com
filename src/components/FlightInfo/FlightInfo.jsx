import React from 'react';
import s from './FlightInfo.module.css';

function FlightInfo({departure, arrival, date, cityD, cityA, timeD, timeA}) {
    
    const depTime = timeD.slice(11, 16)
    const arrTime = timeA.slice(11, 16)
    const fecha = date.slice(0, 10)

    return (
        <div className={s.grid}>
            <div className={s.payment}>Detail of the purchase</div>
            <div className={s.ciudades}>{departure} - {arrival}</div>
            <div className={s.salida}>DEPARTURE</div>
            <div className={s.fecha}>{fecha}</div>
            <div className={s.aerolinea}>aerolinea</div>
            <div className={s.viaje}>
                <div className={s.ciudad}>
                    <div className={s.city}>{cityD}</div>
                    <div className={s.time}>{depTime}</div>
                </div> 
                <div className={s.ciudad}>--------</div>
                <div className={s.ciudad}>
                    <div className={s.city}>{cityA}</div>
                    <div className={s.time}>{arrTime}</div>
                </div>
                <div className={s.ciudad}>
                    <div className={s.city}>Duration</div>
                    <div className={s.time}>duracion</div>
                </div>
            </div>
        </div>
    );
}

export default FlightInfo;