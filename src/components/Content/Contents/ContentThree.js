import styled from 'styled-components';
import React from 'react';
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
				<ImgDiscovery />
				<ImgHbo />
				<ImgStarz />
				<ImgShow />
				<ImgAnimalPlanet />
				<ImgCnn />
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

	@media (min-width: 300px) and (max-width: 450px){
		height: 180vh;
	}
	@media (min-width: 450px) and (max-width: 500px){
		height: 160vh;
	}
	@media (min-width: 500px) and (max-width: 600px){
		height: 170vh;
	}
	@media (min-width: 600px) and (max-width: 750px){
		height: 180vh;
	}
	@media (min-width: 750px) and (max-width: 900px){
		height: 230vh;		
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

	@media (min-width: 330px) and (max-width: 350px) {
		display: flex;
		margin-top: 20px;
		margin-left: 12px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		max-width: 350px;
		gap: 2px;
	}
	@media (min-width: 350px) and (max-width: 400px) {
		display: flex;
		margin-top: 10px;
		margin-left: 20px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		max-width: 350px;
		gap: 2px;
	}

	@media (min-width: 400px) and (max-width: 450px) {
		display: flex;
		margin-top: 10px;
		margin-left: 40px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		max-width: 350px;
		gap: 2px;
	}

	@media (min-width: 450px) and (max-width: 500px) {
		display: flex;
		margin-top: 10px;
		margin-left: 75px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		max-width: 350px;
		gap: 2px;
	}

	@media (min-width: 500px) and (max-width: 550px) {
		display: flex;
		margin-top: 10px;
		margin-left: 50px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 500px) and (max-width: 550px) {
		display: flex;
		margin-top: 34px;
		margin-left: 50px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 550px) and (max-width: 600px) {
		display: flex;
		margin-top: 34px;
		margin-left: 85px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 600px) and (max-width: 650px) {
		display: flex;
		margin-top: 34px;
		margin-left: 95px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 650px) and (max-width: 700px) {
		display: flex;
		margin-top: 14px;
		margin-left: 105px;
		height: 130px;
		flex-direction: row;
		width: 500px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 700px) and (max-width: 750px) {
		display: flex; 
		margin-top: 14px;
		margin-left: 98px;
		height: 130px;
		flex-direction: row;
		width: 600px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 750px) and (max-width: 800px) {
		display: flex; 
		margin-top: 2px;
		margin-left: 118px;
		height: 130px;
		flex-direction: row;
		width: 600px;
		flex-wrap: wrap;
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

	@media (min-width: 300px) and (max-width: 350px) {
		display: flex;
		margin-top: 10px;
		margin-left: 12px;
		height: 130px;
		flex-direction: row;
		width: 350px;
		flex-wrap: wrap;
		max-width: 350px;
		gap: 2px;
	}
	@media (min-width: 350px) and (max-width: 400px) {
		display: flex;
		margin-top: 35px;
		margin-left: 20px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		max-width: 350px;
		gap: 2px;
	}
	@media (min-width: 400px) and (max-width: 450px) {
		display: flex;
		margin-top: 35px;
		margin-left: 40px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		max-width: 350px;
		gap: 2px;
	}
	@media (min-width: 450px) and (max-width: 500px) {
		display: flex;
		margin-top: 35px;
		margin-left: 75px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		max-width: 350px;
		gap: 2px;
	}
	@media (min-width: 500px) and (max-width: 550px) {
		display: flex;
		margin-top: 34px;
		margin-left: 50px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 550px) and (max-width: 600px) {
		display: flex;
		margin-top: 34px;
		margin-left: 85px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 600px) and (max-width: 650px) {
		display: flex;
		margin-top: 34px;
		margin-left: 95px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 650px) and (max-width: 700px) {
		display: flex;
		margin-top: 34px;
		margin-left: 105px;
		height: 130px;
		flex-direction: row;
		width: 550px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 700px) and (max-width: 750px) {
		display: flex; 
		margin-top: 74px;
		margin-left: 98px;
		height: 130px;
		flex-direction: row;
		width: 600px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 750px) and (max-width: 800px){
		display: flex; 
		margin-top: 114px;
		margin-left: 118px;
		height: 130px;
		flex-direction: row;
		width: 600px;
		flex-wrap: wrap;
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
	
	@media (min-width: 300px) and (max-width: 350px) {
		display: flex;
		margin-top: 10px;
		margin-left: 12px;
		height: 130px;
		flex-direction: row;
		width: 350px;
		flex-wrap: wrap;
		max-width: 350px;
		gap: 2px;
	}
	@media (min-width: 350px) and (max-width: 400px) {
		display: flex;
		margin-top: 35px;
		margin-left: 20px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		max-width: 350px;
		gap: 2px;
	}
	@media (min-width: 400px) and (max-width: 450px) {
		display: flex;
		margin-top: 25px;
		margin-left: 40px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		max-width: 350px;
		gap: 2px;
	}
	@media (min-width: 450px) and (max-width: 500px) {
		display: flex;
		margin-top: 25px;
		margin-left: 75px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		max-width: 350px;
		gap: 2px;
	}
	@media (min-width: 500px) and (max-width: 550px) {
		display: flex;
		margin-top: 34px;
		margin-left: 50px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 550px) and (max-width: 600px) {
		display: flex;
		margin-top: 34px;
		margin-left: 85px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 600px) and (max-width: 650px) {
		display: flex;
		margin-top: 34px;
		margin-left: 95px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 650px) and (max-width: 700px) {
		display: flex;
		margin-top: 34px;
		margin-left: 105px;
		height: 130px;
		flex-direction: row;
		width: 500px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		display: flex; 
		margin-top: 74px;
		margin-left: 98px;
		height: 130px;
		flex-direction: row;
		width: 600px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 750px) and (max-width: 800px){
		display: flex; 
		margin-top: 114px;
		margin-left: 118px;
		height: 130px;
		flex-direction: row;
		width: 600px;
		flex-wrap: wrap;
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

	@media (min-width: 300px) and (max-width: 350px) {
		display: flex;
		margin-top: 10px;
		margin-left: 12px;
		height: 130px;
		flex-direction: row;
		width: 350px;
		flex-wrap: wrap;
		max-width: 350px;
		gap: 2px;
	}
	@media (min-width: 350px) and (max-width: 400px) {
		display: flex;
		margin-top: 50px;
		margin-left: 20px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		max-width: 350px;
		gap: 2px;
	}
	@media (min-width: 400px) and (max-width: 450px) {
		display: flex;
		margin-top: 34px;
		margin-left: 40px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		max-width: 350px;
		gap: 2px;
	}
	@media (min-width: 450px) and (max-width: 500px) {
		display: flex;
		margin-top: 35px;
		margin-left: 75px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		max-width: 350px;
		gap: 2px;
	}
	@media (min-width: 500px) and (max-width: 550px) {
		display: flex;
		margin-top: 34px;
		margin-left: 50px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 550px) and (max-width: 600px) {
		display: flex;
		margin-top: 34px;
		margin-left: 85px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 600px) and (max-width: 650px) {
		display: flex;
		margin-top: 34px;
		margin-left: 95px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 650px) and (max-width: 700px) {
		display: flex;
		margin-top: 34px;
		margin-left: 105px;
		height: 130px;
		flex-direction: row;
		width: 500px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		display: flex; 
		margin-top: 74px;
		margin-left: 98px;
		height: 130px;
		flex-direction: row;
		width: 600px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 750px) and (max-width: 800px) {
		display: flex; 
		margin-top: 114px;
		margin-left: 118px;
		height: 130px;
		flex-direction: row;
		width: 600px;
		flex-wrap: wrap;
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

	@media (min-width: 300px) and (max-width: 350px) {
		display: flex;
		margin-top: 10px;
		margin-left: 12px;
		height: 130px;
		flex-direction: row;
		width: 350px;
		flex-wrap: wrap;
		max-width: 350px;
		gap: 2px;
	}
	@media (min-width: 350px) and (max-width: 400px) {
		display: flex;
		margin-top: 50px;
		margin-left: 20px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		max-width: 350px;
		gap: 2px;
	}
	@media (min-width: 400px) and (max-width: 450px) {
		display: flex;
		margin-top: 34px;
		margin-left: 40px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		max-width: 350px;
		gap: 2px;
	}
	@media (min-width: 450px) and (max-width: 500px) {
		display: flex;
		margin-top: 35px;
		margin-left: 75px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		max-width: 350px;
		gap: 2px;
	}
	@media (min-width: 500px) and (max-width: 550px) {
		display: flex;
		margin-top: 34px;
		margin-left: 50px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 550px) and (max-width: 600px) {
		display: flex;
		margin-top: 34px;
		margin-left: 85px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 600px) and (max-width: 650px) {
		display: flex;
		margin-top: 34px;
		margin-left: 95px;
		height: 130px;
		flex-direction: row;
		width: 450px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 650px) and (max-width: 700px) {
		display: flex;
		margin-top: 34px;
		margin-left: 105px;
		height: 130px;
		flex-direction: row;
		width: 500px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 700px) and (max-width: 750px) {
		display: flex; 
		margin-top: 74px;
		margin-left: 98px;
		height: 130px;
		flex-direction: row;
		width: 600px;
		flex-wrap: wrap;
		gap: 2px;
	}
	@media (min-width: 750px) and (max-width: 800px) {
		display: flex; 
		margin-top: 114px;
		margin-left: 118px;
		height: 130px;
		flex-direction: row;
		width: 600px;
		flex-wrap: wrap;
		gap: 2px;
	}
`;



const GlobalFlex = styled.div`
	height: 130px;
	width: 100%;
	position: relative;

	@media (min-width: 300px) and (max-width: 400px) {
		height: 200px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 20%;
		max-width: 400px;
	}

	@media (min-width: 400px) and (max-width: 500px) {
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 700px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;		
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
	
	@media (min-width: 300px) and (max-width: 1000px) {
		display: none;
		width: 100px;
		height: 80px;
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
	
	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;	
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		box-shadow: none;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		box-shadow: none;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		box-shadow: none;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		box-shadow: none;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		box-shadow: none;
		height: 100px;			
	}
	@media (min-width: 750px) and (max-width: 800px){
		box-shadow: none;
		width: 185px;
		height: 120px;		
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;		
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;			
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;		
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;			
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;			
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;			
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;		
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;			
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
	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;			
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;	
	}

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

	@media (min-width: 300px) and (max-width: 500px) {
		display: none;
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		display: none;
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 900px){
		width: 130px;
		display: none;
		height: 80px;
	}
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;			
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;	
	}
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;			
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;	
	}
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;			
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;	
	}
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;			
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;	
	}
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;			
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;	
	}
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;		
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;	
	}

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
	@media (min-width: 300px) and (max-width: 400px) {
		width: 100px;
		height: 80px;
	}

	@media (min-width: 400px) and (max-width: 850px){
		display: none;
		width: 300px;
		height: 100px;
	}
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
	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;		
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;	
	}
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
	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;		
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;	
	}
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
	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;		
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;	
	}
