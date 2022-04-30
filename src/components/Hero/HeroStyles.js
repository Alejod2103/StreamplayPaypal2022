import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const HeroSection = styled.section`
	height: 100vh;
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
	top: 50px;

	@media (min-width: 300px) and (max-width: 700px) {
		top: 40px;
		font-size: 10px;
		font-weight: 700;
		width: 100%;
	}
`

export const HeroText = styled.p`
	margin-bottom: 120px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 23px;
	text-align: center;
	letter-spacing: 2px;
	color: #fff;

	@media (min-width: 300px) and (max-width: 450px) {
		margin-bottom: 60px;
	}
	@media (min-width: 450px) and (max-width: 800px) {
		margin-bottom: 60px;
		margin-left: 5%;
	}
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`;

export const HeroButton = styled(Button)`
	color: black;

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
