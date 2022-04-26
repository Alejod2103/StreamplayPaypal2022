import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PaypalButton() {

  return (
    <div className="AppCheckout"> 
      <div className="Checkout">
        <PayPalScriptProvider options={{"client-id": "AQZUd5_-lnPXXo8cNZSZsuiKY2yRVhal8OoDdO_uOafADlUwYPai9TbAde0yARNPd9JqBzmXKNs_EQD8"}} >
              <PayPalButtons
              createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "30.00",
                                },
                            },
                        ],
                    });
                }} 
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                      const name = details.payer.name.given_name;
                      alert(`Feklicidades ${name} tu pago se a procesado`);
                      console.log(name);
                      
                  });
              }} />
          </PayPalScriptProvider>
      </div>
    </div>
  )
}

export default PaypalButton;