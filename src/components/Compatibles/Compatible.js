import React, { useEffect } from "react";
import './Compatible.css'
import { FaApple } from "react-icons/fa";
import { SiGooglechrome } from "react-icons/si";
import { GrAndroid, GrWindows } from "react-icons/gr";
import AOS from "aos";
import { IconContext } from "react-icons";
import { CompatibleContainer, CompatibleTitulo, CompatibleSubTitulo, CompatibleIconCont, CompatibleIcon } from "./CompatibleStyles.js";
import "aos/dist/aos.css";

const Compatible = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <CompatibleContainer>
        <div className="container download" data-aos="fade-up">
            <CompatibleTitulo> Compatible en todas las plataformas </CompatibleTitulo>
        </div>
        <CompatibleSubTitulo>Disfruta de todo el contenido que Moon Tv tiene para ti desde todos tus dispositivos</CompatibleSubTitulo>

        <IconContext.Provider value={{ size: "15" }}>
            <CompatibleIconCont>
                <a className="link" href="https://apps.apple.com/us/app/iptv-smarters-player/id1383614816">
                <CompatibleIcon>
                    <FaApple/><p>ios</p>
                </CompatibleIcon>
                </a>
                <a className="link" href="https://play.google.com/store/apps/details?id=com.nst.smartersplayer&hl=es_US&gl=US">
                <CompatibleIcon>
                    <GrAndroid/><p>Android</p>
                </CompatibleIcon>
                </a>
                <a className="link" href="https://www.iptvsmarters.com/download/?download=windows">
                <CompatibleIcon>
                    <GrWindows/><p>Windows</p>
                </CompatibleIcon>
                </a>
                <a className="link" href="https://play.google.com/store/apps/details?id=com.iptvstreamplayer.IPTVStreamPlayer&hl=es_US&gl=US">
                <CompatibleIcon>
                    <SiGooglechrome/><p>Chrome TV</p>
                </CompatibleIcon>
                </a>
            </CompatibleIconCont>
        </IconContext.Provider>
    </CompatibleContainer>
  );
};

export default Compatible;
