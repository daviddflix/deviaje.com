import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from '../PaymentForm/PaymentForm';
import Router, { useRouter } from "next/router";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const PUBLIC_KEY = "pk_test_51KkACPCSks2szT4NgRjgmTwfeTH2yWzfGx85nGO2x19qPXlG59wFepywgIGJ38L7P7wakg5Cr1yHnmUEfMbjV5JB003sFeCc5S"

const stripePromise = loadStripe(PUBLIC_KEY)

function StripeContainer() {
    const flights = useSelector(state => state.allFlights)
    const {id} = useParams()
    const flight = flights.data?.filter(f => f.id === id)
    const history = useHistory()
    const router = useRouter()
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm
                price={(flight[0].price * 1.8).toFixed()}
                // onSuccessfulCheckout={() => router.push("/success")}
                onSuccessfulCheckout={() => history.push("/success")}
            />
        </Elements>
    );
}

export default StripeContainer;