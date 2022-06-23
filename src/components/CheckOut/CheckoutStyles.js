import styled from 'styled-components';

export const PageCont = styled.div`
    height: 100%;
    width: 100%;
`;

export const TituloPaypal = styled.h1`
    text-align: center;
    font-size: 15px;
    color: black;
`;

export const CheckoutContainer = styled.div`
    height: 100%;
    position: relative;
    justify-self: center;
    width: 50%;
    padding: 10px;
    max-width: 485px;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    background: linear-gradient(to left, #cc7829, #2e40c7);
    margin-top: 250px;
    border-radius: 15px;
    margin-bottom: 200px;
    @media (min-width: 300px) and (max-width: 400px ) {
        width: 80%;
        margin-top: 300px;
    }

    @media (min-width: 400px) and (max-width: 550px){
        width: 80%;
        margin-top: 300px;
    }
    @media (min-width: 550px) and (max-width: 600px){
        width: 80%;
        margin-top: 300px;
    }
    @media (min-width: 600px) and (max-width: 750px){
        width: 80%;
        margin-top: 300px;
    }
    @media (min-width: 750px) and (max-width: 950px){
        width: 80%;
        margin-top: 300px;
    }
`;

export const CheckoutButton = styled.button`
    height: 30px;
    width: 105px;
    left: 110px;
    position: relative;
    margin: 2px;
    display: flex;
    margin-top: 15px;
    color: #fff;
    background: linear-gradient(to left, #e65825, #25e67f);
    border-radius: 15px;
`;

export const CheckoutImg = styled.img`
    height: 300px;
    width: 300px;
    border-radius: 100%;
    position: relative;
    margin-top: 30px;
    @media (min-width: 300px) and (max-width:400px) {
        position: relative;
        margin-top: 15px;
        height: 150px;
    }
`;

export const ButtonLabel = styled.h3`
    font-size: 9px;
    color: #fff;
    text-align: center;
    position: relative;
    margin: 7px;
    margin-left: 20px;
    letter-spacing: none;
`;

export const ProductImage = styled.img`
    position: relative;
    border-radius: 100%;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    margin-bottom: -50px;
    margin-top: 30px;
`;


export const Inputtext = styled.h2`
    font-size: 13px;
    position: relative;
    z-index: 1;
    color: #000;
    text-shadow: 1px 1px 1px #fff;
    top: 10px;
    margin: 8px;
    letter-spacing: 1px;
`;

export const InfoContainer = styled.div`
    position: relative;
    width: 100%; 
    text-align: center;
    height: 100px;
    top: 100px;

    @media (min-width: 380px) and (max-width: 900px){
        font-size: 13px;
    }
`;

export const PaqueteText = styled.h2`
    color: #e3e3e3;
    text-shadow: 2px 1px 2px #000;
    position: relative;
    flex-direction: column;
    width: 100%;
    letter-spacing: 2px;
    text-align: center;
    z-index: 1;

    @media (min-width: 300px) and (max-width: 360px) {
        position: relative;
        width: 100%;
        font-size: 17px;
        letter-spacing: 1px;
    }

    @media (min-width: 360px) and (max-width: 485px) {
        position: relative;
        width: 100%;
        font-size: 17px;
        letter-spacing: 1px;
    }

    @media (min-width: 420px) and (max-width: 550px){
        font-size: 19px;
    }

    @media (min-width: 600px) and (max-width: 950px){
        font-size: 22px;
    }
`;

export const PriceCheckout = styled.h2`
    font-size: 15px;
    position: relative;
    text-align: center;
    color: #ffb01f;
`;

export const DescCheckout = styled.h2`
    font-size: 13px;
    text-align: center;
    width: 100%;
    font-weight: bold;
    color: #fff;
    text-shadow: 2px 1px 2px #000;
    @media (min-width: 300px) and (max-width: 400px){
        font-size: 9.5px;
        top: 20px;
        letter-spacing: 0.5px;
    }

    @media (min-width: 400px) and (max-width: 500px){
        font-size: 10px;
        top: 20px;
        letter-spacing: 0.5px;
    }

    @media (min-width: 500px) and (max-width: 800px) {
        font-size: 10px;
        top: 20px;
        letter-spacing: 0.5px;
    }
`;

export const CheckoutPaypalCont = styled.div`
    position: relative;
    top: 36px;
    color: #fff;
    margin-left: 0.5%;
    margin-bottom: 30px;
    margin-top: 70px;
    justify-items: center;
    width: 99%;

    @media (min-width: 300px) and (max-width: 1200px){
        margin-left: 4.9%;
        width: 90%;
    }
`;

