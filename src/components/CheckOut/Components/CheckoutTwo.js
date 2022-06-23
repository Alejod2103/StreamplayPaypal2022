import React from 'react'
import "bootswatch/dist/lux/bootstrap.min.css";
import StreamPlay from '../sptv.png';
import '../Checkout.css';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CheckoutContainer, CheckoutPaypalCont, DescCheckout, InfoContainer, PageCont, PaqueteText, PriceCheckout, ProductImage } from '../CheckoutStyles.js'

const CheckoutPaypal = () => {

    function PaypalPrice() {

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
                                          value: "80.00",
                                      },
                                  },
                              ],
                          });
                      }} 
                      onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            const name = details.payer.name.given_name;
                            alert(`Gracias! ${name} tu pago se a procesado, tu cuenta sera asignada via telefonica!`);
                            console.log(name);
                            
                        });
                    }} />
                </PayPalScriptProvider>
            </div>
          </div>
        )
      }
      
  return (
    <>

    <PageCont>

        <CheckoutContainer>
            

            <CheckoutPaypalCont>
                <PaypalPrice className="color:white" />
            </CheckoutPaypalCont>

            <InfoContainer>
                <PaqueteText>StreamPlay Plan Plus</PaqueteText>
                <PriceCheckout>80.00$ - 3 meses</PriceCheckout>
                <DescCheckout>3 Meses de acceso ilimitado a todo el contenido de la plataforma</DescCheckout>
            </InfoContainer>

            <ProductImage src={StreamPlay} />

        </CheckoutContainer>
    </PageCont>
    </>
  )
}

export default CheckoutPaypal;
