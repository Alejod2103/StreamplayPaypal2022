import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IconContext } from 'react-icons';
import { data, sliderSettings } from '../CarouselsData.js';
import { Row, Heading, Section } from '../../../../globalStyles.js';
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	TittleMovie,
	SectionTittle,
} from './CarouselModStyles.js';
import { NavLink } from 'react-router-dom';
import '../Carousels.css'

const CarouselFr = () => {
	const [sliderRef, setSliderRef] = useState(null);

	return (
		<>
		<Section style={{display: 'none'}} margin="auto"  padding="50px 40px" inverse>
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<Heading width="auto" inverse>
					Populares en StreamPlay
				</Heading>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
						<IoIosArrowBack style={{ marginTop: '20px'}} onClick={sliderRef?.slickPrev} />
						<IoIosArrowForward style={{ marginTop: '20px'}} onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>
		</Section>

		<SectionTittle>Drama</SectionTittle>
		<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{data.map((el, index) => (
					<>
					<ImageWrapper key={index}>
						<NavLink to='/Pricing'>
						  <CarouselImage src={el.image} /> 							
						</NavLink>
					</ImageWrapper>
					<TittleMovie>{el.title}</TittleMovie>
					</>
				))}
		</ReviewSlider>
			</>
	);
};

export default CarouselFr;