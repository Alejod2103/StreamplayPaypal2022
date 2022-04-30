import React from 'react';
import './Hero.css'
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroSubText, HeroText, ButtonWrapper } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/footer-bg.jpg" autoPlay muted />
			<Container>
				<Zoom top>
				<MainHeading>STREAM PLAY</MainHeading>
				</Zoom>
				<HeroText>
				 <HeroSubText className='subtitulo'>Obtén el mejor servicio de TV paga a nivel nacional, con mas +450 canales entre todos nuestros paquetes, contamos con la mejor programación en cuanto a Deportes, infantiles, series, películas y Tv shows. Lo mejor de todo es que contamos con full alta definición 4k en todos nuestros servicios, sin costos escondidos, Sin duda los mejores beneficios a un excelente precio.</HeroSubText>
				</HeroText>
				<ButtonWrapper>
					<Link to="pricing">
						<Button>Ver Paquetes</Button>
					</Link>
					<Link to="Catalogo">
						<Button>Ver Catalogo</Button>
					</Link>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
