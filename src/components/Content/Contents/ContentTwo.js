import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import React from 'react';
import Netflix from '../img/Netflix.jpg';
import Apple from '../img/Apple.jpg';
import Disney from '../img/Disney.jpg';
import Hbo from '../img/Hbomax.jpg';
import Hulu from '../img/Hulu.jpg';
import Prime from '../img/Prime.jpg';
import { Bounce } from 'react-reveal';
;

const Contenttwo = () => {
	
    return (
        <>

		<PageContainer>

		<TextContainer>

			<TextTittle>LO MEJOR EN ENTRETENIMIENTO EXCLUSIVO</TextTittle>

			<GridWrapper>
				<GridImage src={Netflix} />
				<GridImage src={Apple} />
				<GridImage src={Disney} />
				<GridImage src={Hbo} />
				<GridImage src={Hulu} />
				<GridImage src={Prime} />
			</GridWrapper>
		</TextContainer>


		<Link to={'/Catalogo'}>
				<ContentButtonTwo>
					Ver Catalogo
				</ContentButtonTwo>
		</Link>			

		</PageContainer>

        </>
    );
}
export default Contenttwo;

//Propiedades del grid que muestra las imagenes - NO TOCAR

const GridWrapper = styled.div`
display: grid;
box-sizing: border-box;
grid-template-columns: 120px 120px;
grid-template-rows: 140px 140px;
width: 100%;
max-width: 400px;
justify-content: space-evenly;
gap: 80px;
z-index: 1;
@media (min-width: 300px) and (max-width: 400px) {
	gap: 50px;
	grid-template-columns: 50px 120px;
}

@media (min-width: 400px) and (max-width: 450px) {
	gap: 45px;
	grid-template-columns: 35px 75px;
}

@media (min-width: 450px) and (max-width: 470px) {
	gap: 58px;
	grid-template-columns: 30px 80px;
}

@media (min-width: 470px) and (max-width: 500px){
	gap: 58px;
	grid-template-columns: 35px 7%;
}
@media (min-width: 500px) and (max-width: 550px){
	gap: 58px;
	grid-template-columns: 35px 2%;
}
@media (min-width: 550px) and (max-width: 600px){
	gap: 78px;
	grid-template-columns: 35px 30px;
	margin-left: 52px;
}

@media (min-width: 600px) and (max-width: 650px){
	gap: 88px;
	grid-template-columns: 32px 30px;
	margin-left: 14%;
}

@media (min-width: 650px) and (max-width: 700px){
	gap: 120px;
	grid-template-columns: 32px 30px;
	margin-left: 14%;
}

@media (min-width: 700px) and (max-width: 750px){
	gap: 150px;
	grid-template-columns: 32px 30px;
	margin-left: 14%;
}

@media (min-width: 750px) and (max-width: 800px){
	gap: 180px;
	grid-template-columns: 32px 30px;
	margin-left: 14%;
}
@media (min-width: 800px) and (max-width: 850px){
	gap: 180px;
	grid-template-columns: 32px 30px;
	margin-left: 16%;
}
@media (min-width: 850px) and (max-width: 900px){
	gap: 180px;
	grid-template-columns: 32px 30px;
	margin-left: 16%;
}

@media (min-width: 900px) and (max-width: 950px){
	gap: 230px;
	grid-template-columns: 32px 30px;
	margin-left: 22%;
}

@media (min-width: 950px) and (max-width: 1000px){
	gap: 230px;
	grid-template-columns: 32px 30px;
	margin-left: 22%;
}

@media (min-width: 1000px) and (max-width: 1050px){
	display: flex;
	gap: 20px;
	flex-wrap: nowrap;
	width: 10%;
	margin-left: 44%;
}

@media (min-width: 1050px) and (max-width: 1100px){
	display: flex;
	gap: 20px;
	flex-wrap: nowrap;
	width: 10%;
	margin-left: 44%;
}
@media (min-width: 1100px) and (max-width: 1150px){
	display: flex;
	gap: 20px;
	flex-wrap: nowrap;
	width: 3%;
	margin-left: 48%;
}
@media (min-width: 1150px) and (max-width: 1200px){
	display: flex;
	gap: 20px;
	flex-wrap: nowrap;
	width: 10%;
	margin-left: 44%;
}
@media (min-width: 1200px) and (max-width: 1250px){
	display: flex;
	gap: 20px;
	flex-wrap: nowrap;
	max-width: 10px;
	width: 200px;
	margin-left: 49%;
}
@media (min-width: 1250px) and (max-width: 1300px){
	display: flex;
	gap: 20px;
	flex-wrap: nowrap;
	width: 5%;
	max-width: 100px;
	margin-left: 48%;
}
@media (min-width: 1300px) and (max-width: 1400px){
	display: flex;
	gap: 20px;
	flex-wrap: nowrap;
	width: 5%;
	max-width: 100px;
	margin-left: 46%;
}
@media (min-width: 1400px) and (max-width: 1600px){
	display: flex;
	gap: 20px;
	flex-wrap: nowrap;
	width: 5%;
	max-width: 100px;
	margin-left: 47.5%;
}
@media (min-width: 1600px) and (max-width: 1800px){
	display: flex;
	gap: 20px;
	flex-wrap: nowrap;
	width: 5%;
	max-width: 100px;
	margin-left: 47.5%;
}

`;

