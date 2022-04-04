import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from '../PaymentForm/PaymentForm';

const PUBLIC_KEY = "pk_test_51KkACPCSks2szT4NgRjgmTwfeTH2yWzfGx85nGO2x19qPXlG59wFepywgIGJ38L7P7wakg5Cr1yHnmUEfMbjV5JB003sFeCc5S"

const stripePromise = loadStripe(PUBLIC_KEY)

function StripeContainer() {
    return (
        
            <Elements stripe={stripePromise}>
                <PaymentForm />
            </Elements>

        
    );
}

export default StripeContainer;