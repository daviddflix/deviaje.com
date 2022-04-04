import React, { useState } from 'react';
import axios from 'axios';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import s from './PaymentForm.module.css';

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "black",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "red",
			color: "red"
		}
	}
}

function PaymentForm() {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
        if(!error){
            try{
                const {id} = paymentMethod
                const response = await axios.post('https://localhost:4001/payment', {
                    amount: 1000,
                    id
                })

                if(response.data.success){
                    console.log('succesfull payment')
                    setSuccess(true)
                }
            }
            catch(e){
                console.log(e)
            }
        }
        else{
            console.log(error.message)
        }
    }

    return (
        <div>
            {
                !success ? 
                    <form onSubmit={handleSubmit}>
                        <fieldset className={s.elements}>
                            <div>
                                <CardElement options={CARD_OPTIONS} />
                            </div>
                        </fieldset>
                        <button>PAY</button>
                    </form>
                    :
                    <div>
                        You just bought a flight
                    </div>
            }
        </div>
    );
}

export default PaymentForm;