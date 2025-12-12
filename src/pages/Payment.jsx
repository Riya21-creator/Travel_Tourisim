import React from "react";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="payment-container">
      <h2>Secure Payment</h2>
      <p>Complete your booking by making a secure online payment.</p>

      <form className="payment-form">
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Card Number" required />
        <input type="text" placeholder="Expiry Date (MM/YY)" required />
        <input type="text" placeholder="CVV" required />
        <button type="submit">Make Payment</button>
      </form>
    </div>
  );
};

export default Payment;
