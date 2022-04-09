import styled from "styled-components";
import harry from './src/img/harryPotter.jpg'

export const MovieListPage = styled.div`
    background: #151a24;
    height: 1500px;
    width: 100%;
    box-shadow:  inset 0px 12px 11px -12px #fff;
    position: relative;
`;

export const MovieBanner = styled.div`
    object-fit: contain;
    background-position: center center;
    background-size: cover;
    background-image: url(${harry});
`;