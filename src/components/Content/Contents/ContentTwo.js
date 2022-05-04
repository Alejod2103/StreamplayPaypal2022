import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import React,{ useEffect } from 'react';
import { Container } from '../../../globalStyles';
import {
	ContentRow,
	Subtitle,
	ContentColumn,
} from '../ContentStyles.js';
import Netflix from '../img/Netflix.jpg';
import Apple from '../img/Apple.jpg';
import Disney from '../img/Disney.jpg';
import Hbo from '../img/Hbomax.jpg';
import Hulu from '../img/Hulu.jpg';
import Prime from '../img/Prime.jpg';
import { Bounce } from 'react-reveal';
;

const Contenttwo = ({
    primary,
	inverse,
	reverse,
}) => {

    const initial = { opacity: 0, y: 30 };
	const animation = useAnimation();

	const { ref, inView } = useInView({ threshold: 0.2 });

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);

    return (
        <>
            		<SectionContentTwo inverse={inverse} ref={ref}>
			<Container>
				
				<ContentRow reverse={reverse}>
				<AvisoPeliculas>StreamPlay no ofrece cuentas para estas plataformas solo su contenido (películas y series)  La disponibilidad de las películas o series es condicional*</AvisoPeliculas>
					<ContentColumn>
						
						<TextWrapperTwo>
							
							<TopLineTwo
								initial={initial}
								transition={{ delay: 0.3, duration: 0.6 }}
								animate={animation}
							>
								Accede a las películas de TODAS las plataformas, estrenos de cine y mucho más
							</TopLineTwo>
							<HeadingTwo
								initial={initial}
								transition={{ delay: 0.5, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
							>
								lo mejor en entretenimiento exclusivo
							</HeadingTwo>
							<Subtitle
								initial={initial}
								transition={{ delay: 0.7, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
							>
								
							</Subtitle>

							<Link to={'/Catalogo'}>
							<ContentButtonTwo
								initial={initial}
								transition={{ delay: 1, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
								primary={primary}
							>
								Ver Catalogo
							</ContentButtonTwo>
							</Link>
							

						</TextWrapperTwo>
					</ContentColumn>
					<ContentColumn
						initial={initial}
						transition={{ delay: 0.5, duration: 0.6 }}
						animate={animation}
					>

						<GridWrapper>
							<Bounce top>
							<GridImage src={Netflix} />
							</Bounce>

							<Bounce bottom>
							<GridImage src={Apple} />
							</Bounce>

							<Bounce top>
							<GridImage src={Disney} />
							</Bounce>

							<Bounce bottom>
							<GridImage src={Hbo} />
							</Bounce>

							<Bounce top>
							<GridImage src={Hulu} />
							</Bounce>
							
							<Bounce bottom>
							<GridImage src={Prime} />
							</Bounce>
							
						</GridWrapper>

					</ContentColumn>
				</ContentRow>
			</Container>
		</SectionContentTwo>
        </>
    );
}
export default Contenttwo;

const GridWrapper = styled.div`
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 50%;
width: 100%;
position: relative;
gap: 1rem;
left: 2.5%;
justify-content: center;

@media (min-width: 400px) and (max-width: 650px) {
	gap: 25px;
	left: 0;
}

@media (min-width: 650px) and (max-width: 750px) {
	gap: 25px;
	z-index: -0;
}

@media (min-width: 750px) and (max-width: 850px) {
	gap: 25px;
	z-index: -0;
	margin-left: 3%;
}

@media (min-width: 850px) and (max-width: 950px) {
	display: flex;
	z-index: -0;
	margin-left: 0;
	left: 0;
}

@media (min-width: 950px) and (max-width: 1050px) {
	display: flex;
	z-index: -0;
	left: 0;
	margin-left: 0;
	top: -100px;
}

@media (min-width: 1050px) and (max-width: 1150px) {
	display: flex;
	z-index: 1;
	left: 0;
}
@media (min-width: 1150px) and (max-width: 1550px) {
	display: flex;
	z-index: 1;
	left: 0;
}`

const GridImage = styled.img`
	position: relative;
	height: 500px;
	border-radius: 10px;
	:hover{

	}
	@media (min-width: 300px) and (max-width: 450px) {
		height: 200px;

	}
	@media (min-width: 450px) and (max-width: 650px) {
		height: 350px;
		margin-left: -9.5px;
	}
	@media (min-width: 650px) and (max-width: 750px) {
		height: 450px;
	}
	@media (min-width: 750px) and (max-width: 850px) {
		height: 450px;
	}
	@media (min-width: 850px) and (max-width: 950px) {
		height: 200px;
		border-radius: 10px;
	}
	@media (min-width: 950px) and (max-width: 1050px) {
		height: 230px;
		border-radius: 10px;
	}
	@media (min-width: 1050px) and (max-width: 1150px) {
		height: 220px;
		border-radius: 10px;
	}
	@media (min-width: 1150px) and (max-width: 1250px) {
		height: 280px;
		border-radius: 10px;
	}
	@media (min-width: 1250px) and (max-width: 1550px) {
		height: 300px;
		border-radius: 10px;
	}
`;

const AvisoPeliculas = styled.h1`
	font-size: 9px;
	color: #fff;
	top: 40px;
	width: 100%;
	position: relative;
	@media (min-width: 300px) and (max-width: 450px){
		top: 10;
		font-size: 6.5px;
		letter-spacing: 0;
		justify-self: center;
		color: #9d9d9d;
	}

	@media (min-width: 450px) and (max-width: 650px){
		top: 10;
		font-size: 6.5px;
		letter-spacing: 0;
		justify-self: center;
		color: #9d9d9d;
	}

	@media (min-width: 650px) and (max-width: 850px){
		top: 1650px;
		font-size: 6.5px;
		letter-spacing: 0;
		text-align: center;
		color: #9d9d9d;
	}
	@media (min-width: 850px) and (max-width: 950px){
		top: 500px;
		font-size: 6.5px;
		letter-spacing: 0;
		text-align: center;
		color: #9d9d9d;
	}
	@media (min-width: 950px) and (max-width: 1050px){
		top: 490px;
		font-size: 6.5px;
		letter-spacing: 0;
		text-align: center;
		color: #9d9d9d;
	}
	@media (min-width: 1050px) and (max-width: 1250px){
		top: 650px;
		font-size: 6.5px;
		letter-spacing: 0;
		text-align: center;
		color: #9d9d9d;
	}
	@media (min-width: 1250px) and (max-width: 1550px){
		top: 700px;
		font-size: 6.5px;
		letter-spacing: 0;
		text-align: center;
		color: #9d9d9d;
	}
`;

const SectionContentTwo = styled.section`
	padding: ${({ padding }) => (padding ? padding : '140px 0')};
	margin: ${({ margin }) => (margin ? margin : '')};
	background: #000 ;
	background-position: cover;
	background-size: cover;
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : '100%')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};

	@media screen and (max-width: 768px) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : '70px 0')};
	}
`;

const HeadingTwo = styled(motion.h2)`
	margin-bottom: 450px;
	position: relative;
	font-size: 3rem;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ inverse }) => (inverse ? '#0c4577' : 'white')};

	@media (min-width: 300px) and (max-width: 450px) {
		margin-bottom: 0;
		font-size: 1.5rem;
	}

	@media (min-width: 450px) and (max-width: 650px) {
		margin-bottom: 0;
		font-size: 1.5rem;
	}
	@media (min-width: 650px) and (max-width: 750px) {
		margin-bottom: 0;
		font-size: 1.5rem;
	}
	@media (min-width: 750px) and (max-width: 850px) {
		margin-bottom: 0;
		top: -80px;
		font-size: 1.5rem;
	}
	@media (min-width: 850px) and (max-width: 950px) {
		margin-bottom: 0;
		top: -80px;
		font-size: 1.5rem;
	}
	@media (min-width: 950px) and (max-width: 1050px) {
		margin-bottom: 100px;
	}
	@media (min-width: 1050px) and (max-width: 1250px) {
		margin-bottom: 100px;
		top: -25px;
	}
	@media (min-width: 1250px) and (max-width: 1550px) {
		margin-bottom: 100px;
		top: -25px;
	}
`;

export const TopLineTwo = styled(motion.div)`
	font-size: 0.9rem;
	position: relative;
	width: 100%;
	line-height: 16px;
	font-weight: 550;
	letter-spacing: 1.4px;
	margin-bottom: 1.3rem;
	color: #979797;

	@media (min-width: 300px) and (max-width: 450px){
		letter-spacing: 0;
		font-size: 0.8rem;
	}

	@media (min-width: 450px) and (max-width: 650px){
		letter-spacing: 0;
		font-size: 10px;
		line-height: 0;
		margin-left: 15px;
	}

	@media (min-width: 650px) and (max-width: 750px){
		letter-spacing: 0;
		font-size: 10px;
		line-height: 0;
		margin-left: 75px;
	}
	@media (min-width: 750px) and (max-width: 850px){
		letter-spacing: 0;
		font-size: 13px;
		margin-bottom: 0;
		line-height: 0;
		top: 10px;
	}
	@media (min-width: 850px) and (max-width: 950px){
		letter-spacing: 0;
		font-size: 13px;
		margin-bottom: 0;
		line-height: 0;
		top: 10px;
	}
	@media (min-width: 950px) and (max-width: 1050px){
		letter-spacing: 0;
		font-size: 13px;
		margin-bottom: 0;
		line-height: 0;
		top: 180px;
	}
	@media (min-width: 1050px) and (max-width: 1250px){
		letter-spacing: 0;
		font-size: 13px;
		margin-bottom: 0;
		line-height: 0;
		top: 180px;
	}
	@media (min-width: 1250px) and (max-width: 1550px){
		letter-spacing: 0;
		font-size: 13px;
		margin-bottom: 0;
		line-height: 0;
		top: 180px;
	}
	@media (min-width: 1550px) and (max-width: 1850px){
		letter-spacing: 0;
		font-size: 13px;
		margin-bottom: 0;
		line-height: 0;
		top: 180px;
	}

`;

export const ContentButtonTwo = styled(motion.button)`
	height: 3rem;
	padding: 16px 32px;
	font-weight: 700;
	font-size: 0.8rem;
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
	cursor: pointer;
	background: none;
	color: ${({ inverse }) => (inverse ? '#0c4577' : 'white')};
	border-radius: 4px;
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: 2px solid ${({ inverse }) => (inverse ? '#0c4577' : 'white')};
	cursor: pointer;
	position: relative;
	overflow: hidden;

	&:before {
		background: ${({ inverse }) => (inverse ? '#0c4577' : 'white')};
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}

	&:hover:before {
		height: 500%;
	}

	&:hover {
		color: ${({ inverse }) => (inverse ? 'white' : 'black')};
	}

	@media (min-width: 350px) and (max-width: 650px){
		top: 0;
	}
	@media (min-width: 650px) and (max-width: 780px){
		top: 0;
	}
	@media (min-width: 780px) and (max-width: 850px){
		top: 0;
		margin-top: -30px;
		left: 300px;
		margin-bottom: 20px;
	}
	@media (min-width: 850px) and (max-width: 950px){
		top: 0;
		margin-left: 60%;
		margin-right: 50%;
		margin-bottom: 10px;
	}
	@media (min-width: 950px) and (max-width: 1050px){
		top: 250px;
		margin-left: 60%;
		margin-right: 50%;
	}
	@media (min-width: 1050px) and (max-width: 1250px){
		margin-left: 70%;
		margin-right: 50%;
		bottom: 25px;
	}
	@media (min-width: 1250px) and (max-width: 1550px){
		left: 90%;
		bottom: 25px;
	}
	@media (min-width: 1550px) and (max-width: 1850px){
		left: 90%;
		bottom: 25px;
	}
`;

export const TextWrapperTwo = styled.div`
	max-width: 540px;
	padding-top: 0;

	@media (min-width: 300px) and (max-width: 768px) {
		padding-bottom: 0px;
		> h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (min-width: 768px) and (max-width: 868px) {
		padding-bottom: 0px;
		> h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	> img {
		width: 300px;
		margin-left: -3px;
	}
`;


