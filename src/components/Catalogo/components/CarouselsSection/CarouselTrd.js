import React, { useState } from 'react';
import { dataTwo, sliderSettings } from '../CarouselsData.js';
import {
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	TittleMovie,
	SectionTittle,
	ButtonContainer,
} from './CarouselModStyles.js';
import { NavLink } from 'react-router-dom';
import '../Carousels.css'
import { Heading, Row, Section } from '../../../../globalStyles.js';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IconContext } from 'react-icons';

const CarouselTrd = () => {
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
		<SectionTittle>Series Recomendadas</SectionTittle>
		<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{dataTwo.map((el, index) => (
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

export default CarouselTrd;