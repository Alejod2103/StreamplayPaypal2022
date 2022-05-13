import styled from 'styled-components';
import { motion } from 'framer-motion';
import React,{ useEffect } from 'react';
import AnimalPlanet from '../img/canales/AnimalPlanet.jpg';
import Star from '../img/canales/Star.jpg';
import Show from '../img/canales/ShowTime.jpg'
import Telemundo from '../img/canales/TelemundoNews.jpg';
import Cinemax from '../img/canales/Cinemax.jpg';
import Canales from '../img/canales/Canales24.jpg';
import Cnn from '../img/canales/Cnn.jpg';
import Discovery from '../img/canales/Discovery.jpg';
import Directv from '../img/canales/DirectvChannel.jpg';
import DisneyChannel from '../img/canales/DisneyChannelGOD.jpg';
import Junior from '../img/canales/DisneyJunior.jpg'
import Epix from '../img/canales/Epix.jpg';
import Espn from '../img/canales/Espn.jpg';
import FoxSport from '../img/canales/FoxSports.jpg';
import Nick from '../img/canales/Nick.jpg';
import Hbo from '../img/canales/Hbo.jpg';
import DirectvSports from '../img/canales/DirectvSports.png'
import DragonBall from '../img/canales/DragonBall.jpg';
import Simpson from '../img/canales/Simpson.jpg';
import History from '../img/canales/History.jpg';
import TigoSport from '../img/canales/TigoSports.png';
import Espn2 from '../img/canales/Espn2.png';
import Tudn from '../img/canales/Tudn.jpg';
import Brazzers from '../img/canales/Brazzers.jpg'
import FoxSports2 from '../img/canales/FoxSports2.jpg';
import RealityKings from '../img/canales/RealityKings.jpg';
import SkySports from '../img/canales/SkySportsSmall.png'
import Nationalgeo from '../img/canales/NationalGeographic.jpg';
import CN from '../img/canales/CartoonNetwork.jpg';
import DisneyXd from '../img/canales/DisneyXd.jpg';
import Venus from '../img/canales/Venus.jpg';
import FakeTaxi from '../img/canales/FakeTaxi.png';
import BangBros from '../img/canales/BangBros.jpg';
import Penthouse from '../img/canales/Penthouse.jpg';
import Mofos from '../img/canales/Mofos.jpeg'

const Contentthree = () => {

    return (
        <>
		<AppContainer>
		<TextTittle>Canales Premium</TextTittle>

		<CanalesSubtituloContainer>
		<CanalesSubtitulo>Accede a miles de canales  internacionales y de varias categorías, estos son solo algunos canales que ofrecemos</CanalesSubtitulo>
		</CanalesSubtituloContainer>

		<GlobalFlex>
			<FlexContainerGlobal>
				<ImgEpix />
				<ImgCnn />
				<ImgHbo />
				<ImgStarz />
				<ImgShow />
				<ImgAnimalPlanet />
				<ImgDiscovery />
			</FlexContainerGlobal>

			<FlexContainerGlobalOne>
				<ImgCanales />
				<ImgFoxSport />
				<ImgHistory />
				<ImgTelemundo />
				<ImgCinemax />
				<ImgNat />
				<ImgDirectv />
			</FlexContainerGlobalOne>

			<FlexContainerGlobalTwo>
				<ImgDisneyChannel />
				<ImgCartoonNetwork />
				<ImgDragonBall />
				<ImgSimpsons />
				<ImgDisneyXd />
				<ImgNick />
				<ImgJunior />
			</FlexContainerGlobalTwo>

			<FlexContainerGlobalThree>
				<ImgTigoSport />
				<ImgEspn />
				<ImgEspn2 />
				<ImgSkySports />
				<ImgDirectvSports />
				<ImgTudn />
				<ImgFoxSports2 />
			</FlexContainerGlobalThree>

			<FlexContainerGlobalFour>
				<ImgBrazzers />
				<ImgRealityKings />
				<ImgMofos />
				<ImgBangBros />
				<ImgVenus />
				<ImgFakeTaxi />
				<ImgPenthouse />
			</FlexContainerGlobalFour>
		</GlobalFlex>

		</AppContainer>
        </>
    );
}
export default Contentthree;

