import styled from 'styled-components'

export const CompatibleContainer = styled.div`
  background: linear-gradient(
    90deg,
    rgba(45, 165, 255, 1) 4 5%,
    rgba(1, 223, 245, 1) 100%
  );
  text-align: center;
  position: relative;
  color: #fff;
  top: -25px;
  z-index: 1;
  margin-bottom: -30px;
  position: relative;
  height: 100%;
`

export const CompatibleTitulo = styled.h1`
    font-size: 2.5rem;
    font-weight: 200;
    color: #fff;
    line-height: 1.4;
    text-transform: uppercase;
    margin: 1.5rem 0;
    position: relative;
    padding-bottom: 1rem;
    @media (min-width: 300px) and (max-width: 400px) {
      font-size: 1.5rem;
    }  
`;

export const CompatibleSubTitulo = styled.p`
    font-size: 1.2rem;
    line-height: 1.4;
    font-weight: 300;
`;

export const CompatibleIconCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;

    @media (min-width: 300px) and (max-width: 600px)  {
    flex-direction: column;
    }
`;

export const CompatibleIcon = styled.div`
    margin: 10px;
    border: 2px solid #fff;
    border-radius: 5px;
    width: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: 1.5rem;
`;
