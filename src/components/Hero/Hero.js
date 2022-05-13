import React from 'react';
import styled from 'styled-components'
import './Hero.css'
import  bg  from '../../back.png' 
import { Zoom, Bounce, Slide } from 'react-reveal';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import { HeroSection, HeroSubText, HeroText, ButtonWrapper, TittleContainer } from './HeroStyles';

const Hero = () => {
	return (
		<>
			<HeroSection>
				<Container>
	
			<ButtonWrapper>
				
				</ButtonWrapper>				
				</Container>
			</HeroSection>
		</>
		
	);
};

export default Hero;

export const MainHeadingTwo = styled.h1`
	font-size: 85px;
	display: flex;
	position: relative;
	line-height: 120px;
	color: transparent;
	width: 100%;
	left: 180px;
	text-align: center;
	-webkit-text-stroke: 3px #fff;
	background: url(${bg});
	background-clip: border-box;
	-webkit-background-clip: text;
	background-position: 0 0;
	animation: back 20s linear infinite;

	@keyframes back{
		100%{
			background-position: 2000px 0;
		}
	}

	@media (min-width: 300px) and (max-width: 350px) {
		font-size: 35px;
		left: 7px;
		line-height: 40px;
	}

	@media (min-width: 350px) and (max-width: 400px){
		font-size: 35px;
		left: 0;
		line-height: 40px;
	}

	@media (min-width: 400px) and (max-width: 450px){
		font-size: 35px;
		left: 20px;
		margin-top: -80px;
		width: 80%;
		line-height: 40px;
	}

	@media (min-width: 450px) and (max-width: 500px){
		font-size: 35px;
		left: 55px;
		max-width: 300px;
		line-height: 40px;
	}

	@media (min-width: 500px) and (max-width: 550px){
		font-size: 35px;
		left: 80px;
		max-width: 300px;
		line-height: 40px;
	}

	@media (min-width: 550px) and (max-width: 600px){
		font-size: 35px;
		left: 125px;
		max-width: 300px;
		line-height: 40px;
	}

	@media (min-width: 600px) and (max-width: 650px){
		font-size: 35px;
		left: 155px;
		max-width: 300px;
		line-height: 40px;
	}

	@media (min-width: 650px) and (max-width: 700px){
		font-size: 35px;
		left: 180px;
		max-width: 300px;
		line-height: 40px;
	}

	@media (min-width: 700px) and (max-width: 750px){
		font-size: 35px;
		left: 210px;
		max-width: 300px;
		line-height: 40px;
	}

	@media (min-width: 750px) and (max-width: 800px){
		font-size: 35px;
		left: 225px;
		max-width: 300px;
		line-height: 40px;
	}

	@media (min-width: 800px) and (max-width: 850px){
		font-size: 55px;
		left: 245px;
		max-width: 300px;
		line-height: 55px;
	}

	@media (min-width: 850px) and (max-width: 900px){
		font-size: 55px;
		left: 195px;
		max-width: 500px;
		line-height: 55px;
	}

	@media (min-width: 900px) and (max-width: 950px){
		font-size: 55px;
		left: 225px;
		max-width: 500px;
		line-height: 55px;
	}

	@media (min-width: 950px) and (max-width: 1000px){
		font-size: 55px;
		left: 215px;
		max-width: 500px;
		line-height: 55px;
	}

	@media (min-width: 1000px) and (max-width: 1050px){
		font-size: 55px;
		left: 205px;
		max-width: 600px;
		line-height: 55px;
	}

	@media (min-width: 1050px) and (max-width: 1100px){
		font-size: 55px;
		left: 225px;
		max-width: 600px;
		line-height: 55px;
	}

	@media (min-width: 1100px) and (max-width: 1150px){
		font-size: 55px;
		left: 225px;
		max-width: 500px;
		line-height: 55px;
	}

	@media (min-width: 1150px) and (max-width: 1200px){
		font-size: 55px;
		left: 265px;
		max-width: 600px;
		line-height: 55px;
	}

	@media (min-width: 1200px) and (max-width: 1250px) {
		font-size: 55px;
		left: 265px;
		max-width: 600px;
		line-height: 55px;
	}
	@media (min-width: 1250px) and (max-width: 1300px) {
		font-size: 55px;
		left: 265px;
		max-width: 600px;
		line-height: 55px;
	}
	@media (min-width: 1300px) and (max-width: 1350px){
		font-size: 55px;
		left: 265px;
		max-width: 600px;
		line-height: 55px;
	}
	@media (min-width: 1350px) and (max-width: 1400px){
		font-size: 65px;
		left: 265px;
		max-width: 600px;
		line-height: 65px;
	}
	@media (min-width: 1400px) and (max-width: 1600px){
		font-size: 75px;
		left: 265px;
		max-width: 600px;
		line-height: 75px;
	}
`;