const AppContainer = styled.div`
	width: 100%;
	height: 130vh;
	background-color: #071c2f;

	@media (min-width: 300px) and (max-width: 400px) {
		width: 100%;
		height: 50vh;
	}
`;

const FlexContainerGlobal = styled.div`
	height: 100%;
	position: relative;
	width: 100%;
	display: flex;
	justify-items: center;
	gap: 15px;
	padding: 15px;
	flex-wrap: nowrap;
	flex-direction: row;

	@media (min-width: 300px) and (max-width: 400px) {
		display: flex;
		margin-top: 40px;
		margin-left: 70px;
		height: 130px;
		flex-direction: row;
		width: 300px;
		flex-wrap: wrap;
		max-width: 260px;
		gap: 2px;
	}
`;


const FlexContainerGlobalOne = styled.div`
	height: 100%;
	position: relative;
	width: 100%;
	display: flex;
	justify-items: center;
	gap: 15px;
	padding: 15px;
	flex-wrap: nowrap;
	flex-direction: row;

	@media (min-width: 300px) and (max-width: 400px) {
		display: flex;
		height: 130px;
		margin-top: 220px;
		margin-left: 50px;
		flex-direction: row;
		width: 300px;
		flex-wrap: wrap;
		max-width: 300px;
		gap: 2px;
	}
`;

const FlexContainerGlobalTwo = styled.div`
	height: 100%;
	position: relative;
	width: 100%;
	display: flex;
	justify-items: center;
	gap: 15px;
	padding: 15px;
	flex-wrap: nowrap;
	flex-direction: row;

	@media (min-width: 300px) and (max-width: 400px) {
		display: flex;
		margin-top: 100px;
		height: 130px;
		flex-direction: row;
		width: 300px;
		margin-left: 120px;
		flex-wrap: wrap;
		max-width: 400px;
		gap: 2px;
	}
`;

const FlexContainerGlobalThree = styled.div`
	height: 100%;
	position: relative;
	width: 100%;
	display: flex;
	justify-items: center;
	gap: 15px;
	padding: 15px;
	flex-wrap: nowrap;
	flex-direction: row;

	@media (min-width: 300px) and (max-width: 400px) {
		display: flex;
		margin-top: 100px;
		height: 130px;
		flex-direction: row;
		width: 300px;
		flex-wrap: wrap;
		max-width: 300px;
		gap: 2px;
	}
`;

const FlexContainerGlobalFour = styled.div`
	height: 100%;
	position: relative;
	width: 100%;
	display: flex;
	justify-items: center;
	gap: 15px;
	padding: 15px;
	flex-wrap: nowrap;
	flex-direction: row;

	@media (min-width: 300px) and (max-width: 400px) {
		display: flex;
		margin-top: 100px;
		height: 130px;
		flex-direction: row;
		width: 300px;
		flex-wrap: wrap;
		max-width: 300px;
		gap: 2px;
	}
`;



const GlobalFlex = styled.div`
	height: 130px;
	width: 100%;
	position: relative;

	@media (min-width: 300px) and (max-width: 800px) {
		height: 200px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 20%;
		max-width: 200px;
	}
`;



//Styles Logo canales

const ImgHbo = styled.div`
	height: 100px;
	position: relative;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	width: 200px;
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${Hbo});
	@media (min-width: 300px) and (max-width: 400px) {
		width: 100px;
		height: 80px;
	}
`;

const ImgPenthouse = styled.div`
	height: 100px;
	position: relative;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	width: 200px;
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${Penthouse});

	@media (min-width: 300px) and (max-width: 800px) {
		width: 80px;
		height: 70px;
	}
`;

const ImgFakeTaxi = styled.div`
	height: 100px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	position: relative;
	width: 200px;
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${FakeTaxi});
	@media (min-width: 300px) and (max-width: 800px) {
		width: 80px;
		height: 70px;
	}
`;

const ImgBrazzers = styled.div`
	height: 100px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	position: relative;
	width: 200px;
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${Brazzers});
	@media (min-width: 300px) and (max-width: 800px) {
		width: 80px;
		height: 70px;
	}
`;

