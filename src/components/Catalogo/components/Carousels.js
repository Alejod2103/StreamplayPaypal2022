import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IconContext } from 'react-icons';
import { data, sliderSettings } from './CarouselsData.js';
import { Row, Heading, Section } from '../../../globalStyles.js';
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	TittleMovie,
} from './CarouselsStyles.js';
import { NavLink } from 'react-router-dom';
import './Carousels.css';

const Carousels = () => {
	const [sliderRef, setSliderRef] = useState(null);

	return (
		<>
		<Section className="alejo" margin="auto"  padding="15px 15px" inverse>
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<Heading style={{textShadow: "4px 4px #fff",}} inverse>
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

export default Carousels;