import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FlightInfo from '../FlightInfo/FlightInfo';
import PaymentDetail from '../PaymentDetail/PaymentDetail';
import s from './PassengersInfo.module.css';

function PassengersInfo({ setShowPayment }) {

    const flights = useSelector(state => state.allFlights)
    const { id } = useParams()
    const flight = flights?.filter(f => f.id === id)

    const pass = 2
    const array = []
    for (var i = 0; i < pass; i++) {
        array.push(flight)
    }

    return (
        <div>
            <p className={s.parrafo}>You're almost there! Fill in your personal details and complete your purchase.</p>

            <div className={s.grilla}>

                <div className={s.travellers}>
                    <p className={s.subtitulo}>Who is travelling?</p>
                    {
                        array.map((e, i) => {
                            return (
                                <div key={i} className={s.container}>
                                    <label className={s.pasajero}>Passenger {i+1}</label>
                                    <div className={s.nombre}>Name</div>
                                    <input type='text' className={s.input} placeholder='As it appears in the travel document'></input>
                                    <div className={s.nombre}>Last Name</div>
                                    <input type='text' className={s.input} placeholder='As it appears in the travel document'></input>
                                    <div className={s.nombre}>Residence Country</div>
                                    <input type='text' className={s.input} placeholder='As it appears in the travel document'></input>
                                    <div className={s.nombre}>Number of travel document</div>
                                    <input type='number' className={s.input}></input>
                                    <div className={s.nombre}>Date of birth</div>
                                    <input type='date' className={s.input}></input>
                                </div>
                            )
                        })
                    }
                </div>

                <div className={s.display}>
                    <PaymentDetail price={flight[0].price} />

                    <FlightInfo departure={flight[0].flyFrom}
                        arrival={flight[0].flyTo}
                        date={flight[0].local_departure}
                        cityD={flight[0].cityFrom}
                        cityA={flight[0].cityTo}
                        timeD={flight[0].local_departure}
                        timeA={flight[0].local_arrival}
                        duration={flight[0].duration.total} />
                </div>

            </div>

            <button onClick={() => setShowPayment(true)} className={s.btn}>Continue to payment</button>

        </div>
    );
}

export default PassengersInfo;