const ImgVenus = styled.div`
	height: 100px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	position: relative;
	width: 200px;
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${Venus});
	
	@media (min-width: 300px) and (max-width: 800px) {
		width: 80px;
		height: 70px;
	}
`;

const ImgMofos = styled.div`
	height: 100px;
	width: 200px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	position: relative;
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${Mofos});

	@media (min-width: 300px) and (max-width: 800px) {
		width: 80px;
		height: 70px;
	}
`;

const ImgRealityKings = styled.div`
	height: 100px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	background-color: #fff;
	width: 200px;
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${RealityKings});
	@media (min-width: 300px) and (max-width: 800px) {
		width: 80px;
		height: 70px;
	}
`;

const ImgBangBros = styled.div`
	height: 100px;
	background-color: #fff;
	width: 200px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${BangBros});
	
	@media (min-width: 300px) and (max-width: 800px) {
		width: 80px;
		height: 70px;
	}
`;

const ImgTudn = styled.div`
	height: 100px;
	width: 200px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${Tudn});
`;

const ImgFoxSports2 = styled.div`
	height: 100px;
	width: 200px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${FoxSports2});
`;

const ImgSkySports = styled.div`
	height: 100px;
	width: 200px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${SkySports});
`;

const ImgDirectvSports = styled.div`
	height: 100px;
	width: 200px;
	border-radius: 5%;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	background-position: center;
	background-size: cover;
	background-image: url(${DirectvSports});
`;

const ImgEspn2 = styled.div`
	height: 100px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	width: 200px;
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${Espn2});
`;

const ImgTigoSport = styled.div`
	height: 100px;
	width: 200px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${TigoSport});
`;

const ImgEspn = styled.div`
	height: 100px;
	width: 200px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${Espn});
`;

const ImgDragonBall = styled.div`
	height: 100px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	width: 200px;
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${DragonBall});
`;

const ImgJunior = styled.div`
	height: 100px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	width: 200px;
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${Junior});
`;

const ImgNick = styled.div`
	height: 100px;
	width: 200px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${Nick});
`;

const ImgDisneyXd = styled.div`
	height: 100px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	width: 200px;
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${DisneyXd});
`;

const ImgSimpsons = styled.div`
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	height: 100px;
	width: 200px;
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${Simpson});
`;

const ImgTelemundo = styled.div`
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	height: 100px;
	width: 200px;
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${Telemundo});
`;

const ImgNat = styled.div`
	height: 100px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	width: 200px;
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${Nationalgeo});
`;

const ImgCinemax = styled.div`
	height: 100px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	width: 200px;
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${Cinemax});
`;

const ImgStarz = styled.div`
	height: 100px;
	width: 200px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${Star});
	
	@media (min-width: 300px) and (max-width: 800px) {
		width: 100px;
		height: 80px;
	}
`;

const ImgDisneyChannel = styled.div`
	height: 100px;
	width: 200px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${DisneyChannel});
`;

const ImgDirectv = styled.div`
	height: 100px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	width: 200px;
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${Directv});
`;

const ImgCartoonNetwork = styled.div`
	height: 100px;
	width: 200px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${CN});
`;

const ImgAnimalPlanet = styled.div`
	height: 100px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	width: 200px;
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${AnimalPlanet});

	@media (min-width: 300px) and (max-width: 800px) {
		width: 100px;
		height: 70px;
	}
`;

const ImgShow = styled.div`
	height: 100px;
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	width: 200px;
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${Show});

	@media (min-width: 300px) and (max-width: 800px) {
		width: 100px;
		height: 70px;
	}
`;

const ImgCnn = styled.div`
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	height: 100px;
	width: 200px;
	border-radius: 5%;
	background-repeat: no-repeat;
	-webkit-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	background-image: url(${Cnn});

	@media (min-width: 300px) and (max-width: 800px) {
		width: 100px;
		height: 80px;
	}
`;

const ImgEpix = styled.div`
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	height: 100px;
	width: 200px;
	border-radius: 5%;
	position: relative;
	background-position: center;
	background-size: cover;
	background-image: url(${Epix});

	@media (min-width: 300px) and (max-width: 800px) {
		width: 100px;
		height: 80px;
	}
`;

