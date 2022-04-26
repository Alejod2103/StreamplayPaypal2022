import React from 'react';
import Checkout from '../components/CheckOut/Checkout';
import CheckoutPaypal from '../components/CheckOut/Components/CheckoutTwo';
import CheckoutPaypalUltra from '../components/CheckOut/Components/CheckoutUltra';

export const CheckoutPage = () => {
  return (
    <>
    <Checkout />
    </>
  )
}

export const CheckoutPagePlus = () => {
  return (
    <>
    <CheckoutPaypal />
    </>
  )
}

export const CheckoutPageUltra = () => {
  return (
    <>
    <CheckoutPaypalUltra />
    </>
  )
}
