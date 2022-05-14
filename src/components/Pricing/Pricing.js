import React from 'react';
import styled from 'styled-components'
import { Button, Heading, TextWrapper } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
	PricingSection,
	PricingWrapper,
	PricingContainer,
	PricingCardInfo,
	PricingCardPlan,
	PricingCardCost,
	PricingCardFeatures,
	PricingCardText,
	PricingCardFeature,
	PricingCard,
} from './PricingStyles';
import { pricingData } from '../../data/PricingData';

function Pricing() {
	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<PricingSection id="pricing">
				<PricingWrapper>
					<Heading>Nuestros Paquetes</Heading>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						Mas opciones de ahorro
					</TextWrapper>
					<PricingContainer>
						{pricingData.map((card, index) => (
							<PricingCard key={index}>
								<PricingCardInfo>
									<PricingCardPlan>{card.title}</PricingCardPlan>
									<PricingCardCost>{card.price}</PricingCardCost>
									<PricingCardText>{card.description}</PricingCardText>
									<PricingCardFeatures>
										{card.features.map((feature, index) => (
											<PricingCardFeature key={index}>
												{feature}
											</PricingCardFeature>
										))}
									</PricingCardFeatures>
									
									<ButtonWrapper href={card.link}><Button>Pagar Ahora</Button></ButtonWrapper> 							
								</PricingCardInfo>
							</PricingCard>
						))}
					</PricingContainer>
				</PricingWrapper>
			</PricingSection>
		</IconContext.Provider>
	);
}
export default Pricing;


const ButtonWrapper = styled.a`
	text-decoration: none;
	justify-content: center;
	z-index: 0;

	@media (min-width: 300px) and (max-width: 400px) {
		margin-left: 25px;
	}

	@media (min-width: 400px) and (max-width: 450px) {
		margin-left: 48px;
	}

	@media (min-width: 450px) and (max-width: 500px) {
		margin-left: 70px;
	}
	@media (min-width: 500px) and (max-width: 550px) {
		margin-left: 100px;
	}
	@media (min-width: 550px) and (max-width: 600px) {
		margin-left: 120px;
	}
	@media (min-width: 600px) and (max-width: 650px) {
		margin-left: 160px;
	}
	@media (min-width: 650px) and (max-width: 700px) {
		margin-left: 165px;
	}
	@media (min-width: 700px) and (max-width: 770px) {
		margin-left: 185px;
	}
	@media (min-width: 770px) and (max-width: 800px) {
		margin-left: 45px;
	}
	@media (min-width: 800px) and (max-width: 850px) {
		margin-left: 45px;
	}
	@media (min-width: 850px) and (max-width: 900px) {
		margin-left: 45px;
	}
	@media (min-width: 900px) and (max-width: 960px) {
		margin-left: 45px;
	}
	@media (min-width: 960px) and (max-width: 1000px) {
		margin-left: 45px;
	}
	@media (min-width: 1000px) and (max-width: 1100px) {
		margin-left: 45px;
	}
	@media (min-width: 1100px) and (max-width: 1500px) {
		margin-left: 45px;
	}
	@media (min-width: 1500px) and (max-width: 1900px) {
		margin-left: 45px;
	}
`;