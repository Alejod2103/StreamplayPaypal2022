import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PaypalButton() {

  return (
    <div className="AppCheckout"> 
      <div className="Checkout">
        <PayPalScriptProvider options={{"client-id": "AaNkYTanpppQs88dkajpUd7El_ylCNqjsmTt-JLzZuLYqFl2CFb-rOIWAUtyWBzv_v_9xeHQzFXKKgvo"}} >
              <PayPalButtons
              createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "35.00",
                                },
                            },
                        ],
                    });
                }} 
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                      const name = details.payer.name.given_name;
                      alert(`Felicidades ${name} tu pago se a procesado, tu cuenta sera asignada via telefonica!`);
                      console.log(name);
                      
                  });
              }} />
          </PayPalScriptProvider>
      </div>
    </div>
  )
}

export default PaypalButton;