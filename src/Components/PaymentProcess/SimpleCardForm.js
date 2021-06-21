import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
const SimpleCardForm = ({handleUserSelectService}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMassage, setErrorMassage] = useState();
    const [paymentSuccess, setPaymentSuccess] = useState();
    const handlePaymentOfOrder = (e,paymentId) => {

        // const allData = { ...info, date: new Date(), paymentId: paymentId,plans:id,userEmail:userData.email}
        if(e){
            handleUserSelectService()
        }

    }
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setErrorMassage(error.message);
            setPaymentSuccess('')
        } else {
            setPaymentSuccess(paymentMethod.id)
            handlePaymentOfOrder(paymentMethod.id)
            setErrorMassage('')

        }
        
    };

    return (
        <div className="round p-5 border border-2" >
            <form onSubmit={handleSubmit}>
                <CardElement />
                <br />
                <div className="text-center">
                    <button type="submit" disabled={!stripe} className="btn btn-success col-md-10 col-sm-10 col-10 airBtn text-white mb-3">
                        Pay
                </button>
                </div>

            </form>
            {
                errorMassage && <p className="text-danger text-center">{errorMassage}</p>
            }
            {
                paymentSuccess && <p className="text-center text-success">Your payment successfully Done.</p>
            }
        </div>
    );
};

export default SimpleCardForm;