const GridImage = styled.img`
	position: relative;
	height: 500px;
	border-radius: 10px;
	:hover{

	}
	@media (min-width: 300px) and (max-width: 450px) {
		height: 175px;	
	}
	@media (min-width: 450px) and (max-width: 550px) {
		height: 190px;
	}
	@media (min-width: 550px) and (max-width: 650px) {
		height: 210px;
	}
	@media (min-width: 650px) and (max-width: 700px){
		height: 250px;
	}
	@media (min-width: 700px) and (max-width: 750px){
		height: 280px;
	}
	@media (min-width: 750px) and (max-width: 800px){
		height: 310px;
	}
	@media (min-width: 800px) and (max-width: 850px){
		height: 310px;
	}
	@media (min-width: 850px) and (max-width: 900px){
		height: 310px;
	}
	@media (min-width: 900px) and (max-width: 950px){
		height: 360px;
	}
	@media (min-width: 950px) and (max-width: 1000px){
		height: 360px;
	}
	@media (min-width: 1000px) and (max-width: 1050px){
		height: 220px;
	}
	@media (min-width: 1050px) and (max-width: 1100px){
		height: 240px;
	}
	@media (min-width: 1100px) and (max-width: 1150px){
		height: 270px;
	}
	@media (min-width: 1150px) and (max-width: 1200px){
		height: 270px;
	}
	@media (min-width: 1200px) and (max-width: 1250px){
		height: 270px;
	}
	@media (min-width: 1250px) and (max-width: 1300px){
		height: 300px;
	}
	@media (min-width: 1300px) and (max-width: 1400px){
		height: 330px;
	}
	@media (min-width: 1400px) and (max-width: 1500px){
		height: 340px;
	}
	@media (min-width: 1500px) and (max-width: 1550px){
		height: 340px;
	}
	@media (min-width: 1550px) and (max-width: 1600px){
		height: 370px;
	}
	@media (min-width: 1600px) and (max-width: 1800px){
		height: 370px;
	}
	@media (min-width: 1800px) and (max-width: 1900px){
		
	}
`;

//Propiedades de los esilos de componente
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

export const ContentButtonTwo = styled(motion.button)`
	height: 3rem;
	padding: 16px 32px;
	font-weight: 700;
	font-size: 0.8rem;
	margin-top: 40px;
	margin-bottom: 40px;
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
		position: relative;
		top: 50%;
		left: 50%;
		margin-top: 20px;
		margin-bottom: 20px;
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
	@media (min-width: 300px) and (max-width: 400px){
		margin-left: 23%;
	}
	@media (min-width: 400px) and (max-width: 500px){
		margin-left: 28%;
	}
	@media (min-width: 500px) and (max-width: 600px){
		margin-left: 34%;
	}
	@media (min-width: 600px) and (max-width: 700px){
		margin-left: 38%;
	}
	@media (min-width: 700px) and (max-width: 800px){
		margin-left: 42%;
	}
	@media (min-width: 800px) and (max-width: 900px){
		margin-left: 45%;
	}
	@media (min-width: 900px) and (max-width: 1000px){
		margin-left: 45%;
	}
	@media (min-width: 1000px) and (max-width: 1200px){
		margin-left: 45%;
	}
	@media (min-width: 1200px) and (max-width: 1500px){
		margin-left: 45%;
	}
	@media (min-width: 1500px) and (max-width: 1800px){
		margin-left: 45%;
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
	@media (min-width: 1550px) and (max-width: full-width){
		top: 700px;
		font-size: 6.5px;
		letter-spacing: 0;
		text-align: center;
		color: #9d9d9d;
	}
`;

const PageContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: #000;
`;

const TextContainer = styled.div`
	text-align: center;
	width: 100%;
	height: 100%;
	color: #fff;
	z-index: 2;
`;

const TextTittle = styled.h1`
	font-size: 15px;
	z-index: 2;
	margin-bottom: 40px;
	color: #fff;
	margin-left: 5%;
	margin-right: 5%;
	@media (min-width: 420px) and (max-width: 500px ) {
		font-size: 18px;
	}
	@media (min-width: 500px) and (max-width: 600px){
		font-size: 23px;
	}
	@media (min-width: 600px) and (max-width: 700px){
		font-size: 28px;
	}
	@media (min-width: 700px) and (max-width: 800px){
		font-size: 33px;
	}
	@media (min-width: 800px) and (max-width: 900px){
		font-size: 36px;
	}
	@media (min-width: 900px) and (max-width: 1000px){
		font-size: 36px;
	}
	@media (min-width: 1000px) and (max-width: 1200px){
		font-size: 36px;
	}
	@media (min-width: 1200px) and (max-width: 1500px){
		font-size: 36px;
	}
	@media (min-width: 1500px) and (max-width: 1700px){
		font-size: 36px;
	}
`;