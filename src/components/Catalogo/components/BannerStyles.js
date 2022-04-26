import styled from 'styled-components';
import eternals from './src/img/eternals.jpg';

export const BannerContent = styled.div`
    margin-left: 30px;
    padding-top: 14px;
    height: 190px;
    `;

export const BannerBackground = styled.header`
    background-image: url(${eternals});
    background-position: center center;
    background-size: cover;
    padding-top: 0px;
    object-fit: contain;
    position: relative;
    height: 730px;
    box-shadow: -0.50px 3px 15px #fff;
`;

export const BannerTitulo = styled.h1`
    margin-top: 345px;
    font-size: 5.2rem;
    color: #fff;
    text-shadow: 1px 3px #000;
    font-weight: 300;
    padding-bottom: 0.3rem;

    @media (min-width: 300px) and (max-width: 400px) {
        margin-top: 210px;
        margin-left: -20px;
        font-size: 4rem;
    }
`;

export const BannerContBoton = styled.div`
    margin-top: 40px;
    @media (min-width: 300px) and (max-width: 700px){
        margin-top: 20px;
        margin-left: 10px;
    }
`;

export const BannerBoton = styled.button`
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    justify-content: center;

    font-size: 1rem;
    font-weight: 800;
    border-radius: 0.4vw;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-right: 1rem;
    padding-top: 0.5rem;
    background-color: rgba(51, 51, 51, 0.5);
    padding-bottom: 0.5rem;

    :hover{
        color: #000;
        background-color: #e6e6e6;
        transition: all 0.2s;
    }

    @media (min-width: 300px) and (max-width:400px) {
        padding-left: 1.5rem;
        border-radius: 3.5px;
    }
`;

export const BannerDesc = styled.h1`
    width: 45rem;
    line-height: 1.3;
    color: #fff;
    font-weight: 800;
    padding-top: 2.5rem;
    font-size: 1.2rem;
    max-width: 780px;
    letter-spacing: 1px;
    text-shadow: 2px 2px #000;
    height: 80px;
    margin-left: 13px;

    @media (min-width: 450px) and (max-width: 700px) {
        max-width: 800px;
        width: 310px;
        letter-spacing: none;
        font-size: 1rem;
        padding-top: 4.5rem;
    }

    @media (min-width: 300px) and (max-width: 450px){
        max-width: 350px;
        width: 300px;
        margin-top: 10px;
        margin-left: -5px;
        font-size: 14px;        
    }
`;

export const BannerFadeBoton = styled.div`
    height: 7.4rem;
    background-image: linear-gradient( 180deg, transparent, rgba(37, 37, 37, 0.61), #111);
`;