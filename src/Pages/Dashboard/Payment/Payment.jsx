import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const  stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div className=' py-24'>
            <SectionTitle
                heading={"Make Payment Via stripe"}
            ></SectionTitle>
            <div className=' container mx-auto py-16'>
                <h2 className="text-3xl text-center mb-8">Payment Via Card</h2>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;