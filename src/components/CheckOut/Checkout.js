import React from 'react'
import "bootswatch/dist/lux/bootstrap.min.css";
import StreamPlay from './sptv.png'
import './Checkout.css'
import { CheckoutContainer, CheckoutPaypalCont, DescCheckout, InfoContainer, PageCont, PaqueteText, PriceCheckout, ProductImage } from './CheckoutStyles'
import PaypalButton from './Components/PaypalButton';

const Checkout = () => {


  return (
    <>
    <PageCont>

    <ProductImage src={StreamPlay} />
        <CheckoutContainer>

            <CheckoutPaypalCont>
                <PaypalButton className="color:white" />
            </CheckoutPaypalCont>

            <InfoContainer>
                <PaqueteText>StreamPlay Plan Basico</PaqueteText>
                <PriceCheckout>30.00$ - 1 mes</PriceCheckout>
                <DescCheckout>1 Mes de acceso ilimitado a todo el contenido de la plataforma</DescCheckout>
            </InfoContainer>
        </CheckoutContainer>
    </PageCont>
    </>
  )
}

export default Checkout;