`;

const ImgTelemundo = styled.div`
	height: 100px;
	width: 200px;
	position: relative;
	border-radius: 5%;
	background-position: center;
	background-size: cover;
	background-image: url(${Telemundo});

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
		box-shadow: none;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;		
	}
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;		
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;	
	}
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;		
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;			
	}
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
	
	@media (min-width: 300px) and (max-width: 400px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 400px) and (max-width: 500px){
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;		
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;		
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;	
	}
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

	@media (min-width: 300px) and (max-width: 400px) {
		width: 100px;
		height: 80px;
	}

	@media (min-width: 400px) and (max-width: 850px){
		display: none;
		width: 300px;
		height: 100px;
	}
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;		
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;	
	}
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;		
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;		
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;
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

	@media (min-width: 300px) and (max-width: 400px) {
		width: 100px;
		display: none;
		height: 80px;
	}
	@media (min-width: 400px) and (max-width: 800px) {
		display: none;
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;	
	}
	@media (min-width: 800px) and (max-width: 850px){
		width: 185px;
		height: 120px;		
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
	
	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 70px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;		
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;
	}
	@media (min-width: 750px) and (max-width: 800px) {
		width: 185px;
		height: 120px;
	}
	@media (min-width: 800px) and (max-width: 950px){
		
	}
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 70px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;		
	}
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

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 80px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;	
	}
	@media (min-width: 800px) and (max-width: 850px){
		width: 185px;
		height: 120px;	
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
	

	@media (min-width: 300px) and (max-width: 500px) {
		width: 100px;
		height: 70px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 600px) and (max-width: 650px){
		width: 130px;
		height: 80px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		width: 145px;
		height: 80px;		
	}
	@media (min-width: 700px) and (max-width: 750px){
		width: 165px;
		height: 100px;		
	}
	@media (min-width: 750px) and (max-width: 800px){
		width: 185px;
		height: 120px;		
	}
`;


const CanalesSubtituloContainer = styled.div`
	position: relative;
	text-align: center;
	width: 100%;
	height: 10%;

	@media (min-width: 300px) and (max-width: 350px){
		width: 300px;
		top: 20px;
		font-size: 15px;
	}

	@media (min-width: 350px) and (max-width: 400px){
		width: 300px;
		top: 20px;
		margin-left: 20px;
		font-size: 15px;
	}
	@media (min-width: 400px) and (max-width: 450px){
		width: 350px;
		top: 15px;
		text-align: center;
		margin-left: 25px;
	}
	@media (min-width: 450px) and (max-width: 500px){
		width: 400px;
		top: 20px;
		text-align: center;
		margin-left: 40px;
		margin-top: 20px;
	}

`;

const CanalesSubtitulo = styled.span`
	font-size: 20px;
	color: #fff;
	position: relative;
	text-align: center;
	@media (min-width: 300px) and (max-width: 400px){
		font-size: 15px;
		max-width: 300px;
	}
	@media (min-width: 400px) and (max-width: 450px){
		font-size: 15px;
		max-width: 400px;
		font-weight: 600;
	}
	@media (min-width: 450px) and (max-width: 500px){
		font-size: 15px;
		max-width: 500px;
		font-weight: 600;

	}
`;

const TextTittle = styled.h1`
	font-size: 30px;
	z-index: 2;
	margin-bottom: 40px;
	color: #fff;
	position: relative;
	top: 30px;
	text-align: center;
	@media (min-width: 300px) and (max-width: 420px) {
		text-align: center;
		font-size: 26px;
	}
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