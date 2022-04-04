import React from 'react';

function PassengersInfo({setShowPayment}) {
    return (
        <div>
            <p>Who is travelling?</p>
            <input type='text'></input>
            <h3>aca voy a poner los datos del vuelo</h3>
            <button onClick={() => setShowPayment(true)}>Continue to payment</button>
        </div>
    );
}

export default PassengersInfo;