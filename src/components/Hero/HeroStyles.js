import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const HeroSection = styled.section`
	height: 100%;
	width: 100%;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const HeroVideo = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	top: 0;
	position: absolute;
	z-index: -1;
`;

export const HeroSubText = styled.p`
	position: relative;
	letter-spacing: 1.5px;
	font-size: 17.5px;
	text-align: center;
	font-weight: 650;
	margin-top: 20px;
	width: 100%;

	@media (min-width: 300px) and (max-width: 350px) {
		font-size: 12px;
		max-width: 120px;
	}

	@media (min-width: 350px) and (max-width: 550px) {
		font-size: 14.5px;
	}

	@media (min-width: 700px) and (max-width: 850px) {
		font-size: 13.5px;
	}

`;

export const HeroText = styled.p`
	margin-bottom: 120px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 20.5px;
	text-align: center;
	position: relative;
	letter-spacing: 2px;
	color: #fff;

	@media (min-width: 300px) and (max-width: 450px) {
		margin-bottom: 60px;
		width: 350px;
		max-width: 350px;
	}
	@media (min-width: 450px) and (max-width: 550px) {
		margin-bottom: 60px;
	}
	@media (min-width: 550px) and (max-width: 900px) {
		margin-bottom: 30px;
	}
	@media (min-width: 900px) and (max-width: 1200px) {
		margin-bottom: 30px;
	}
	@media (min-width: 1200px) and (max-width: full-width){
				
	}
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
	margin-bottom: 40px;

	@media (min-width: 300px) and (max-width: 450px){
		width: 90%;		
		left: 20px;
	}
`;

export const HeroButton = styled(Button)`
	color: black;
	position: relative;

	&:before {
		background: #fff;
		height: 500%;
	}

	&:hover:before {
		height: 0%;
	}

	&:hover {
		color: white;
	}
`;

export const TittleContainer = styled.div`
	width: 100%;
	height: 100%;
	margin-top: 30px;
	text-align: center;
	@media (min-width: 450px) and (max-width: 550) {
		max-width: 200px;
	}
`;
