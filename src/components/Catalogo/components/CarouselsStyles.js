import styled from 'styled-components';
import { Row } from '../../../globalStyles.js';
import Slider from 'react-slick';

export const CarouselImage = styled.img`
	width: 100%;
	height: 300px;
	border-radius: 10px 10px 0 0;
	object-fit: cover;
	border-radius: 10px;
	vertical-align: middle;
	@media (min-width: 300px) and (max-width: 500px) {
		height: 450px;
	}
`;

export const ImageWrapper = styled.div`
	width: 90%;
	display: flex !important;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	object-fit: contain;
	border: 2px 2px transparent;
	border-radius: 10px;
	outline: none;
	height: 305px;
	:hover{
		border-color: 5px 5px #fff;
		box-shadow: 3px 3px #fff;
		transform: translateY(-10px);
	}
	@media screen and (min-width: 440px) {
		border: 1px solid #bebebe;
	}
	@media (min-width:300px) and (max-width: 500px) {
		height: 450px;
	}
`;

export const ButtonContainer = styled(Row)`
	& svg {
		margin: 0 1rem;
		cursor: pointer;
	}

	& svg:hover {
		opacity: 0.7;
		transition: opacity 0.2s ease-in;
	}
	@media screen and (max-width: 960px) {
		margin: 0 auto;
	}
`;

export const ReviewSlider = styled(Slider)`
	width: 100%;

	.slick-track {
		display: flex;
		padding: 30px;
		gap: 1rem;
	}
	.slick-slide {
		display: flex;
		justify-content: center;
		margin-bottom: 1;
		outline: none;
	}

	.slick-list {
		overflow: hidden;
	}
`;

export const CardButton = styled.button`
	background-color: #1d609c;
	font-size: 1.3rem;
	padding: 5px 10px;
	color: #fff;
	cursor: pointer;
	width: 100%;
	font-weight: 600;
	margin: auto 0 0 0;
	border: none;
	border-radius: 0 0 10px 10px;

	&:hover {
		background-color: #112f4a;
		transition: background-color 0.2s ease-in;
	}
`;

export const TittleMovie = styled.h1`
	font-size: 14px;
	position: relative;
	top: 8px;
	letter-spacing: 0;
	font-weight: 700;
	color: #fff;
`;
