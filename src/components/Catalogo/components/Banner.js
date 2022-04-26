import React from 'react'
import { NavLink } from 'react-router-dom';
import { BannerContent,
         BannerTitulo,
         BannerContBoton,
         BannerBoton,
         BannerDesc,
         BannerBackground} from './BannerStyles.js';

function Banner() {



    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

  return (
    <>
        <BannerBackground>
            <BannerContent>
                <BannerTitulo>Eternals</BannerTitulo>
              <BannerContBoton>
                 <NavLink to='/'>
                  <BannerBoton>Home</BannerBoton>
                  </NavLink>
                  <NavLink to='/Pricing'>
                  <BannerBoton>Ver Planes</BannerBoton>
                  </NavLink>
              </BannerContBoton>
              <BannerDesc>
                {truncate(
                    `Hace millones de años, los seres cósmicos conocidos como los Celestiales comenzaron a experimentar genéticamente con los humanos. Su intención era crear individuos superpoderosos que hicieran únicamente el bien, pero algo salió mal y aparecieron los Desviantes, destruyendo y creando el caos a su paso. Ambas razas se han enfrentado en una eterna lucha de poder a lo largo de la historia. En medio de esta guerra, Ikaris y Sersi tratarán de vivir su propia historia de amor.`, 130
                )}
              </BannerDesc>
            </BannerContent>
        </BannerBackground>
    </>
  )
}

export default Banner