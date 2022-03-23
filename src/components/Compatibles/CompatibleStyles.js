import styled from 'styled-components'

export const CompatibleContainer = styled.div`
  background: linear-gradient(
    90deg,
    rgba(45, 165, 255, 1) 45%,
    rgba(1, 223, 245, 1) 100%
  );
  text-align: center;
  color: #fff;
`

export const CompatibleTitulo = styled.h1`
    font-size: 2.5rem;
    font-weight: 200;
    line-height: 1.4;
    text-transform: uppercase;
    margin: 1.5rem 0;
    position: relative;
    padding-bottom: 1rem;    
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
    margin: 1rem 2rem;
    border: 2px solid #fff;
    border-radius: 5px;
    width: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: 1.5rem;
`;
