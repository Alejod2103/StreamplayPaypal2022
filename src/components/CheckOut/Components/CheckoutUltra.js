import React from 'react'
import "bootswatch/dist/lux/bootstrap.min.css";
import StreamPlay from '../sptv.png'
import '../Checkout.css'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CheckoutContainer, CheckoutPaypalCont, DescCheckout, InfoContainer, PageCont, PaqueteText, PriceCheckout, ProductImage } from '../CheckoutStyles.js'

const CheckoutPaypalUltra = () => {

    function PaypalPriceUltra() {

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
                                          value: "120.00",
                                      },
                                  },
                              ],
                          });
                      }} 
                      onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            const name = details.payer.name.given_name;
                            alert(`Gracias! ${name} tu pago se a procesado`);
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

    <ProductImage src={StreamPlay} />
        <CheckoutContainer>
            

            <CheckoutPaypalCont>
                <PaypalPriceUltra className="color:white" />
            </CheckoutPaypalCont>

            <InfoContainer>
                <PaqueteText>StreamPlay Plan Plus</PaqueteText>
                <PriceCheckout>120.00$ - 6 meses</PriceCheckout>
                <DescCheckout>6 Meses de acceso ilimitado a todo el contenido de la plataforma</DescCheckout>
            </InfoContainer>
        </CheckoutContainer>
    </PageCont>
    </>
  )
}

export default CheckoutPaypalUltra;
