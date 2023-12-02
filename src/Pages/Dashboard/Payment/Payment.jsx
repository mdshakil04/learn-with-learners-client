import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const  stripePromise = loadStripe('');
const Payment = () => {
    return (
        <div className=' py-24'>
            <SectionTitle
                heading={"Payment"}
            ></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    
                </Elements>
            </div>
        </div>
    );
};

export default Payment;