const ImgFoxSport = styled.div`
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	height: 100px;
	width: 200px;
	border-radius: 5%;
	background-repeat: no-repeat;
	-webkit-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	background-image: url(${FoxSport});
`;

const ImgHistory = styled.div`
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	height: 100px;
	width: 200px;
	border-radius: 5%;
	background-repeat: no-repeat;
	-webkit-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	background-image: url(${History});
`;


const ImgDiscovery = styled.div`
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	height: 100px;
	width: 200px;
	border-radius: 5%;
	background-repeat: no-repeat;
	-webkit-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	background-image: url(${Discovery});

	@media (min-width: 300px) and (max-width: 800px) {
		width: 200px;
		height: 90px;
	}
`;

const ImgCanales = styled.div`
	box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-webkit-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 9px 10px 23px 1px rgba(0,0,0,0.75);
	height: 100px;
	width: 200px;
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${Canales});
`;

const GridImgContainer = styled.div`
	height: 100px;
	width: 200px;
	border-radius: 5%;
	background-repeat: no-repeat;
	-webkit-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	background-image: url(${Cnn});
`;


const ContentButtonTwo = styled(motion.button)`
	height: 3rem;
	padding: 16px 32px;
	font-weight: 700;
	font-size: 0.8rem;
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
	cursor: pointer;
	background: none;
	color: ${({ inverse }) => (inverse ? '#0c4577' : 'white')};
	border-radius: 4px;
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: 2px solid ${({ inverse }) => (inverse ? '#0c4577' : 'white')};
	cursor: pointer;
	position: relative;
	overflow: hidden;

	&:before {
		background: ${({ inverse }) => (inverse ? '#0c4577' : 'white')};
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}

	&:hover:before {
		height: 500%;
	}

	&:hover {
		color: ${({ inverse }) => (inverse ? 'white' : 'black')};
	}

	@media (min-width: 350px) and (max-width: 650px){
		top: 0;
	}
	@media (min-width: 650px) and (max-width: 780px){
		top: 0;
	}
	@media (min-width: 780px) and (max-width: 850px){
		top: 0;
		margin-top: -30px;
		left: 300px;
		margin-bottom: 20px;
	}
	@media (min-width: 850px) and (max-width: 950px){
		top: 0;
		margin-left: 60%;
		margin-right: 50%;
		margin-bottom: 10px;
	}
	@media (min-width: 950px) and (max-width: 1050px){
		top: 250px;
		margin-left: 60%;
		margin-right: 50%;
	}
	@media (min-width: 1050px) and (max-width: 1250px){
		margin-left: 70%;
		margin-right: 50%;
		bottom: 25px;
	}
	@media (min-width: 1250px) and (max-width: 1550px){
		left: 90%;
		bottom: 25px;
	}
	@media (min-width: 1550px) and (max-width: 1850px){
		left: 90%;
		bottom: 25px;
	}
`;

const CanalesSubtituloContainer = styled.div`
	position: relative;
	text-align: center;
	width: 100%;
	height: 10%;
`;

const CanalesSubtitulo = styled.span`
	font-size: 20px;
	color: #fff;
	position: relative;

`;

const TextTittle = styled.h1`
	font-size: 30px;
	z-index: 2;
	margin-bottom: 40px;
	color: #fff;
	position: relative;
	top: 30px;
	text-align: center;
	@media (min-width: 420px) and (max-width: 500px ) {
		font-size: 18px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		font-size: 23px;
	}
	@media (min-width: 600px) and (max-width: 700px){
		font-size: 28px;
	}
	@media (min-width: 700px) and (max-width: 800px){
		font-size: 33px;
	}
	@media (min-width: 800px) and (max-width: 900px){
		font-size: 36px;
	}
	@media (min-width: 900px) and (max-width: 1000px){
		font-size: 36px;
	}
	@media (min-width: 1000px) and (max-width: 1200px){
		font-size: 36px;
	}
	@media (min-width: 1200px) and (max-width: 1500px){
		font-size: 36px;
	}
	@media (min-width: 1500px) and (max-width: 1700px){
		font-size: 36px;
	}
`;