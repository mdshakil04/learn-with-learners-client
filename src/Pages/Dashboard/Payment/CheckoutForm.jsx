import {
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
  const [error, setError] = useState('')
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "24px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {/* to='../dashboard/student' */}
      <button
          className=" mt-8 btn btn-outline btn-success text-2xl"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
        <p className=" text-center font-2xl font-bold text-red-500">{error}</p>
    </form>
  );
};

export default CheckoutForm;
